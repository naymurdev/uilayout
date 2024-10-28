import * as React from 'react'
export const COMPONENTS = [
  {
    componentName: 'horizontalCardScrolling',
    componentUrl: 'horizontal-card-scrolling',
    componentSrc: React.lazy(
      () => import('@/components/pages/horizontal-card-scrolling')
    ),
  },
  {
    componentName: 'horizontalSectionScrolling',
    componentUrl: 'horizontal-scrolling-section',
    componentSrc: React.lazy(
      () => import('@/components/pages/horizontal-scrolling-section')
    ),
  },
  {
    componentName: 'MessGradient',
    componentUrl: 'mess-gradient',
    componentSrc: React.lazy(() => import('@/components/pages/mess-gradient')),
  },
  {
    componentName: 'MessGradient2',
    componentUrl: 'mess-gradient2',
    componentSrc: React.lazy(
      () => import('@/components/pages/mess-gradient-custom-color')
    ),
  },
  {
    componentName: 'imgRippleEffect',
    componentUrl: 'img-ripple-effect',
    componentSrc: React.lazy(() => import('@/components/pages/ripple-shader')),
  },
  {
    componentName: 'smoothScroll',
    componentUrl: 'smooth-scroll',
    componentSrc: React.lazy(() => import('@/components/pages/smooth-scroll')),
  },
  {
    componentName: 'noiseSection',
    componentUrl: 'noise-section',
    componentSrc: React.lazy(() => import('@/components/pages/noise-section')),
  },
  {
    componentName: 'stickyScrollSection',
    componentUrl: 'sticky-scroll-section',
    componentSrc: React.lazy(
      () => import('@/components/pages/sticky-scroll-section')
    ),
  },
  {
    componentName: 'stickyHeroSection',
    componentUrl: 'sticky-hero-section',
    componentSrc: React.lazy(
      () => import('@/components/pages/sticky-hero-section')
    ),
  },
  {
    componentName: 'sparklesBranding',
    componentUrl: 'sparkles-branding',
    componentSrc: React.lazy(
      () => import('@/components/pages/sparkles-branding')
    ),
  },
  {
    componentName: 'stickyGallery',
    componentUrl: 'sticky-gallery',
    componentSrc: React.lazy(
      () => import('@/components/pages/sticky-gallery-section')
    ),
  },
  {
    componentName: 'cssStackingCard',
    componentUrl: 'css-stacking-card',
    componentSrc: React.lazy(
      () => import('@/components/pages/css-stacking-card')
    ),
  },
  {
    componentName: 'cssStackingDetailsCard',
    componentUrl: 'css-stacking-details-card',
    componentSrc: React.lazy(
      () => import('@/components/pages/css-stacking-details-card')
    ),
  },
  {
    componentName: 'stackingCard',
    componentUrl: 'stacking-card',
    componentSrc: React.lazy(() => import('@/components/pages/stacking-card')),
  },

  {
    componentName: 'sparklesGlobe',
    componentUrl: 'sparkles-globe',
    componentSrc: React.lazy(() => import('@/components/pages/sparkles-globe')),
  },

  {
    componentName: 'CardGblobe',
    componentUrl: 'card-globe',
    componentSrc: React.lazy(() => import('@/components/pages/card-globe')),
  },
  {
    componentName: 'CardGblobe2',
    componentUrl: 'card-globe2',
    componentSrc: React.lazy(() => import('@/components/pages/card-globe2')),
  },
  {
    componentName: 'sparklesSection',
    componentUrl: 'sparkles-section',
    componentSrc: React.lazy(
      () => import('@/components/pages/sparkles-section')
    ),
  },
  {
    componentName: 'sparklesTitle',
    componentUrl: 'sparkles-title',
    componentSrc: React.lazy(() => import('@/components/pages/sparkles-title')),
  },
  {
    componentName: 'hoverFooter',
    componentUrl: 'hover-footer',
    componentSrc: React.lazy(() => import('@/components/pages/hover-footer')),
  },
  {
    componentName: 'homeSparklesGlobe',
    componentUrl: 'home-sparkles-globe',
    componentSrc: React.lazy(
      () => import('@/components/pages/home-sparkles-globe')
    ),
  },
  {
    componentName: 'homeSparkles',
    componentUrl: 'home-sparkles',
    componentSrc: React.lazy(() => import('@/components/pages/home-sparkles')),
  },
  {
    componentName: 'sparklesTitle2',
    componentUrl: 'sparkles-title2',
    componentSrc: React.lazy(
      () => import('@/components/pages/sparkles-title2')
    ),
  },
  {
    componentName: 'sparklesTitle3',
    componentUrl: 'sparkles-title3',
    componentSrc: React.lazy(
      () => import('@/components/pages/sparkles-title3')
    ),
  },
  {
    componentName: 'sparklesTitle4',
    componentUrl: 'sparkles-title4',
    componentSrc: React.lazy(
      () => import('@/components/pages/sparkles-title4')
    ),
  },
]
