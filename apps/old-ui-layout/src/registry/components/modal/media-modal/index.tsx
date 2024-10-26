import { MediaModal } from './image-modal'

export default function Dialog() {
  return (
    <div className="relative h-full">
      <div className="grid grid-cols-2 gap-2 h-full">
        <MediaModal
          imgSrc={
            'https://images.unsplash.com/photo-1726824766931-4bd8b59af37c?q=80&w=1000&auto=format&fit=crop'
          }
        />
        <MediaModal
          videoSrc={
            'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4'
          }
        />
      </div>
    </div>
  )
}
