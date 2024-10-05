import React from 'react'

function index() {
  return (
    <>
      <section className="grid grid-cols-2 gap-2 dark:bg-black bg-white border rounded-lg p-5">
        <figure className="relative h-fit">
          <img
            src="https://images.unsplash.com/photo-1535968881874-0c39f1503640?w=500&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover  aspect-square"
            style={{
              maskImage: "url('/cat.svg')",
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
        </figure>

        <figure className="relative h-fit ">
          <img
            src="https://images.unsplash.com/photo-1556648011-e01aca870a81?w=500&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover  aspect-square "
            style={{
              maskImage: "url('/panda.svg')",
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
        </figure>
      </section>
    </>
  )
}

export default index
