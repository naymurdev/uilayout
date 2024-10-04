import { MediaModal } from '@/registry/components/modal/media-modal/image-modal'

export default function Dialog() {
  return (
    <div className="relative h-full">
      <div className=" h-full">
        <MediaModal
          imgSrc={
            'https://images.unsplash.com/photo-1706547343914-2b14529049ed?q=80&w=1200&auto=format&fit=crop'
          }
        />
      </div>
    </div>
  )
}
