import React from 'react'

function index() {
  return (
    <>
      <section className="gap-2 dark:bg-black bg-white border rounded-lg p-5">
        <figure className="relative h-[80vh] ">
          <img
            src="https://images.unsplash.com/photo-1523612192437-66de9804ac3c?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover  aspect-square"
            style={{
              maskImage: "url('/splash.svg')",
              maskSize: 'cover',
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
