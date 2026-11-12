import React from 'react';
import '../pages/BlogsPage.css';

export const BlogHubSkeleton: React.FC = () => {
  return (
    <div className="blogs-container">
      {/* Back Button Skeleton */}
      <div className="skeleton-badge skeleton-shimmer" style={{ width: '130px', height: '36px', borderRadius: '30px', marginBottom: '2rem' }} />

      {/* Hero Header Skeleton */}
      <div className="blogs-hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '3rem' }}>
        <div className="skeleton-badge skeleton-shimmer" style={{ width: '140px', height: '28px', borderRadius: '20px' }} />
        <div className="skeleton-title skeleton-shimmer" style={{ width: '60%', height: '42px', maxWidth: '600px' }} />
        <div className="skeleton-excerpt-line skeleton-shimmer" style={{ width: '40%', height: '18px', maxWidth: '400px' }} />
      </div>

      {/* Search & Filter Bar Skeleton */}
      <div className="blogs-search-filter" style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="skeleton-badge skeleton-shimmer" style={{ width: n === 1 ? '60px' : '90px', height: '36px', borderRadius: '30px' }} />
          ))}
        </div>
        <div className="skeleton-shimmer" style={{ width: '280px', height: '44px', borderRadius: '30px' }} />
      </div>

      {/* 6-Card Grid Skeleton */}
      <div className="blogs-grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="blog-card-skeleton">
            <div className="skeleton-img skeleton-shimmer" />
            <div className="skeleton-body">
              <div className="skeleton-badge skeleton-shimmer" />
              <div className="skeleton-title skeleton-shimmer" />
              <div className="skeleton-title-short skeleton-shimmer" />
              <div className="skeleton-excerpt-line skeleton-shimmer" style={{ marginTop: '8px' }} />
              <div className="skeleton-excerpt-short skeleton-shimmer" />
              <div className="skeleton-footer">
                <div className="skeleton-author">
                  <div className="skeleton-avatar skeleton-shimmer" />
                  <div className="skeleton-author-name skeleton-shimmer" />
                </div>
                <div className="skeleton-readtime skeleton-shimmer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BlogPostSkeleton: React.FC = () => {
  return (
    <div className="post-skeleton-wrapper">
      <div className="skeleton-badge skeleton-shimmer" style={{ width: '130px', height: '36px', borderRadius: '30px', marginBottom: '1rem' }} />
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
};
