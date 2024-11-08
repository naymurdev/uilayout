<br />
<p align="center">
  <a href="https://github.com/naymurdev/uilayout">
    <img src="uilayoutlogo.png" alt="uilayout" width="450" />
  </a>
<p>

UI LAYOUT is an open-source component library that makes easier for developers and designers to build websites. It's focused on creative designs. I love to create comopnent that really matter or need your site and I belive in future I'll bring more as i kept bringing more just support me

<img alt="UI-Layout - Design That Really Makes Sense" src="uilayout.gif" width="100%">
<!-- <h3 align="center">UI-Layout</h3>
<p align="center">
    Design That Really Makes Sense
</p> -->

## Installation

You must install `tailwindcss`. As most of our components use `framer-motion` install it too.

```bash
npm install framer-motion clsx tailwind-merge
```

Must Add it in the `utils.ts`:

```tsx title="utils.tsx"
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

use this hooks for mediaQueries:

```tsx title="use-media-query.tsx"
import { useEffect, useState } from 'react'

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}
```



## Most Used Components

- [Image Ripple Effect](https://ui-layout.com/components/image-ripple-effect)
- [Buy Me Coffee](https://ui-layout.com/components/buy-me-coffee)
- [Youtube Tags](https://ui-layout.com/components/tags-input)
- [File Upload](https://ui-layout.com/components/file-upload)
- [Password](https://ui-layout.com/components/password)
- [Range Slider](https://ui-layout.com/components/range-slider)
- [Motion Number](https://ui-layout.com/components/motion-number)
- [Embla Carousel](https://ui-layout.com/components/embla-carousel)
- [Sparkles](https://ui-layout.com/components/sparkles)
- [Drag Items](https://ui-layout.com/components/drag-items)
- [Timeline Animation](https://ui-layout.com/components/timeline-animation)
- [Clip Path Image](https://ui-layout.com/components/clip-path-image)
- [Buttons](https://ui-layout.com/components/buttons)
- [Image Mousetrail](https://ui-layout.com/components/image-mousetrail)
- [Image Reveal](https://ui-layout.com/components/image-reveal)

Visit all the [components](https://www.ui-layout.com/components).

## Labs

Visit [Labs](https://www.ui-layout.com/labs) to explore more experiments and ideas.

## 👤 Author (Naymur)

- X: [@naymur_dev](https://x.com/naymur_dev)
- LinkedIn: [in/naymur-rahman](https://www.linkedin.com/in/naymur-rahman/)

## Be A Sponsor

<a href="https://buymeacoffee.com/naymurdev"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="naymur-uilayout" /></a>
<br/>
