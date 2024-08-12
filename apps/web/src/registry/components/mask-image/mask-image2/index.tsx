import React from 'react'

function index() {
  return (
    <>
      <section className="gap-2 dark:bg-black bg-white border rounded-lg p-5">
        <figure className="relative h-[80vh] ">
          <img
            src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover  aspect-square"
            style={{
              maskImage:
                "url('https://res.cloudinary.com/dzl9yxixg/image/upload/1991881_vrcp2n.svg')",
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
