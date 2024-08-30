// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit as visit3 } from "unist-util-visit";

// src/lib/rehype-components.ts
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// src/assets/data/components.ts
import * as React from "react";
var COMPONENTS = [
  {
    name: "Accordion",
    componentArray: [
      {
        componentName: "accordion1",
        componentSrc: React.lazy(
          () => import("@/registry/components/accordion/framer/gridlayout")
        )
      },
      {
        componentName: "accordion2",
        componentSrc: React.lazy(
          () => import("@/registry/components/accordion/framer/singlelayout")
        )
      },
      {
        componentName: "accordion3",
        componentSrc: React.lazy(
          () => import("@/registry/components/accordion/framer/multilayout")
        )
      },
      {
        componentName: "accordionfaq",
        componentSrc: React.lazy(
          () => import("@/registry/components/accordion/framer/faq")
        )
      },
      {
        componentName: "accordionHover",
        componentSrc: React.lazy(
          () => import("@/registry/components/accordion/framer/image-hover")
        )
      },
      {
        componentName: "accordion5",
        componentSrc: React.lazy(
          () => import("@/registry/components/accordion-radix")
        )
      },
      {
        componentName: "accordionImageHover",
        componentSrc: React.lazy(
          () => import("@/registry/components/accordion/tailwind-image-accordion")
        )
      }
    ],
    filesArray: [
      {
        fileName: "accordion1",
        fileSrc: "./src/registry/components/accordion/framer/gridlayout.tsx"
      },
      {
        fileName: "accordion2",
        fileSrc: "./src/registry/components/accordion/framer/singlelayout.tsx"
      },
      {
        fileName: "accordion3",
        fileSrc: "./src/registry/components/accordion/framer/multilayout.tsx"
      },
      {
        fileName: "accordionfaq",
        fileSrc: "./src/registry/components/accordion/framer/faq.tsx"
      },
      {
        fileName: "accordionHover",
        fileSrc: "./src/registry/components/accordion/framer/image-hover.tsx"
      },
      {
        fileName: "accordion5",
        fileSrc: "./src/registry/components/accordion-radix.tsx"
      },
      {
        fileName: "accordionImageHover",
        fileSrc: "./src/registry/components/accordion/tailwind-image-accordion.tsx"
      }
    ],
    slug: "accordions",
    type: "accordion"
  },
  {
    name: "Button",
    componentArray: [
      {
        componentName: "bg-shine",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-bg-shine")
        )
      },
      {
        componentName: "bg-spotlight",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-bg-spotlight")
        )
      },
      {
        componentName: "rotating-gradient",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-rotating-bgGradient")
        )
      },
      {
        componentName: "hover1",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover1")
        )
      },
      {
        componentName: "hover2",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover2")
        )
      },
      {
        componentName: "hover3",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover3")
        )
      },
      {
        componentName: "hover4",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover4")
        )
      },
      {
        componentName: "hover5",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover5")
        )
      },
      {
        componentName: "hover6",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover6")
        )
      },
      {
        componentName: "hover7",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover7")
        )
      },
      {
        componentName: "hover8",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover8")
        )
      },
      {
        componentName: "hover9",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover9")
        )
      },
      {
        componentName: "hover10",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover10")
        )
      },
      {
        componentName: "hover11",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover11")
        )
      },
      {
        componentName: "hover12",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover12")
        )
      },
      {
        componentName: "hover13",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover13")
        )
      },
      {
        componentName: "hover14",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover14")
        )
      },
      {
        componentName: "hoverActive",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/btn-hover-active")
        )
      },
      {
        componentName: "creativeBtn1",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/creative-btn1")
        )
      },
      {
        componentName: "creativeBtn2",
        componentSrc: React.lazy(
          () => import("@/registry/components/button/creative-btn2")
        )
      }
    ],
    filesArray: [
      {
        fileName: "bg-shine",
        fileSrc: "./src/registry/components/button/btn-bg-shine.tsx"
      },
      {
        fileName: "bg-spotlight",
        fileSrc: "./src/registry/components/button/btn-bg-spotlight.tsx"
      },
      {
        fileName: "rotating-gradient",
        fileSrc: "./src/registry/components/button/btn-rotating-bgGradient.tsx"
      },
      {
        fileName: "hover1",
        fileSrc: "/src/registry/components/button/btn-hover1.tsx"
      },
      {
        fileName: "hover2",
        fileSrc: "/src/registry/components/button/btn-hover2.tsx"
      },
      {
        fileName: "hover3",
        fileSrc: "/src/registry/components/button/btn-hover3.tsx"
      },
      {
        fileName: "hover4",
        fileSrc: "/src/registry/components/button/btn-hover4.tsx"
      },
      {
        fileName: "hover5",
        fileSrc: "/src/registry/components/button/btn-hover5.tsx"
      },
      {
        fileName: "hover6",
        fileSrc: "/src/registry/components/button/btn-hover6.tsx"
      },
      {
        fileName: "hover7",
        fileSrc: "/src/registry/components/button/btn-hover7.tsx"
      },
      {
        fileName: "hover8",
        fileSrc: "/src/registry/components/button/btn-hover8.tsx"
      },
      {
        fileName: "hover9",
        fileSrc: "/src/registry/components/button/btn-hover9.tsx"
      },
      {
        fileName: "hover10",
        fileSrc: "/src/registry/components/button/btn-hover10.tsx"
      },
      {
        fileName: "hover11",
        fileSrc: "/src/registry/components/button/btn-hover11.tsx"
      },
      {
        fileName: "hover12",
        fileSrc: "/src/registry/components/button/btn-hover12.tsx"
      },
      {
        fileName: "hover13",
        fileSrc: "/src/registry/components/button/btn-hover13.tsx"
      },
      {
        fileName: "hover14",
        fileSrc: "/src/registry/components/button/btn-hover14.tsx"
      },
      {
        fileName: "hoverActive",
        fileSrc: "/src/registry/components/button/btn-hover-active.tsx"
      },
      {
        fileName: "creativeBtn1",
        fileSrc: "/src/registry/components/button/creative-btn1.tsx"
      },
      {
        fileName: "creativeBtn2",
        fileSrc: "/src/registry/components/button/creative-btn2.tsx"
      }
    ],
    slug: "button",
    type: "button"
  },
  {
    name: "products-cards",
    componentArray: [
      {
        componentName: "productsCard-1",
        componentSrc: React.lazy(
          () => import("@/registry/components/products-cards/card1")
        )
      },
      {
        componentName: "productsCard-2",
        componentSrc: React.lazy(
          () => import("@/registry/components/products-cards/card2")
        )
      },
      {
        componentName: "productsCard-3",
        componentSrc: React.lazy(
          () => import("@/registry/components/products-cards/card3")
        )
      },
      {
        componentName: "productsCard-4",
        componentSrc: React.lazy(
          () => import("@/registry/components/products-cards/card4")
        )
      },
      {
        componentName: "productsCard-5",
        componentSrc: React.lazy(
          () => import("@/registry/components/products-cards/card5")
        )
      },
      {
        componentName: "productsCard-6",
        componentSrc: React.lazy(
          () => import("@/registry/components/products-cards/card6")
        )
      }
    ],
    filesArray: [
      {
        fileName: "productsCard-1",
        fileSrc: "./src/registry/components/products-cards/card1.tsx"
      },
      {
        fileName: "productsCard-2",
        fileSrc: "./src/registry/components/products-cards/card2.tsx"
      },
      {
        fileName: "productsCard-3",
        fileSrc: "./src/registry/components/products-cards/card3.tsx"
      },
      {
        fileName: "productsCard-4",
        fileSrc: "./src/registry/components/products-cards/card4.tsx"
      },
      {
        fileName: "productsCard-5",
        fileSrc: "./src/registry/components/products-cards/card5.tsx"
      },
      {
        fileName: "productsCard-6",
        fileSrc: "./src/registry/components/products-cards/card6.tsx"
      }
    ],
    slug: "products-cards",
    type: "products-cards"
  },
  {
    name: "cards",
    componentArray: [
      {
        componentName: "stripeCard",
        componentSrc: React.lazy(
          () => import("@/registry/components/cards/stripe-card")
        )
      },
      {
        componentName: "stripeCard2",
        componentSrc: React.lazy(
          () => import("@/registry/components/cards/stripe-card2")
        )
      },
      {
        componentName: "card3",
        componentSrc: React.lazy(
          () => import("@/registry/components/cards/card3")
        )
      },
      {
        componentName: "card4",
        componentSrc: React.lazy(
          () => import("@/registry/components/cards/card4")
        )
      },
      {
        componentName: "card5",
        componentSrc: React.lazy(
          () => import("@/registry/components/cards/card5")
        )
      },
      {
        componentName: "card6",
        componentSrc: React.lazy(
          () => import("@/registry/components/cards/card6")
        )
      },
      {
        componentName: "cuipCard",
        componentSrc: React.lazy(
          () => import("@/registry/components/cards/cuip-card")
        )
      },
      {
        componentName: "gradientBorder",
        componentSrc: React.lazy(
          () => import("@/registry/components/cards/gradient-border")
        )
      }
    ],
    filesArray: [
      {
        fileName: "stripeCard",
        fileSrc: "./src/registry/components/cards/stripe-card.tsx"
      },
      {
        fileName: "stripeCard2",
        fileSrc: "./src/registry/components/cards/stripe-card2.tsx"
      },
      {
        fileName: "card3",
        fileSrc: "./src/registry/components/cards/card3.tsx"
      },
      {
        fileName: "card4",
        fileSrc: "./src/registry/components/cards/card4.tsx"
      },
      {
        fileName: "card5",
        fileSrc: "./src/registry/components/cards/card5.tsx"
      },
      {
        fileName: "card6",
        fileSrc: "./src/registry/components/cards/card6.tsx"
      },
      {
        fileName: "cuipCard",
        fileSrc: "./src/registry/components/cards/cuip-card.tsx"
      },
      {
        fileName: "gradientBorder",
        fileSrc: "./src/registry/components/cards/gradient-border.tsx"
      }
    ],
    slug: "cards",
    type: "card"
  },
  {
    name: "Gallery",
    componentArray: [
      {
        componentName: "gallery1",
        componentSrc: React.lazy(
          () => import("@/registry/layouts/gallery-one")
        )
      }
    ],
    filesArray: [
      {
        fileName: "gallery1",
        fileSrc: "./src/registry/layouts/gallery-one.tsx"
      }
    ],
    slug: "gallerys",
    type: "gallery"
  },
  {
    name: "marquees",
    componentArray: [
      {
        componentName: "defaultMarquee",
        componentSrc: React.lazy(
          () => import("@/registry/components/marque/default")
        )
      },
      {
        componentName: "verticleMarquee",
        componentSrc: React.lazy(
          () => import("@/registry/components/marque/verticle")
        )
      },
      {
        componentName: "logosMarquee",
        componentSrc: React.lazy(
          () => import("@/registry/components/marque/logos")
        )
      },
      {
        componentName: "3dMarquee",
        componentSrc: React.lazy(
          () => import("@/registry/components/marque/3d")
        )
      }
    ],
    filesArray: [
      {
        fileName: "defaultMarquee",
        fileSrc: "./src/registry/components/marque/default/index.tsx"
      },
      {
        fileName: "verticleMarquee",
        fileSrc: "./src/registry/components/marque/verticle/index.tsx"
      },
      {
        fileName: "logosMarquee",
        fileSrc: "./src/registry/components/marque/logos/index.tsx"
      },
      {
        fileName: "3dMarquee",
        fileSrc: "./src/registry/components/marque/3d/index.tsx"
      }
    ],
    slug: "marquee",
    type: "marquee"
  },
  {
    name: "Animated Beam",
    componentArray: [
      {
        componentName: "defaultOneBeam",
        componentSrc: React.lazy(
          () => import("@/registry/components/animated-beam/first")
        )
      },
      {
        componentName: "bidirectionalBeam",
        componentSrc: React.lazy(
          () => import("@/registry/components/animated-beam/bidirectional")
        )
      },
      {
        componentName: "unidirectionalBeam",
        componentSrc: React.lazy(
          () => import("@/registry/components/animated-beam/unidirectional")
        )
      },
      {
        componentName: "multipleInputBeam",
        componentSrc: React.lazy(
          () => import("@/registry/components/animated-beam/multiple-input")
        )
      },
      {
        componentName: "multipleOutputBeam",
        componentSrc: React.lazy(
          () => import("@/registry/components/animated-beam/multiple-output")
        )
      }
    ],
    filesArray: [
      {
        fileName: "defaultOneBeam",
        fileSrc: "./src/registry/components/animated-beam/first/index.tsx"
      },
      {
        fileName: "bidirectionalBeam",
        fileSrc: "./src/registry/components/animated-beam/bidirectional/index.tsx"
      },
      {
        fileName: "unidirectionalBeam",
        fileSrc: "./src/registry/components/animated-beam/unidirectional/index.tsx"
      },
      {
        fileName: "multipleInputBeam",
        fileSrc: "./src/registry/components/animated-beam/multiple-input/index.tsx"
      },
      {
        fileName: "multipleOutputBeam",
        fileSrc: "./src/registry/components/animated-beam/multiple-output/index.tsx"
      }
    ],
    slug: "Animated Beam",
    type: "Beam"
  },
  {
    name: "spotlight-cards",
    componentArray: [
      {
        componentName: "spotlightCard1",
        componentSrc: React.lazy(
          () => import("@/registry/components/spotlight-cards/spotlight-card1")
        )
      },
      {
        componentName: "spotlightCard2",
        componentSrc: React.lazy(
          () => import("@/registry/components/spotlight-cards/spotlight-card2")
        )
      },
      {
        componentName: "spotlightCard3",
        componentSrc: React.lazy(
          () => import("@/registry/components/spotlight-cards/spotlight-card3")
        )
      },
      {
        componentName: "spotlightCard4",
        componentSrc: React.lazy(
          () => import("@/registry/components/spotlight-cards/spotlight-card4")
        )
      }
    ],
    filesArray: [
      {
        fileName: "spotlightCard1",
        fileSrc: "./src/registry/components/spotlight-cards/spotlight-card1.tsx"
      },
      {
        fileName: "spotlightCard2",
        fileSrc: "./src/registry/components/spotlight-cards/spotlight-card2.tsx"
      },
      {
        fileName: "spotlightCard3",
        fileSrc: "./src/registry/components/spotlight-cards/spotlight-card3.tsx"
      },
      {
        fileName: "spotlightCard4",
        fileSrc: "./src/registry/components/spotlight-cards/spotlight-card4.tsx"
      }
    ],
    slug: "cards",
    type: "spotlight-cards"
  },
  {
    name: "Headers",
    componentArray: [
      {
        componentName: "header1",
        componentSrc: React.lazy(
          () => import("@/registry/components/header/header1")
        )
      }
    ],
    filesArray: [
      {
        fileName: "header1",
        fileSrc: "./src/registry/components/header/header1.tsx"
      }
    ],
    slug: "headers",
    type: "header"
  },
  {
    name: "infinity-scroll",
    componentArray: [
      {
        componentName: "infinityScroll",
        componentSrc: React.lazy(
          () => import("@/registry/components/infinity-scroll/infinity-scroll")
        )
      }
    ],
    filesArray: [
      {
        fileName: "infinityScroll",
        fileSrc: "./src/registry/components/infinity-scroll/infinity-scroll.tsx"
      }
    ],
    slug: "scroll",
    type: "infinity-scroll"
  },
  {
    name: "horizontal-scroll",
    componentArray: [
      {
        componentName: "horizontalScroll",
        link: "horizontal-scroll",
        componentSrc: React.lazy(
          () => import("@/registry/components/horizontal-scroll/horizontal-scroll")
        )
      }
    ],
    filesArray: [
      {
        fileName: "horizontalScroll",
        link: "horizontal-scroll",
        fileSrc: "./src/registry/components/horizontal-scroll/horizontal-scroll.tsx"
      }
    ],
    slug: "scroll",
    type: "horizontal-scroll"
  },
  {
    name: "sticky-scroll",
    componentArray: [
      {
        componentName: "scroll1",
        componentSrc: React.lazy(
          () => import("@/registry/components/sticky-scroll/sticky-card-scroll")
        )
      }
    ],
    filesArray: [
      {
        fileName: "scroll1",
        fileSrc: "./src/registry/components/sticky-scroll/sticky-card-scroll.tsx"
      }
    ],
    slug: "sticky-scroll",
    type: "scroll"
  },
  {
    name: "Tabs",
    componentArray: [
      {
        componentName: "tab1",
        componentSrc: React.lazy(
          () => import("@/registry/components/tabs/register-tab")
        )
      },
      {
        componentName: "tab2",
        componentSrc: React.lazy(
          () => import("@/lab/components/tabs/previewTab")
        )
      },
      {
        componentName: "tab3",
        componentSrc: React.lazy(
          () => import("@/registry/components/tabs/magnified/index")
        )
      },
      {
        componentName: "HomeTab",
        componentSrc: React.lazy(() => import("@/components/home/home-tab"))
      },
      {
        componentName: "imgtab1",
        componentSrc: React.lazy(
          () => import("@/registry/components/tabs/img-tabs/img-tabs1")
        )
      },
      {
        componentName: "imgtab2",
        componentSrc: React.lazy(
          () => import("@/registry/components/tabs/img-tabs/img-tabs2")
        )
      },
      {
        componentName: "imgtab3",
        componentSrc: React.lazy(
          () => import("@/registry/components/tabs/img-tabs/img-tabs3")
        )
      }
    ],
    filesArray: [
      {
        fileName: "tab1",
        fileSrc: "./src/registry/components/tabs/register-tab.tsx"
      },
      {
        fileName: "tab2",
        fileSrc: "./src/registry/components/tabs/tools-tab.tsx"
      },
      {
        fileName: "tab3",
        fileSrc: "./src/registry/components/tabs/magnified/index.tsx"
      },
      {
        fileName: "HomeTab",
        fileSrc: "./src/components/home/home-tab.tsx"
      },
      {
        fileName: "imgtab1",
        fileSrc: "./src/registry/components/tabs/img-tabs/img-tabs1.tsx"
      },
      {
        fileName: "imgtab2",
        fileSrc: "./src/registry/components/tabs/img-tabs/img-tabs2.tsx"
      },
      {
        fileName: "imgtab3",
        fileSrc: "./src/registry/components/tabs/img-tabs/img-tabs3.tsx"
      }
    ],
    slug: "tabs",
    type: "tab"
  },
  {
    name: "Footers",
    componentArray: [
      {
        componentName: "footer1",
        componentSrc: React.lazy(
          () => import("@/registry/components/footers/footer1")
        )
      },
      {
        componentName: "hoverFooter",
        componentSrc: React.lazy(
          () => import("@/registry/components/footers/hover-footer")
        )
      }
    ],
    filesArray: [
      {
        fileName: "footer1",
        fileSrc: "./src/registry/components/footers/footer1.tsx"
      },
      {
        fileName: "hoverFooter",
        fileSrc: "./src/registry/components/footers/hover-footer.tsx"
      }
    ],
    slug: "footers",
    type: "footer"
  },
  {
    name: "image-reveal",
    componentArray: [
      {
        componentName: "imageReveal",
        componentSrc: React.lazy(
          () => import("@/registry/components/image-reveal")
        )
      },
      {
        componentName: "ImageReveal2",
        componentSrc: React.lazy(
          () => import("@/registry/components/image-reveal/image-reveal")
        )
      }
    ],
    filesArray: [
      {
        fileName: "imageReveal",
        fileSrc: "./src/registry/components/image-reveal/index.tsx"
      },
      {
        fileName: "ImageReveal2",
        fileSrc: "./src/registry/components/image-reveal/image-reveal.tsx"
      }
    ],
    slug: "reveal",
    type: "image-reveal"
  },
  {
    name: "Modal",
    componentArray: [
      {
        componentName: "linearDialogCard",
        componentSrc: React.lazy(
          () => import("@/registry/components/modal/dialog-card/linear-card")
        )
      },
      {
        componentName: "dialog",
        componentSrc: React.lazy(
          () => import("@/registry/components/modal/dialog")
        )
      },
      {
        componentName: "mediaModal",
        componentSrc: React.lazy(
          () => import("@/registry/components/modal/media-modal")
        )
      },
      {
        componentName: "accordionModal",
        componentSrc: React.lazy(
          () => import("@/registry/components/modal/accordion-modal")
        )
      },
      {
        componentName: "unsplashModal",
        componentSrc: React.lazy(
          () => import("@/registry/components/modal/unsplash-modal")
        )
      },
      {
        componentName: "modalSlider",
        componentSrc: React.lazy(
          () => import("@/registry/components/modal/modal-slider")
        )
      },
      {
        componentName: "linearModal",
        componentSrc: React.lazy(
          () => import("@/registry/components/modal/linear-modal")
        )
      }
    ],
    filesArray: [
      {
        fileName: "linearDialogCard",
        fileSrc: "./src/registry/components/modal/dialog-card/linear-card.tsx"
      },
      {
        fileName: "dialog",
        fileSrc: "./src/registry/components/modal/dialog/index.tsx"
      },
      {
        fileName: "mediaModal",
        fileSrc: "./src/registry/components/modal/media-modal/index.tsx"
      },
      {
        fileName: "accordionModal",
        fileSrc: "./src/registry/components/modal/accordion-modal.tsx"
      },
      {
        fileName: "unsplashModal",
        fileSrc: "./src/registry/components/modal/unsplash-modal.tsx"
      },
      {
        fileName: "modalSlider",
        fileSrc: "./src/registry/components/modal/modal-slider.tsx"
      },
      {
        fileName: "linearModal",
        fileSrc: "./src/registry/components/modal/linear-modal.tsx"
      }
    ],
    slug: "modal",
    type: "modal"
  },
  {
    name: "Masonary",
    componentArray: [
      {
        componentName: "boxgrid",
        componentSrc: React.lazy(
          () => import("@/registry/components/grid/box-grid")
        )
      },
      {
        componentName: "conditionGrid",
        componentSrc: React.lazy(
          () => import("@/registry/components/grid/condition-grid")
        )
      },
      {
        componentName: "normalGrid",
        componentSrc: React.lazy(
          () => import("@/registry/components/grid/normal-grid")
        )
      },
      {
        componentName: "unsplashGrid",
        componentSrc: React.lazy(
          () => import("@/registry/components/grid/unsplash-grid")
        )
      }
    ],
    filesArray: [
      {
        fileName: "boxgrid",
        fileSrc: "./src/registry/components/grid/box-grid.tsx"
      },
      {
        fileName: "conditionGrid",
        fileSrc: "./src/registry/components/grid/condition-grid.tsx"
      },
      {
        fileName: "normalGrid",
        fileSrc: "./src/registry/components/grid/normal-grid.tsx"
      },
      {
        fileName: "unsplashGrid",
        fileSrc: "./src/registry/components/grid/unsplash-grid.tsx"
      }
    ],
    slug: "grid",
    type: "grid"
  },
  {
    name: "clip-path-image",
    componentArray: [
      {
        componentName: "clip-path-image-one",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/one")
        )
      },
      {
        componentName: "clip-path-image-two",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/two")
        )
      },
      {
        componentName: "clip-path-image-three",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/three")
        )
      },
      {
        componentName: "clip-path-image-four",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/four")
        )
      },
      {
        componentName: "clip-path-image-five",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/five")
        )
      },
      {
        componentName: "mask-image3",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-image3")
        )
      },
      {
        componentName: "mask-image0",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-image0")
        )
      },
      {
        componentName: "mask-image1",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-image1")
        )
      },
      {
        componentName: "mask-image2",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-image2")
        )
      },
      {
        componentName: "mask-image4",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-image4")
        )
      },
      {
        componentName: "mask-video",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-video")
        )
      },
      {
        componentName: "mask-video1",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-video1")
        )
      },
      {
        componentName: "mask-video2",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-video2")
        )
      },
      {
        componentName: "mask-video3",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-video3")
        )
      },
      {
        componentName: "mask-video4",
        componentSrc: React.lazy(
          () => import("@/registry/components/mask-image/mask-video4")
        )
      }
    ],
    filesArray: [
      {
        fileName: "clip-path-image-one",
        fileSrc: "./src/registry/components/mask-image/one/index.tsx"
      },
      {
        fileName: "clip-path-image-two",
        fileSrc: "./src/registry/components/mask-image/two/index.tsx"
      },
      {
        fileName: "clip-path-image-three",
        fileSrc: "./src/registry/components/mask-image/three/index.tsx"
      },
      {
        fileName: "clip-path-image-four",
        fileSrc: "./src/registry/components/mask-image/four/index.tsx"
      },
      {
        fileName: "clip-path-image-five",
        fileSrc: "./src/registry/components/mask-image/five/index.tsx"
      },
      {
        fileName: "mask-image3",
        fileSrc: "./src/registry/components/mask-image/mask-image3/index.tsx"
      },
      {
        fileName: "mask-image0",
        fileSrc: "./src/registry/components/mask-image/mask-image0/index.tsx"
      },
      {
        fileName: "mask-image4",
        fileSrc: "./src/registry/components/mask-image/mask-image4/index.tsx"
      },
      {
        fileName: "mask-video",
        fileSrc: "./src/registry/components/mask-image/mask-video/index.tsx"
      },
      {
        fileName: "mask-video0",
        fileSrc: "./src/registry/components/mask-image/mask-video0/index.tsx"
      },
      {
        fileName: "mask-video1",
        fileSrc: "./src/registry/components/mask-image/mask-video1/index.tsx"
      },
      {
        fileName: "mask-video2",
        fileSrc: "./src/registry/components/mask-image/mask-video2/index.tsx"
      },
      {
        fileName: "mask-video3",
        fileSrc: "./src/registry/components/mask-image/mask-video3/index.tsx"
      },
      {
        fileName: "mask-video4",
        fileSrc: "./src/registry/components/mask-image/mask-video4/index.tsx"
      },
      {
        fileName: "mask-image1",
        fileSrc: "./src/registry/components/mask-image/mask-image1/index.tsx"
      },
      {
        fileName: "mask-image2",
        fileSrc: "./src/registry/components/mask-image/mask-image2/index.tsx"
      }
    ],
    slug: "clip-path-image",
    type: "clip-path"
  },
  {
    name: "Carousel",
    componentArray: [
      {
        componentName: "carousel1",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/framer-carousel1")
        )
      },
      {
        componentName: "carousel2",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/framer-carousel2")
        )
      },
      {
        componentName: "carousel3",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/embla/default-slider")
        )
      },
      {
        componentName: "carousel4",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/embla/align-slider")
        )
      },
      {
        componentName: "carousel5",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/embla/classname-slider")
        )
      },
      {
        componentName: "carousel6",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/embla/number-slider")
        )
      },
      {
        componentName: "carousel7",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/embla/scale-slider")
        )
      },
      {
        componentName: "carousel8",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/embla/autostart-slider")
        )
      },
      {
        componentName: "carousel9",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/embla/animation-slider")
        )
      },
      {
        componentName: "carousel10",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/embla/thumnail-slider")
        )
      },
      {
        componentName: "progressCarousel1",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/progressive-carousel/carousel1")
        )
      },
      {
        componentName: "progressCarousel2",
        componentSrc: React.lazy(
          () => import("@/registry/components/carousel/progressive-carousel/carousel2")
        )
      }
    ],
    filesArray: [
      {
        fileName: "carousel1",
        fileSrc: "./src/registry/components/carousel/framer-carousel1.tsx"
      },
      {
        fileName: "carousel2",
        fileSrc: "./src/registry/components/carousel/framer-carousel2.tsx"
      },
      {
        fileName: "carousel3",
        fileSrc: "./src/registry/components/carousel/embla/default-slider.tsx"
      },
      {
        fileName: "carousel4",
        fileSrc: "./src/registry/components/carousel/embla/align-slider.tsx"
      },
      {
        fileName: "carousel5",
        fileSrc: "./src/registry/components/carousel/embla/classname-slider.tsx"
      },
      {
        fileName: "carousel6",
        fileSrc: "./src/registry/components/carousel/embla/number-slider.tsx"
      },
      {
        fileName: "carousel7",
        fileSrc: "./src/registry/components/carousel/embla/scale-slider.tsx"
      },
      {
        fileName: "carousel8",
        fileSrc: "./src/registry/components/carousel/embla/autostart-slider.tsx"
      },
      {
        fileName: "carousel9",
        fileSrc: "./src/registry/components/carousel/embla/animation-slider.tsx"
      },
      {
        fileName: "carousel10",
        fileSrc: "./src/registry/components/carousel/embla/thumnail-slider.tsx"
      },
      {
        fileName: "progressCarousel1",
        fileSrc: "./src/registry/components/carousel/progressive-carousel/carousel1/index.tsx"
      },
      {
        fileName: "progressCarousel2",
        fileSrc: "./src/registry/components/carousel/progressive-carousel/carousel2/index.tsx"
      }
    ],
    slug: "carousel",
    type: "carousel"
  },
  {
    name: "Drawer",
    componentArray: [
      {
        componentName: "vaulDrawer",
        componentSrc: React.lazy(
          () => import("@/registry/components/drawer/value-drawer")
        )
      },
      {
        componentName: "sidebarDrawer",
        componentSrc: React.lazy(
          () => import("@/registry/components/drawer/sidebar-drawer")
        )
      },
      {
        componentName: "LeftSidebarDrawer",
        componentSrc: React.lazy(
          () => import("@/registry/components/drawer/left-sidebar-drawer")
        )
      },
      {
        componentName: "headerDrawer",
        componentSrc: React.lazy(
          () => import("@/registry/components/drawer/header-drawer")
        )
      },
      {
        componentName: "nestedVaulDrawer",
        componentSrc: React.lazy(
          () => import("@/registry/components/drawer/nested-value-drawer")
        )
      }
    ],
    filesArray: [
      {
        fileName: "vaulDrawer",
        fileSrc: "./src/registry/components/drawer/value-drawer.tsx"
      },
      {
        fileName: "sidebarDrawer",
        fileSrc: "./src/registry/components/drawer/sidebar-drawer.tsx"
      },
      {
        fileName: "LeftSidebarDrawer",
        fileSrc: "./src/registry/components/drawer/left-sidebar-drawer.tsx"
      },
      {
        fileName: "headerDrawer",
        fileSrc: "./src/registry/components/drawer/header-drawer.tsx"
      },
      {
        fileName: "nestedVaulDrawer",
        fileSrc: "./src/registry/components/drawer/nested-value-drawer.tsx"
      }
    ],
    slug: "drawer",
    type: "drawer"
  },
  {
    name: "mousetrail",
    componentArray: [
      {
        componentName: "imageMousetrail1",
        componentSrc: React.lazy(
          () => import("@/registry/components/mousetrail/mousetrail1")
        )
      },
      {
        componentName: "imageMousetrail2",
        componentSrc: React.lazy(
          () => import("@/registry/components/mousetrail/mousetrail2")
        )
      },
      {
        componentName: "imageMousetrail3",
        componentSrc: React.lazy(
          () => import("@/registry/components/mousetrail/mousetrail3")
        )
      },
      {
        componentName: "framerImageMousetrail",
        componentSrc: React.lazy(
          () => import("@/registry/components/mousetrail/framer-image-mousetrail")
        )
      },
      {
        componentName: "animatedImageMousetrail1",
        componentSrc: React.lazy(
          () => import("@/registry/components/mousetrail/animated-image-mousetrail1")
        )
      },
      {
        componentName: "animatedImageMousetrail2",
        componentSrc: React.lazy(
          () => import("@/registry/components/mousetrail/animated-image-mousetrail2")
        )
      },
      {
        componentName: "animatedImageMousetrail3",
        componentSrc: React.lazy(
          () => import("@/registry/components/mousetrail/animated-image-mousetrail3")
        )
      },
      {
        componentName: "withoutComponentMousetrail",
        componentSrc: React.lazy(
          () => import("@/registry/components/mousetrail/without-component-mousetrail")
        )
      }
    ],
    filesArray: [
      {
        fileName: "imageMousetrail1",
        fileSrc: "./src/registry/components/mousetrail/mousetrail1/index.tsx"
      },
      {
        fileName: "imageMousetrail2",
        fileSrc: "./src/registry/components/mousetrail/mousetrail2/index.tsx"
      },
      {
        fileName: "imageMousetrail3",
        fileSrc: "./src/registry/components/mousetrail/mousetrail3/index.tsx"
      },
      {
        fileName: "framerImageMousetrail",
        fileSrc: "./src/registry/components/mousetrail/framer-image-mousetrail.tsx"
      },
      {
        fileName: "animatedImageMousetrail2",
        fileSrc: "./src/registry/components/mousetrail/animated-image-mousetrail2.tsx"
      },
      {
        fileName: "animatedImageMousetrail1",
        fileSrc: "./src/registry/components/mousetrail/animated-image-mousetrail1.tsx"
      },
      {
        fileName: "animatedImageMousetrail3",
        fileSrc: "./src/registry/components/mousetrail/animated-image-mousetrail3.tsx"
      },
      {
        fileName: "withoutComponentMousetrail",
        fileSrc: "./src/registry/components/mousetrail/without-component-mousetrail.tsx"
      }
    ],
    slug: "image-moustrail",
    type: "mousetrail"
  },
  {
    name: "sticky-scroll",
    componentArray: [
      {
        componentName: "stickyHero",
        componentSrc: React.lazy(
          () => import("@/registry/components/sticky-scroll/sticky-hero-scroll")
        )
      },
      {
        componentName: "stickyScrollCard",
        componentSrc: React.lazy(
          () => import("@/registry/components/sticky-scroll/sticky-card-scroll")
        )
      }
    ],
    filesArray: [
      {
        fileName: "stickyHero",
        fileSrc: "./src/registry/components/sticky-scroll/sticky-hero-scroll.tsx"
      },
      {
        fileName: "stickyScrollCard",
        fileSrc: "./src/registry/components/sticky-scroll/sticky-card-scroll.tsx"
      }
    ],
    slug: "sticky-scroll",
    type: "scroll"
  },
  {
    name: "scroll-animation",
    componentArray: [
      {
        componentName: "scroll-element",
        componentSrc: React.lazy(
          () => import("@/registry/components/scroll-element-animation/example-one")
        )
      },
      {
        componentName: "scroll-element2",
        componentSrc: React.lazy(
          () => import("@/registry/components/scroll-element-animation/example-two")
        )
      },
      {
        componentName: "scroll-element3",
        componentSrc: React.lazy(
          () => import("@/registry/components/scroll-element-animation/example-three")
        )
      }
    ],
    filesArray: [
      {
        fileName: "scroll-element",
        fileSrc: "./src/registry/components/scroll-element-animation/example-one.tsx"
      },
      {
        fileName: "scroll-element2",
        fileSrc: "./src/registry/components/scroll-element-animation/example-two.tsx"
      },
      {
        fileName: "scroll-element3",
        fileSrc: "./src/registry/components/scroll-element-animation/example-three.tsx"
      }
    ],
    slug: "scroll-scroll",
    type: "scroll"
  },
  {
    name: "random",
    componentArray: [
      {
        componentName: "sectionNoise",
        componentSrc: React.lazy(
          () => import("@/registry/components/noise-effect/section-noise")
        )
      }
    ],
    filesArray: [
      {
        fileName: "sectionNoise",
        fileSrc: "./src/registry/components/noise-effect/section-noise.tsx"
      }
    ],
    slug: "random",
    type: "random"
  },
  {
    name: "block",
    componentArray: [
      {
        componentName: "blocksone",
        componentSrc: React.lazy(
          () => import("@/registry/components/bg-blocks/blocksone")
        )
      }
    ],
    filesArray: [
      {
        fileName: "blocksone",
        fileSrc: "./src/registry/components/bg-blocks/blocksone.tsx"
      }
    ],
    slug: "bg-blocks",
    type: "blocks"
  },
  {
    name: "animation",
    componentArray: [
      {
        componentName: "textAnimation1",
        componentSrc: React.lazy(
          () => import("@/registry/components/text-animation/animationone")
        )
      },
      {
        componentName: "scrollbasedmaquee",
        componentSrc: React.lazy(
          () => import("@/registry/components/text-animation/text-marque/animationone")
        )
      }
    ],
    filesArray: [
      {
        fileName: "textAnimation1",
        fileSrc: "./src/registry/components/text-animation/animationone.tsx"
      },
      {
        fileName: "scrollbasedmaquee",
        fileSrc: "./src/registry/components/text-animation/text-marque/animationone.tsx"
      }
    ],
    slug: "text-animation",
    type: "animation"
  },
  {
    name: "timeline-animation",
    componentArray: [
      {
        componentName: "timelineAnimation",
        componentSrc: React.lazy(
          () => import("@/registry/components/text-animation/timeline/timeline-animation")
        )
      }
    ],
    filesArray: [
      {
        fileName: "timelineAnimation",
        fileSrc: "./src/registry/components/text-animation/timeline/timeline-animation.tsx"
      }
    ],
    slug: "timeline-animation",
    type: "animation"
  }
];

// src/lib/rehype-components.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      if (node.name === "CodePreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          const currentComponentData = COMPONENTS.reduce(
            (acc, component) => {
              const file = component?.filesArray?.find(
                (file2) => file2.fileName === name
              );
              if (file) {
                acc = file;
              }
              return acc;
            },
            {}
          );
          const filePath = path.join(
            process.cwd(),
            currentComponentData?.fileSrc
          );
          let source = fs.readFileSync(filePath, "utf8");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                // __rawString__: source,
                __src__: currentComponentData?.fileSrc
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "DrawerCodePreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          const currentComponentData = COMPONENTS.reduce(
            (acc, component) => {
              const file = component?.filesArray?.find(
                (file2) => file2.fileName === name
              );
              if (file) {
                acc = file;
              }
              return acc;
            },
            {}
          );
          const filePath = path.join(
            process.cwd(),
            currentComponentData?.fileSrc
          );
          let source = fs.readFileSync(filePath, "utf8");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                // __rawString__: source,
                __src__: currentComponentData?.fileSrc
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ScreenCodePreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          const currentComponentData = COMPONENTS.reduce(
            (acc, component) => {
              const file = component?.filesArray?.find(
                (file2) => file2.fileName === name
              );
              if (file) {
                acc = file;
              }
              return acc;
            },
            {}
          );
          const filePath = path.join(
            process.cwd(),
            currentComponentData?.fileSrc
          );
          let source = fs.readFileSync(filePath, "utf8");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                // __rawString__: source,
                __src__: currentComponentData?.fileSrc
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// src/lib/rehype-npm-command.ts
import { visit as visit2 } from "unist-util-visit";
function rehypeNpmCommand() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm install",
          "bun add"
        );
      }
    });
  };
}

// contentlayer.config.js
import { getHighlighter, loadTheme } from "@shikijs/compat";
import path2 from "path";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `components/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var Layouts = defineDocumentType(() => ({
  name: "Layouts",
  filePathPattern: `layouts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var GetStarted = defineDocumentType(() => ({
  name: "GetStarted",
  filePathPattern: `get-started/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var Templates = defineDocumentType(() => ({
  name: "Templates",
  filePathPattern: `templates/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var OpenSource = defineDocumentType(() => ({
  name: "OpenSource",
  filePathPattern: `open-source/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Component, Layouts, GetStarted, Templates, OpenSource],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            node.__rawString__ = codeEl.children?.[0].value;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: "night-owl",
          // theme: 'github-dark-dimmed',
          // getHighlighter: async () => {
          //   const theme = await loadTheme(
          //     path.join(process.cwd(), './src/lib/themes/dark.json')
          //   )
          //   return await getHighlighter({ theme })
          // },
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            const nodeClass = node.properties.className;
            if (nodeClass && nodeClass.length > 0) {
              node.properties.className.push("line--highlighted");
            } else {
              node.properties.className = ["line--highlighted"];
            }
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__withMeta__"] = node.children.at(0).tagName === "div";
            preElement.properties["__rawString__"] = node.__rawString__;
            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__;
            }
            if (node.__style__) {
              preElement.properties["__style__"] = node.__style__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Component,
  GetStarted,
  Layouts,
  OpenSource,
  Templates,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-B4CUOK6R.mjs.map
