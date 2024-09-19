import { techIcons } from '@/assets/icons'
import { MainNavItem, SidebarNavItem } from '@/types/nav'

interface TDocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: TDocsConfig = {
  mainNav: [
    {
      title: 'Get Started',
      href: '/get-started',
      icon: 'blocks',
    },
    {
      title: 'Components',
      href: '/components',
      icon: 'components',
    },
    {
      title: 'Layouts',
      href: '/layout',
      icon: 'animation',
    },
    {
      title: 'Templates',
      href: '/templates',
      icon: 'apps',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/shadcn/ui',
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/shadcn',
    },
  ],
  sidebarNav: [
    {
      title: 'Components',
      items: [
        {
          href: '/components/motion-number',
          title: 'Motion Number',
          items: [],
        },
        {
          href: '/components/blur-vignette',
          title: 'Blur Vignette',
          items: [],
        },
        {
          href: '/components/timeline-animation',
          title: 'Timeline Animation',
          items: [],
        },

        {
          href: '/components/scroll-animation',
          title: 'Scroll Animation',
          items: [],
        },
        {
          href: '/components/text-animation',
          title: 'Text Animation',
          items: [],
        },
        {
          href: '/components/text-marquee',
          title: 'Text Marquee',
          items: [],
        },
        {
          href: '/components/blocks',
          title: 'Blocks',
          items: [],
        },
        {
          href: '/components/drag-items',
          title: 'Drag Items',
          items: [],
        },
        { href: '/components/accordion', title: 'Accordion', items: [] },
        {
          href: '/components/responsive-header',
          title: 'Responsive Header',
          items: [],
        },
        {
          href: '/components/magnified-doc',
          title: 'Magnified-Doc',
          items: [],
        },
        { href: '/components/buttons', title: 'Buttons', items: [] },
        {
          href: '/components/stacking-card',
          title: 'Stacking Card',
          items: [],
        },
        { href: '/components/image-reveal', title: 'Image Reveal', items: [] },
        { href: '/components/faqs', title: 'FAQs', items: [] },
        { href: '/components/grid', title: 'Grid', items: [] },
        { href: '/components/hover-cards', title: 'Hover cards', items: [] },
        {
          href: '/components/products-cards',
          title: 'Products-Cards',
          items: [],
        },
        {
          href: '/components/gradient-border',
          title: 'gradient-border',
          items: [],
        },
        {
          href: '/components/gradient-button',
          title: 'gradient-button',
          items: [],
        },
        {
          href: '/components/spotlight-cards',
          title: 'Spotlight cards',
          items: [],
        },
        { href: '/components/sparkles', title: 'Sparkles', items: [] },
        {
          href: '/components/sparkles-title',
          title: 'Sparkles Title',
          items: [],
        },
        { href: '/components/dialog', title: 'Dialog', items: [] },
        { href: '/components/dialog-card', title: 'Linear Card', items: [] },
        { href: '/components/media-modal', title: 'Media Modal', items: [] },
        {
          href: '/components/responsive-drawer',
          title: 'Responsive Drawer',
          items: [],
        },
        { href: '/components/sidebar', title: 'Responsive Sidebar', items: [] },
        {
          href: '/components/gallery-modal',
          title: 'Gallery modal',
          items: [],
        },
        // { href: '/components/headers', title: 'Headers', items: [] },
        {
          href: '/components/embla-carousel',
          title: 'Embla Carousel',
          items: [],
        },
        {
          href: '/components/clip-path-image',
          title: 'Clip-Path Image',
          items: [],
        },
        {
          href: '/components/animated-beam',
          title: 'Animated Beam',
          items: [],
        },
        {
          href: '/components/masonary-grid',
          title: 'Masonary Grid',
          items: [],
        },
        { href: '/components/marquee', title: 'Marquee', items: [] },
        {
          href: '/components/image-masking',
          title: 'Image Masking',
          items: [],
        },
        {
          href: '/components/video-masking',
          title: 'Video Masking',
          items: [],
        },
        { href: '/components/noise', title: 'Noise', items: [] },
        {
          href: '/components/framer-carousel',
          title: 'Framer Carousel',
          items: [],
        },
        {
          href: '/components/sticky-scroll',
          title: 'Sticky Scroll',
          items: [],
        },
        {
          href: '/components/progressive-carousel',
          title: 'Progressive Carousel',
          items: [],
        },
        { href: '/components/tabs', title: 'Tabs', items: [] },
        { href: '/components/image-tabs', title: 'Image Tab', items: [] },
        {
          href: '/components/image-accordions',
          title: 'Image Accordion',
          items: [],
        },
        { href: '/components/globe', title: 'Globe', items: [] },
        {
          href: '/components/randomized-text-effect',
          title: 'Randomized Text',
          items: [],
        },
        // { href: '/components/scroll', title: 'Scroll', items: [] },
        {
          href: '/components/image-mousetrail',
          title: 'Image Mousetrail',
          items: [],
        },
        {
          href: '/components/infinity-brand',
          title: 'Infinity Brand',
          items: [],
        },
        {
          href: '/components/horizontal-scroll',
          title: 'Horizontal Scroll',
          items: [],
        },
        { href: '/components/footers', title: 'Footers', items: [] },
        {
          href: '/components/smooth-scroll',
          title: 'Smooth-Scroll',
          items: [],
        },
      ],
    },
  ],
}
