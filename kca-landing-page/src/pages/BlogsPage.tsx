import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaChevronRight, FaArrowLeft, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { staticBlogs, BlogPost } from '../data/blogs';
import './BlogsPage.css';

interface BlogsPageProps {
  onBack: () => void;
  onNavigatePost: (slug: string) => void;
}

const BlogsPage: React.FC<BlogsPageProps> = ({ onBack, onNavigatePost }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(staticBlogs);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const isPrerender = typeof window !== 'undefined' && (
          window.navigator.userAgent.includes('ReactSnap') ||
          (window as any).__PRERENDER_INJECTED
        );
        if (isPrerender) {
          setIsLoading(false);
          return;
        }

        // Dynamically import Firebase and Firestore to avoid background connections during pre-render
        const { db } = await import('../firebase/config');
        const { collection, getDocs, query, where, orderBy } = await import('firebase/firestore');

        // Safe check: if Firestore db is offline or dummy initialized, skip connection
        if (!db || typeof db.app === 'undefined' || !db.app.name) {
          setIsLoading(false);
          return;
        }

        const blogsRef = collection(db, 'blogs');
        const q = query(
          blogsRef, 
          where('status', '==', 'published'),
          orderBy('publishedAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const fetchedBlogs: BlogPost[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedBlogs.push({
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
        });

        if (fetchedBlogs.length > 0) {
          // Merge dynamic blogs from Firestore with local static baseline
          // Match by slug to avoid duplicate entries
          const merged = [...fetchedBlogs];
          staticBlogs.forEach((sb) => {
            if (!merged.some((mb) => mb.slug === sb.slug)) {
              merged.push(sb);
            }
          });
          setBlogs(merged);
        }
      } catch (err) {
        console.warn('Firestore Fetch Warning: Fallback to local static blogs. Context:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ['All', 'Code', 'Lab', 'Ecosystem'];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div 
      className="blogs-container"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
    >
      {/* Back to Home Button */}
      <button className="blog-back-btn" onClick={onBack}>
        <FaArrowLeft size={13} />
        <span>Back to Home</span>
      </button>

      {/* Hero Header */}
      <div className="blogs-hero">
        <span className="blogs-badge">Ecosystem Insights</span>
        <h1 className="blogs-title">Kone Academy Blog</h1>
        <p className="blogs-subtitle">
          Explore research notes, system engineering breakthroughs, and curriculum announcements from the Kone Code, Lab, and School team.
        </p>
      </div>

      {/* Search and Category Filter Tabs */}
      <div className="blogs-search-filter">
        <div className="blogs-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blogs-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blogs-search-wrapper">
          <FaSearch className="blogs-search-icon" />
          <input
            type="text"
            className="blogs-search-input"
            placeholder="Search insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Blogs Grid */}
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem 0' }}>
          <div className="loader-ring" />
        </div>
      ) : (
        <AnimatePresence mode="popLayout">
          {filteredBlogs.length > 0 ? (
            <motion.div 
              className="blogs-grid"
              layout
            >
              {filteredBlogs.map((blog) => (
                <motion.div
                  key={blog.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="blog-card"
                  onClick={() => onNavigatePost(blog.slug)}
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
                      <span className="blog-card-readtime">{blog.readTime} min read</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="blogs-empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="blogs-empty-title">No Insights Found</h3>
              <p>Try matching other tags or categories in your search filter.</p>
            </motion.div>
          )}
        </AnimatePresence>
      )}

    </motion.div>
  );
};

export default BlogsPage;
