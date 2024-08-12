import React from 'react'

function index() {
  return (
    <>
      <section className="gap-2 dark:bg-black bg-white border rounded-lg p-5">
        <figure className="relative  ">
          <video
            autoPlay
            muted
            loop
            style={{
              maskImage:
                "url('https://res.cloudinary.com/dzl9yxixg/image/upload/2174691_o3eq9a.svg')",
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
            className="w-full relative h-full object-cover  aspect-square "
          >
            <source
              src="https://res.cloudinary.com/dzl9yxixg/video/upload/5039487-hd_1366_720_25fps_fagjxp.mp4"
              type="video/mp4"
            />
          </video>
        </figure>
      </section>
    </>
  )
}

export default index
