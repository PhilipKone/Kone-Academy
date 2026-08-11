import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaLinkedin, FaGithub, FaClock, FaCheckCircle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { staticBlogs, BlogPost } from '../data/blogs';
import { updatePageMeta } from '../utils/seo';
import './AuthorPage.css';
import './BlogsPage.css';

interface AuthorPageProps {
  onBack: () => void;
  onNavigatePost: (slug: string) => void;
}

const AuthorPage: React.FC<AuthorPageProps> = ({ onBack, onNavigatePost }) => {
  const authorName = "Philip Hotor";
  const authorRole = "Head of Engineering & Founder";
  const authorAvatar = "/assets/blog/author_philip.webp";
  const linkedinUrl = "https://www.linkedin.com/in/philip-kone";
  const twitterUrl = "https://x.com/Philkone1";
  const githubUrl = "https://github.com/PhilipKone";

  // Filter all articles by Philip Hotor
  const authorPosts: BlogPost[] = staticBlogs.filter(
    (post) => post.author.name === authorName || post.author.name === "Kone Academy"
  );

  useEffect(() => {
    updatePageMeta({
      title: `${authorName} | ${authorRole} | Kone Academy`,
      description: `Read technical insights, system engineering notes, and AI compute breakdowns authored by ${authorName}, ${authorRole} at Kone Academy.`,
      image: authorAvatar,
      url: '/author/philip-hotor',
      type: 'article',
      author: authorName
    });

    // Inject Person JSON-LD Schema into head for Google E-E-A-T SEO
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": authorName,
      "jobTitle": authorRole,
      "worksFor": {
        "@type": "Organization",
        "name": "Kone Academy",
        "url": "https://www.koneacademy.io"
      },
      "image": `https://www.koneacademy.io${authorAvatar}`,
      "url": "https://www.koneacademy.io/author/philip-hotor",
      "sameAs": [
        linkedinUrl,
        twitterUrl,
        githubUrl
      ],
      "knowsAbout": [
        "Software Architecture",
        "Embedded Systems",
        "IoT Engineering",
        "Microcontrollers",
        "Artificial Intelligence Compute"
      ]
    };

    let scriptTag = document.querySelector('#author-person-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'author-person-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(personSchema);

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="author-page-container">
      {/* Back Button */}
      <button className="blog-back-btn" onClick={onBack} style={{ marginBottom: '2.5rem' }}>
        <FaArrowLeft size={13} />
        <span>Back to Insights</span>
      </button>

      {/* Author Header Profile Card */}
      <motion.div 
        className="author-header-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="author-profile-main">
          <div className="author-profile-avatar-wrapper">
            <img src={authorAvatar} alt={authorName} className="author-profile-avatar" />
            <div className="author-verified-badge" title="Verified Author Profile">
              <FaLinkedin size={16} />
            </div>
          </div>
          <div className="author-info-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 className="author-name-title">{authorName}</h1>
              <FaCheckCircle size={20} style={{ color: '#00E5FF' }} title="Verified Author" />
            </div>
            <p className="author-role-subtitle">{authorRole}</p>
            <p className="author-bio-text">
              Directing software engineering, IoT hardware protocols, and distributed AI compute research across the Kone ecosystem. Dedicated to bridging theoretical logic with production-grade technology infrastructure.
            </p>
            <div className="author-social-links">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="author-social-btn linkedin">
                <FaLinkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="author-social-btn twitter">
                <FaXTwitter size={15} />
                <span>X (@Philkone1)</span>
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="author-social-btn github">
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Published Articles Feed */}
      <div className="author-articles-section">
        <div className="author-articles-header">
          <h2 className="author-articles-title">Published Insights by {authorName}</h2>
          <span className="author-articles-count">{authorPosts.length} Publications</span>
        </div>

        <div className="blogs-grid">
          {authorPosts.map((blog) => (
            <motion.div
              key={blog.slug}
              className="blog-card"
              onClick={() => onNavigatePost(blog.slug)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="blog-card-img-wrapper">
                <img src={blog.imageUrl} alt={blog.title} className="blog-card-img" />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-category">{blog.category}</span>
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-excerpt">{blog.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-author-info">
                    {blog.author.avatar && (
                      <img 
                        src={blog.author.avatar} 
                        alt={blog.author.name} 
                        className="blog-author-avatar" 
                      />
                    )}
                    <span className="blog-author-name">{blog.author.name}</span>
                  </div>
                  <span className="blog-card-readtime">
                    <FaClock size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {blog.readTime} min read
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
