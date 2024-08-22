import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from './dialog'
import { Plus } from 'lucide-react'

const items = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/gallerynew_x3apwx.svg',
    title: 'Accordion',
    description:
      'Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ',
    tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/sparkles_ko7fz4.svg',
    title: 'Globe Section',
    description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
    tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/image_mousetrail_jt45al.svg',
    title: 'Image Mouse Trail',
    description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
    tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
  },
]
export default function LinearCard() {
  return (
    <div className="flex gap-4">
      {items.map((item, i) => {
        return (
          <>
            <Dialog
              transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.5,
              }}
            >
              <DialogTrigger
                style={{
                  borderRadius: '12px',
                }}
                className="flex w-full flex-col overflow-hidden  border    dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950"
              >
                <DialogImage
                  src={item.url}
                  alt=""
                  className="h-56 w-full object-cover"
                />
                <div className="flex flex-grow flex-row items-end justify-between p-3">
                  <div>
                    <DialogTitle className="text-zinc-950 text-xl dark:text-zinc-50">
                      {item.title}
                    </DialogTitle>
                  </div>
                  <button className="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContainer className="pt-20">
                <DialogContent
                  style={{
                    borderRadius: '24px',
                  }}
                  className=" relative flex h-full mx-auto flex-col overflow-y-auto border dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950 lg:w-[900px] w-[80%] "
                >
                  <DialogImage
                    src={item.url}
                    alt=""
                    className="h-full  object-contain w-[60%] mx-auto"
                  />
                  <div className="p-6">
                    <DialogTitle className="text-5xl text-zinc-950 dark:text-zinc-50">
                      {item.title}
                    </DialogTitle>

                    <DialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, scale: 0.8, y: -40 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, scale: 0.8, y: -50 },
                      }}
                    >
                      <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                        {item.description}
                      </p>
                    </DialogDescription>
                  </div>
                  <DialogClose className="text-zinc-50  dark:bg-gray-900 bg-gray-400 p-4 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800" />
                </DialogContent>
              </DialogContainer>
            </Dialog>
          </>
        )
      })}
    </div>
  )
}
