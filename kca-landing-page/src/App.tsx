import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import CTA from './components/CTA';
import Careers from './components/Careers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import InstallBanner from './components/InstallBanner';

import LoadingScreen from './components/LoadingScreen';
import InteractiveGrid from './components/InteractiveGrid';
import OnboardingModal from './components/OnboardingModal';
import PrivacyTermsModal from './components/PrivacyTermsModal';
import { BlogHubSkeleton, BlogPostSkeleton } from './components/BlogSkeleton';

const KoneFarms = React.lazy(() => import('./components/KoneFarms'));
const LocalSEOPage = React.lazy(() => import('./pages/LocalSEOPage'));
const TrainingHub = React.lazy(() => import('./pages/TrainingHub'));
const Protocols = React.lazy(() => import('./pages/Protocols'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const CertificateValidator = React.lazy(() => import('./components/CertificateValidator'));
const SchoolPage = React.lazy(() => import('./pages/SchoolPage'));
const BlogsPage = React.lazy(() => import('./pages/BlogsPage'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));
const AuthorPage = React.lazy(() => import('./pages/AuthorPage'));

import { applyTheme } from './components/ThemeSelector';

interface LocalRoute {
  niche: string;
  city: string;
}

interface DocRoute {
  category: string | null;
  subcategory: string | null;
  slug: string | null;
}

function App() {
  const isPrerender = typeof window !== 'undefined' && (
    window.navigator.userAgent.includes('ReactSnap') ||
    (window as any).__PRERENDER_INJECTED
  );

  const [isInitializing, setIsInitializing] = React.useState<boolean>(!isPrerender);
  const [mounted, setMounted] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<string>('home');
  const [localRoute, setLocalRoute] = React.useState<LocalRoute | null>(null);
  const [docRoute, setDocRoute] = React.useState<DocRoute>({ category: null, subcategory: null, slug: null });
  const [blogSlug, setBlogSlug] = React.useState<string>('');
  const getInitialPrivacyModal = (): { isOpen: boolean; tab: 'privacy' | 'terms' } => {
    if (typeof window === 'undefined') return { isOpen: false, tab: 'privacy' };
    const path = window.location.pathname;
    if (path.startsWith('/terms')) return { isOpen: true, tab: 'terms' };
    if (path.startsWith('/privacy')) return { isOpen: true, tab: 'privacy' };
    return { isOpen: false, tab: 'privacy' };
  };

  const [globalOnboarding, setGlobalOnboarding] = React.useState<boolean>(false);
  const [privacyModal, setPrivacyModal] = React.useState<{ isOpen: boolean; tab: 'privacy' | 'terms' }>(getInitialPrivacyModal);

  const parseRoute = () => {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(Boolean);
    
    if (pathParts[0] === 'academy' && pathParts[1] && pathParts[2]) {
      setLocalRoute({ niche: pathParts[1], city: pathParts[2] });
      setCurrentPage('local-seo');
    } else if (pathParts[0] === 'training') {
      setCurrentPage('training');
    } else if (pathParts[0] === 'protocols') {
      setCurrentPage('protocols');
    } else if (pathParts[0] === 'verify') {
      setCurrentPage('verify');
    } else if (pathParts[0] === 'school') {
      setCurrentPage('school');
    } else if (pathParts[0] === 'blog') {
      if (pathParts[1]) {
        setBlogSlug(pathParts[1]);
        setCurrentPage('blog-post');
      } else {
        setCurrentPage('blog');
      }
    } else if (pathParts[0] === 'author') {
      setCurrentPage('author-philip');
    } else if (pathParts[0] === 'privacy') {
      setCurrentPage('home');
      setPrivacyModal({ isOpen: true, tab: 'privacy' });
    } else if (pathParts[0] === 'terms') {
      setCurrentPage('home');
      setPrivacyModal({ isOpen: true, tab: 'terms' });
    } else if (pathParts[0] === 'sitemap') {
      setCurrentPage('sitemap');
    } else if (pathParts[0] === 'docs') {
      window.history.replaceState({}, '', '/blog');
      setCurrentPage('blog');
    } else {
      const params = new URLSearchParams(window.location.search);
      if (params.get('page') === 'farms') {
        setCurrentPage('farms');
      } else {
        setCurrentPage('home');
        setLocalRoute(null);
      }
    }
  };
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    const savedTheme = localStorage.getItem('kca-neon-theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }

    parseRoute();
    setMounted(true);

    window.addEventListener('popstate', parseRoute);
    return () => {
      window.removeEventListener('popstate', parseRoute);
    };
  }, []);

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    parseRoute();
  };

  const handleNavigateBlogPost = (slug: string) => {
    window.history.pushState({}, '', `/blog/${slug}`);
    parseRoute();
  };

  const handleBackToBlogFeed = () => {
    window.history.pushState({}, '', '/blog');
    parseRoute();
  };

  const handleDocNavigate = (cat: string, subcat: string, slg: string) => {
    window.history.pushState({}, '', `/docs/${cat}/${subcat}/${slg}`);
    parseRoute();
  };

  const handleOpenOnboarding = () => {
    setGlobalOnboarding(true);
  };

  return (
    <>
      {currentPage === 'farms' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <KoneFarms onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'local-seo' && localRoute ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <LocalSEOPage niche={localRoute.niche} city={localRoute.city} onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'training' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <TrainingHub onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'protocols' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <Protocols onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'verify' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <CertificateValidator onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'school' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <SchoolPage onBack={handleBackToHome} />
        </React.Suspense>
      ) : currentPage === 'blog' ? (
        <React.Suspense fallback={<BlogHubSkeleton />}>
          <BlogsPage onBack={handleBackToHome} onNavigatePost={handleNavigateBlogPost} />
        </React.Suspense>
      ) : currentPage === 'blog-post' ? (
        <React.Suspense fallback={<BlogPostSkeleton />}>
          <BlogPostPage slug={blogSlug} onBack={handleBackToBlogFeed} />
        </React.Suspense>
      ) : currentPage === 'author-philip' ? (
        <React.Suspense fallback={<BlogPostSkeleton />}>
          <AuthorPage onBack={handleBackToBlogFeed} onNavigatePost={handleNavigateBlogPost} />
        </React.Suspense>
      ) : currentPage === 'sitemap' ? (
        <React.Suspense fallback={<LoadingScreen />}>
          <Sitemap onBack={handleBackToHome} />
        </React.Suspense>
      ) : (
        <>
          <Header onOpenOnboarding={handleOpenOnboarding} />
          <div className="App animate-fade-in">
            <InteractiveGrid />
            <main id="main-content">
              <Hero onOpenOnboarding={handleOpenOnboarding} />
              <Vision />
              <Services onOpenOnboarding={handleOpenOnboarding} />
              <Careers />
              <FAQ />
              <CTA onOpenOnboarding={handleOpenOnboarding} />
            </main>
            <Footer 
              onOpenPrivacy={() => setPrivacyModal({ isOpen: true, tab: 'privacy' })}
              onOpenTerms={() => setPrivacyModal({ isOpen: true, tab: 'terms' })}
            />
            <InstallBanner />
          </div>
          {mounted && !isPrerender && <LoadingScreen />}
        </>
      )}

      <OnboardingModal 
        isOpen={globalOnboarding} 
        onClose={() => setGlobalOnboarding(false)} 
      />

      <PrivacyTermsModal 
        isOpen={privacyModal.isOpen} 
        initialTab={privacyModal.tab}
        onClose={() => {
          setPrivacyModal({ isOpen: false, tab: 'privacy' });
          if (window.location.pathname === '/privacy' || window.location.pathname === '/terms') {
            window.history.pushState({}, '', '/');
          }
        }} 
      />
    </>
  );
}

export default App;
