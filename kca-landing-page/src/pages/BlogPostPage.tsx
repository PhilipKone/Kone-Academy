import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, FaClock, FaCalendarAlt, FaWhatsapp, 
  FaLinkedinIn, FaLinkedin, FaUser, FaShareAlt 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { staticBlogs, BlogPost } from '../data/blogs';
import { updatePageMeta } from '../utils/seo';
import './BlogsPage.css';

interface BlogPostPageProps {
  slug: string;
  onBack: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onBack }) => {
  const initialMatch = staticBlogs.find(b => b.slug === slug) || null;
  const [post, setPost] = useState<BlogPost | null>(initialMatch);
  const [isLoading, setIsLoading] = useState<boolean>(!initialMatch);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Update dynamic head Open Graph meta tags when post loads
  useEffect(() => {
    if (post) {
      const socialImage = post.imageUrl.replace(/\.(webp|png)$/, '.jpg');
      updatePageMeta({
        title: post.title,
        description: post.excerpt,
        image: socialImage,
        url: `/blog/${post.slug}`,
        type: 'article',
        author: post.author.name,
        publishedTime: post.publishedAt,
      });
    }
  }, [post]);

  useEffect(() => {
    const staticMatch = staticBlogs.find(b => b.slug === slug) || null;
    if (staticMatch) {
      setPost(staticMatch);
      setIsLoading(false);
    }

    const fetchPost = async () => {
      try {
        const isPrerender = typeof window !== 'undefined' && (
          window.navigator.userAgent.includes('ReactSnap') ||
          (window as any).__PRERENDER_INJECTED
        );
        if (isPrerender) return;

        // Dynamically import Firebase and Firestore to avoid background connections during pre-render
        const { db } = await import('../firebase/config');
        const { collection, getDocs, query, where } = await import('firebase/firestore');
        
        if (!db || typeof db.app === 'undefined' || !db.app.name) return;

        const blogsRef = collection(db, 'blogs');
        const q = query(
          blogsRef, 
          where('slug', '==', slug), 
          where('status', '==', 'published')
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setPost({
            id: doc.id,
            title: data.title || '',
            slug: data.slug || '',
            category: data.category || 'Code',
            excerpt: data.excerpt || '',
            content: data.content || '',
            imageUrl: data.imageUrl || '/assets/blog/ka_blog_logic.jpg',
            readTime: Number(data.readTime) || 5,
            author: {
              name: data.author?.name || 'Kone Academy',
              role: data.author?.role || 'Staff Writer',
              avatar: data.author?.avatar || ''
            },
            publishedAt: data.publishedAt || new Date().toISOString().split('T')[0]
          });
        }
      } catch (err) {
        console.warn('Firestore single post fetch error, falling back to static post data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  // Track page scroll progress depth
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="post-skeleton-wrapper">
        <div className="skeleton-badge skeleton-shimmer" style={{ width: '110px', height: '32px', borderRadius: '30px' }} />
        <div className="skeleton-badge skeleton-shimmer" style={{ width: '90px', height: '14px', marginTop: '12px' }} />
        <div className="skeleton-title skeleton-shimmer" style={{ height: '36px', marginTop: '8px' }} />
        <div className="skeleton-title-short skeleton-shimmer" style={{ height: '36px' }} />
        <div className="post-author-card" style={{ marginTop: '16px', background: 'rgba(255,255,255,0.02)' }}>
          <div className="skeleton-author">
            <div className="skeleton-avatar skeleton-shimmer" style={{ width: '44px', height: '44px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="skeleton-author-name skeleton-shimmer" style={{ width: '120px', height: '16px' }} />
              <div className="skeleton-author-name skeleton-shimmer" style={{ width: '90px', height: '12px' }} />
            </div>
          </div>
        </div>
        <div className="skeleton-hero-img skeleton-shimmer" />
        <div className="skeleton-excerpt-line skeleton-shimmer" style={{ height: '16px' }} />
        <div className="skeleton-excerpt-line skeleton-shimmer" style={{ height: '16px' }} />
        <div className="skeleton-excerpt-short skeleton-shimmer" style={{ height: '16px' }} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="post-wrapper text-center" style={{ padding: '8rem 2rem' }}>
        <h2>Post Not Found</h2>
        <p style={{ margin: '1.5rem 0' }}>The insight you are looking for does not exist or has been archived.</p>
        <button className="blog-back-btn" onClick={onBack}>
          <FaArrowLeft size={13} />
          <span>Back to Feed</span>
        </button>
      </div>
    );
  }

  // Simple custom Markdown to HTML Parser to avoid heavy bundle dependencies
  const applyInline = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  };

  const parseMarkdown = (markdown: string) => {
    if (!markdown) return '';
    const lines = markdown.split('\n');
    let inList = false;
    let listType: 'ul' | 'ol' = 'ul';
    let inCodeBlock = false;
    let codeContent: string[] = [];
    let html = '';

    const closeList = () => {
      if (inList) {
        html += listType === 'ol' ? '</ol>' : '</ul>';
        inList = false;
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          inCodeBlock = false;
          html += `<pre><code>${codeContent.join('\n')}</code></pre>`;
          codeContent = [];
        } else {
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        continue;
      }

      // Horizontal lines
      if (line === '---') {
        closeList();
        html += '<hr />';
        continue;
      }

      // Headings
      if (line.startsWith('### ')) {
        closeList();
        html += `<h3>${applyInline(line.substring(4))}</h3>`;
        continue;
      }
      if (line.startsWith('## ')) {
        closeList();
        html += `<h2>${applyInline(line.substring(3))}</h2>`;
        continue;
      }
      if (line.startsWith('# ')) {
        closeList();
        html += `<h2 style="font-size: 2rem; margin-top: 3.5rem; margin-bottom: 1.5rem; font-weight: 800; color: #fff;">${applyInline(line.substring(2))}</h2>`;
        continue;
      }

      // Blockquotes
      if (line.startsWith('> ')) {
        closeList();
        html += `<blockquote><p>${applyInline(line.substring(2))}</p></blockquote>`;
        continue;
      }

      // Unordered lists — match * or - followed by one or more spaces
      const ulMatch = line.match(/^[*\-]\s+(.*)/);
      if (ulMatch) {
        if (!inList || listType !== 'ul') {
          closeList();
          html += '<ul>';
          inList = true;
          listType = 'ul';
        }
        html += `<li>${applyInline(ulMatch[1])}</li>`;
        continue;
      }

      // Ordered lists — match 1. or 1) followed by spaces
      const olMatch = line.match(/^\d+[.)]\s+(.*)/);
      if (olMatch) {
        if (!inList || listType !== 'ol') {
          closeList();
          html += '<ol>';
          inList = true;
          listType = 'ol';
        }
        html += `<li>${applyInline(olMatch[1])}</li>`;
        continue;
      }

      // Paragraph spaces
      if (line.trim() === '') {
        closeList();
        continue;
      }

      closeList();
      html += `<p>${applyInline(line)}</p>`;
    }

    closeList();
    if (inCodeBlock) html += `<pre><code>${codeContent.join('\n')}</code></pre>`;
    return html;
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="post-progress-container">
        <div className="post-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <motion.div 
        className="post-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Back Button */}
        <button className="blog-back-btn" onClick={onBack}>
          <FaArrowLeft size={13} />
          <span>Back to Feed</span>
        </button>

        {/* Post Metadata Header */}
        <div className="post-meta-top">
          <span>{post.category}</span>
          <div className="post-meta-dot" />
          <span className="post-meta-date">{post.publishedAt}</span>
        </div>

        <h1 className="post-title">{post.title}</h1>

        {/* Author Card Block */}
        <div className="post-author-card">
          <div 
            className="post-author-card-link"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/author/philip-hotor');
              window.dispatchEvent(new Event('popstate'));
            }}
            title={`View ${post.author.name}'s Profile & Publications`}
            style={{ cursor: 'pointer' }}
          >
            <div className="post-author-profile">
              {post.author.avatar ? (
                <img src={post.author.avatar} alt={post.author.name} className="post-author-img" />
              ) : (
                <div className="post-author-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)' }}>
                  <FaUser />
                </div>
              )}
              <div className="post-author-details">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="post-author-name">{post.author.name}</span>
                  <FaLinkedin size={13} style={{ color: '#0a66c2' }} />
                </div>
                <span className="post-author-role">{post.author.role}</span>
              </div>
            </div>
          </div>
          <span className="blog-card-readtime" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaClock size={12} />
            {post.readTime} min read
          </span>
        </div>

        {/* Floating social sharing sidebar */}
        <div className="post-share-layout">
          <a 
            href={`https://wa.me/?text=${shareTitle}%20-%20${shareUrl}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="share-btn whatsapp"
            title="Share on WhatsApp"
          >
            <FaWhatsapp size={16} />
          </a>
          <a 
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="share-btn linkedin"
            title="Share on LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a 
            href={`https://x.com/intent/post?text=${shareTitle}&url=${shareUrl}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="share-btn twitter"
            title="Share on X"
          >
            <FaXTwitter size={15} />
          </a>
        </div>

        {/* Large Cover Image */}
        <img src={post.imageUrl} alt={post.title} className="post-hero-image" />

        {/* Rendered HTML Post Content */}
        <div 
          className="post-body" 
          dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} 
        />

        {/* Registration CTA card at footer of article */}
        <div className="post-cta">
          <h3 className="post-cta-title">Register at Kone School</h3>
          <p className="post-cta-desc">
            Cohort positions are open. Build physical robotics firmware, structured web code, and master AI pathways through hands-on project systems.
          </p>
          <a 
            href={`https://wa.me/233551993820?text=Hello%20Kone%20Academy%2C%20I%20am%20interested%20in%20joining%20the%20Kone%20School%20cohort%20after%20reading%20your%20insight%20post%20on%20${shareTitle}.`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="post-cta-btn"
          >
            <FaWhatsapp size={18} />
            <span>Join Cohort (WhatsApp)</span>
          </a>
        </div>

      </motion.div>
    </>
  );
};

export default BlogPostPage;
