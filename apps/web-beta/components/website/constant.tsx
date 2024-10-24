import { Icons } from '@/assets/icons';
import preview from '@/assets/preview';
import { Pre, RawCode, highlight } from 'codehike/code';
import {
  InlineAnnotation,
  AnnotationHandler,
  InnerLine,
  InnerPre,
  InnerToken,
} from 'codehike/code';

export const wordWrap: AnnotationHandler = {
  name: 'word-wrap',
  Pre: (props) => <InnerPre merge={props} className='whitespace-pre-wrap' />,
  Line: (props) => (
    <InnerLine merge={props}>
      <div
        style={{
          textIndent: `${-props.indentation}ch`,
          marginLeft: `${props.indentation}ch`,
        }}
      >
        {props.children}
      </div>
    </InnerLine>
  ),
  Token: (props) => <InnerToken merge={props} style={{ textIndent: 0 }} />,
};
export const callout: AnnotationHandler = {
  name: 'callout',
  transform: (annotation: InlineAnnotation) => {
    const { name, query, lineNumber, fromColumn, toColumn, data } = annotation;
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: { ...data, column: (fromColumn + toColumn) / 2 },
    };
  },
  Block: ({ annotation, children }) => {
    const { column } = annotation.data;
    return (
      <>
        {children}
        <div
          style={{ minWidth: `${column + 4}ch` }}
          className='w-fit border bg-background border-current rounded px-2 relative -ml-[1ch] mt-1 whitespace-break-spaces'
        >
          <div
            style={{ left: `${column}ch` }}
            className='absolute border-l border-t border-current w-2 h-2 rotate-45 -translate-y-1/2 -top-[1px] bg-background'
          />
          {annotation.query}
        </div>
      </>
    );
  },
};

export const mark: AnnotationHandler = {
  name: 'mark',
  Line: ({ annotation, ...props }) => {
    const color = annotation?.query || 'rgb(14 165 233)';
    return (
      <div
        className='...'
        style={{
          borderLeft: 'solid 2px transparent',
          borderLeftColor: annotation && color,
          backgroundColor: annotation && `rgb(from ${color} r g b / 0.1)`,
          padding: '3px 4px',
        }}
      >
        <InnerLine merge={props} className='...' />
      </div>
    );
  },
  Inline: ({ annotation, children }) => {
    const color = annotation?.query || 'rgb(14 165 233)';
    return (
      <span
        className='...'
        style={{
          outline: `solid 1px rgb(from ${color} r g b / 0.5)`,
          background: `rgb(from ${color} r g b / 0.13)`,
          padding: '2px 3px',
        }}
      >
        {children}
      </span>
    );
  },
};

export const lineNumbers: AnnotationHandler = {
  name: 'line-numbers',
  Line: (props) => {
    const width = props.totalLines.toString().length + 1;
    return (
      <div className='flex'>
        <span
          className='text-right opacity-50 select-none'
          style={{ minWidth: `${width}ch` }}
        >
          {props.lineNumber}
        </span>
        <InnerLine merge={props} className='flex-1 pl-2' />
      </div>
    );
  },
};

interface ComponentInfo {
  componentName: string;
  filesrc?: string;
  iframeSrc?: string;
  parentlink: string;
  parentName: string;
  isNew?: boolean;
  iframelink?: string;
}

interface Category {
  name: string;
  componentArray: ComponentInfo[];
  type: string;
}

interface SidebarItem {
  name: string;
  href: string;
  isNew?: boolean;
}

interface SidebarCategory {
  name: string;
  items: SidebarItem[];
}

export const generateSidebarData = (data: Category[]): SidebarCategory[] => {
  const sidebarData: SidebarCategory[] = [];
  const processedCategories = new Set<string>();

  data.forEach((category) => {
    if (!processedCategories.has(category.name)) {
      const sidebarCategory: SidebarCategory = {
        name: category.name,
        items: category.componentArray.map((component) => ({
          name: component.parentName,
          href: `/components/${component.parentlink}`,
          isNew: component.isNew ? true : false, // You might want to determine this based on some criteria
        })),
      };

      // Remove duplicates and sort items
      sidebarCategory.items = Array.from(
        new Set(sidebarCategory.items.map((item) => JSON.stringify(item)))
      )
        .map((item) => JSON.parse(item))
        .sort((a, b) => a.name.localeCompare(b.name));

      sidebarData.push(sidebarCategory);
      processedCategories.add(category.name);
    }
  });

  return sidebarData.sort((a, b) => a.name.localeCompare(b.name));
};
export const CardArr = [
  {
    img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
    title: 'Nike Air1',
    color: '#202020',
  },
  {
    img: 'https://images.unsplash.com/photo-1704677982215-a2248af6009b?q=80&w=1200&auto=format&fit=crop',
    title: 'Nike Air2',
    color: '#23acfc',
  },
  {
    img: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop',
    title: 'Adidas',
    color: '#a3fcff',
  },
  {
    img: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=1200&auto=format&fit=crop',
    title: 'Brown Leather ',
    color: '#A4636C',
  },
];

export const imgPreview = {
  img1: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  img2: 'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  img3: 'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  img4: 'https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format',
  img5: 'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  img6: 'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format',
  img7: 'https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format',
  img8: 'https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format',
  img9: 'https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format',
  img10:
    'https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format',
  img11:
    'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1200&auto=format',
  img12:
    'https://images.unsplash.com/photo-1546942113-a6c43b63104a?q=80&w=1200&auto=format',
  img13:
    'https://images.unsplash.com/photo-1726551195764-f98a8e8a57c3?q=80&w=1200&auto=format',
  img14:
    'https://images.unsplash.com/photo-1726551195795-612ca47c0b7d?q=80&w=1200&auto=format',
  img15:
    'https://images.unsplash.com/photo-1532423622396-10a3f979251a?q=80&w=1200&auto=format',
  img16:
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format',
  img17:
    'https://images.unsplash.com/photo-1496861083958-175bb1bd5702?q=80&w=1200&auto=format',
  img18:
    'https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=1200&auto=format',
};

export const items = [
  {
    id: 1,
    url: imgPreview.img1,
    title: 'Misty Mountain Majesty',
    description:
      'A breathtaking view of misty mountains shrouded in clouds, creating an ethereal landscape.',
    tags: ['Misty', 'Mountains', 'Clouds', 'Ethereal', 'Landscape'],
  },
  {
    id: 2,
    url: imgPreview.img2,
    title: 'Winter Wonderland',
    description:
      "A serene winter scene with snow-covered trees and mountains, showcasing nature's pristine beauty.",
    tags: ['Winter', 'Snow', 'Trees', 'Mountains', 'Serene'],
  },
  {
    id: 3,
    url: imgPreview.img3,
    title: 'Autumn Mountain Retreat',
    description:
      'A cozy cabin nestled in the mountains, surrounded by the vibrant colors of autumn foliage.',
    tags: ['Autumn', 'Cabin', 'Mountains', 'Foliage', 'Cozy'],
  },
  {
    id: 4,
    url: imgPreview.img4,
    title: 'Tranquil Lake Reflection',
    description:
      'A calm mountain lake perfectly reflecting the surrounding peaks and sky, creating a mirror-like surface.',
    tags: ['Lake', 'Reflection', 'Mountains', 'Tranquil', 'Mirror'],
  },
  {
    id: 5,
    url: imgPreview.img5,
    title: 'Misty Mountain Peaks',
    description:
      "Majestic mountain peaks emerging from a sea of clouds, showcasing nature's grandeur.",
    tags: ['Misty', 'Peaks', 'Clouds', 'Majestic', 'Nature'],
  },
  {
    id: 6,
    url: imgPreview.img6,
    title: 'Golden Hour Glow',
    description:
      'A stunning mountain landscape bathed in the warm light of the golden hour, highlighting every contour.',
    tags: ['Golden Hour', 'Mountains', 'Landscape', 'Warm', 'Scenic'],
  },
  {
    id: 7,
    url: imgPreview.img7,
    title: 'Snowy Mountain Highway',
    description:
      'A winding road cutting through a snowy mountain landscape, inviting adventure and exploration.',
    tags: ['Snow', 'Road', 'Mountains', 'Winter', 'Adventure'],
  },
  {
    id: 8,
    url: imgPreview.img8,
    title: 'Foggy Mountain Forest',
    description:
      'A mysterious and enchanting forest shrouded in fog, with mountains looming in the background.',
    tags: ['Fog', 'Forest', 'Mountains', 'Mysterious', 'Enchanting'],
  },
  {
    id: 9,
    url: imgPreview.img9,
    title: 'Sunset Mountain Silhouette',
    description:
      'A dramatic silhouette of mountain peaks against a vibrant sunset sky, creating a stunning contrast.',
    tags: ['Sunset', 'Silhouette', 'Mountains', 'Dramatic', 'Sky'],
  },
  {
    id: 10,
    url: imgPreview.img10,
    title: 'Alpine Meadow Bliss',
    description:
      'A lush alpine meadow dotted with wildflowers, set against a backdrop of towering mountain peaks.',
    tags: ['Alpine', 'Meadow', 'Wildflowers', 'Mountains', 'Peaceful'],
  },
  {
    id: 11,
    url: imgPreview.img11,
    title: 'Mountain Lake Serenity',
    description:
      'A serene mountain lake surrounded by pine forests, reflecting the calm beauty of the wilderness.',
    tags: ['Lake', 'Mountains', 'Forest', 'Reflection', 'Serenity'],
  },
  {
    id: 12,
    url: imgPreview.img12,
    title: 'Icy Mountain Stream',
    description:
      "A crystal-clear mountain stream flowing through a snowy landscape, showcasing winter's pristine beauty.",
    tags: ['Stream', 'Snow', 'Winter', 'Mountains', 'Crystal'],
  },
  {
    id: 13,
    url: imgPreview.img13,
    title: 'Wildflower Mountain Meadow',
    description:
      'A colorful array of wildflowers carpeting a mountain meadow, with majestic peaks in the distance.',
    tags: ['Wildflowers', 'Meadow', 'Mountains', 'Colorful', 'Nature'],
  },
  {
    id: 14,
    url: imgPreview.img14,
    title: 'Mountain Valley Vista',
    description:
      'A sweeping view of a vast mountain valley, showcasing the grandeur of the natural landscape.',
    tags: ['Valley', 'Mountains', 'Vista', 'Landscape', 'Grandeur'],
  },
  {
    id: 15,
    url: imgPreview.img15,
    title: 'Rugged Mountain Terrain',
    description:
      'A close-up view of rugged mountain terrain, highlighting the raw beauty and texture of the rocks.',
    tags: ['Rugged', 'Terrain', 'Mountains', 'Texture', 'Close-up'],
  },
  {
    id: 16,
    url: imgPreview.img16,
    title: 'Mountain Wildflower Bloom',
    description:
      'A vibrant display of mountain wildflowers in full bloom, adding splashes of color to the alpine landscape.',
    tags: ['Wildflowers', 'Bloom', 'Mountains', 'Vibrant', 'Alpine'],
  },
  {
    id: 17,
    url: imgPreview.img17,
    title: 'Mountain River Rapids',
    description:
      'A rushing mountain river cutting through rocky terrain, showcasing the power and beauty of nature.',
    tags: ['River', 'Rapids', 'Mountains', 'Power', 'Nature'],
  },
  {
    id: 18,
    url: imgPreview.img18,
    title: 'Lush Mountain Valley',
    description:
      'A verdant mountain valley filled with lush vegetation and winding streams, epitomizing natural beauty.',
    tags: ['Valley', 'Lush', 'Mountains', 'Streams', 'Verdant'],
  },
];

export const apps = [
  {
    id: 'carousel',
    icon: Icons.doc_icon5,
    name: 'Carousel',
    imgSrc: preview.carousel,
  },
  {
    id: 'tabs',
    icon: Icons.doc_icon4,
    name: 'Tabs',
    imgSrc: preview.tabs,
  },
  {
    id: 'faqs',
    icon: Icons.doc_star,
    name: 'Faqs',
    imgSrc: preview.faqs,
  },
  {
    id: 'grid',
    icon: Icons.doc_icon3,
    name: 'Grid',
    imgSrc: preview.grid,
  },
  {
    id: 'masking',
    icon: Icons.doc_circle,
    name: 'Masking',
    onClick: () =>
      window.open(
        'https://www.ui-layout.com/components/magnified-doc',
        '_blank',
        'noopener,noreferrer'
      ),
    imgSrc: preview.image_masking,
  },
  {
    id: 'mouseTrail',
    icon: Icons.doc_rectangle,
    name: 'MouseTrail',
    onClick: () =>
      window.open(
        'https://naymur-rahman.com/',
        '_blank',
        'noopener,noreferrer'
      ),
    imgSrc: preview.image_mousetrail,
  },
  {
    id: 'sticky',
    icon: Icons.doc_icon2,
    name: 'Sticky',
    imgSrc: preview.sticky,
  },
  {
    id: 'gallery',
    icon: Icons.doc_triangle,
    name: 'Gallery',
    imgSrc: preview.galleryNew,
  },
];
