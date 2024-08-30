import { MediaModal } from '@/registry/components/modal/media-modal/image-modal'

export default function Dialog() {
  return (
    <div className="relative h-full">
      <div className=" h-full">
        <MediaModal
          imgSrc={
            'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/two_cosolk.jpg'
          }
        />
      </div>
    </div>
  )
}
