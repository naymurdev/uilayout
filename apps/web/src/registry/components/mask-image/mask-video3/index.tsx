import React from 'react'

function index() {
  return (
    <>
      <section className="gap-2 dark:bg-black bg-white border rounded-lg p-5">
        <figure className="relative   ">
          <video
            autoPlay
            muted
            loop
            style={{
              maskImage:
                "url('https://res.cloudinary.com/dzl9yxixg/image/upload/Vector_162_1_aj3hiz.svg')",
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
            className="w-full relative h-full object-cover  aspect-square "
          >
            <source
              src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </figure>
      </section>
    </>
  )
}

export default index
