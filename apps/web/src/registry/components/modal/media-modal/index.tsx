import { MediaModal } from './image-modal'

export default function Dialog() {
  return (
    <div className="relative h-full">
      <div className="grid grid-cols-2 gap-2 h-full">
        <MediaModal
          imgSrc={
            'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/two_cosolk.jpg'
          }
        />
        <MediaModal
          videoSrc={
            'https://res.cloudinary.com/dzl9yxixg/video/upload/v1715679908/nature_w14mmq.mp4'
          }
        />
      </div>
    </div>
  )
}
