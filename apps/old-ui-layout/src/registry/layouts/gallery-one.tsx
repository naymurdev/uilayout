import React from 'react'

function Gallery() {
  return (
    <>
      <div className="flex h-[80vh] items-center justify-center overflow-x-hidden px-0 py-0">
        <div className="group/list flex justify-center gap-1">
          <div className="peer order-last flex w-max items-center justify-center gap-1">
            <div className="group relative w-20 overflow-hidden transition-all duration-500 hover:w-96">
              <div className="h-96">
                <a
                  href="#"
                  className="absolute right-0.5 top-0.5 flex h-9 w-9 origin-top-right scale-75 rounded-sm bg-black/10 opacity-0 transition-all delay-300 duration-300 hover:bg-black group-hover:scale-100 group-hover:rounded-md group-hover:bg-black/20 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="m-auto h-4 w-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </a>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src="https://tlfolio.netlify.app/images/me/show-two.webp"
                  alt=""
                />
              </div>
              <div className="flex w-96 justify-between px-2 pt-2">
                <div className="relative">
                  <span className="absolute -left-2 m-auto block text-sm tracking-wide text-gray-600 transition duration-300 group-hover:invisible group-hover:opacity-0">
                    002
                  </span>
                  <h2 className="leading-0 font-medium text-gray-700 opacity-0 transition duration-300 group-hover:opacity-100">
                    Caktus
                  </h2>
                </div>
                <span className="text-sm tracking-wide text-gray-600">
                  Webdesign
                </span>
              </div>
            </div>
            <div className="group relative w-20 overflow-hidden transition-all duration-500 hover:w-96">
              <div className="h-96">
                <a
                  href="#"
                  className="absolute right-0.5 top-0.5 flex h-9 w-9 origin-top-right scale-75 rounded-sm bg-black/10 opacity-0 transition-all delay-300 duration-300 hover:bg-black group-hover:scale-100 group-hover:rounded-md group-hover:bg-black/20 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="m-auto h-4 w-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </a>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src="https://tlfolio.netlify.app/images/me/show-thirteen.webp"
                  alt=""
                />
              </div>
              <div className="flex w-96 justify-between px-2 pt-2">
                <div className="relative">
                  <span className="absolute -left-2 m-auto block text-sm tracking-wide text-gray-600 transition duration-300 group-hover:invisible group-hover:opacity-0">
                    003
                  </span>
                  <h2 className="leading-0 font-medium text-gray-700 opacity-0 transition duration-300 group-hover:opacity-100">
                    Gild Sport
                  </h2>
                </div>
                <span className="text-sm tracking-wide text-gray-600">
                  Webdesign
                </span>
              </div>
            </div>
            <div className="group relative w-20 overflow-hidden transition-all duration-500 hover:w-96">
              <div className="h-96">
                <a
                  href="#"
                  className="absolute right-0.5 top-0.5 flex h-9 w-9 origin-top-right scale-75 rounded-sm bg-black/10 opacity-0 transition-all delay-300 duration-300 hover:bg-black group-hover:scale-100 group-hover:rounded-md group-hover:bg-black/20 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="m-auto h-4 w-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </a>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src="https://tlfolio.netlify.app/images/me/show-twelve.webp"
                  alt=""
                />
              </div>
              <div className="flex w-96 justify-between px-2 pt-2">
                <div className="relative">
                  <span className="absolute -left-2 m-auto block text-sm tracking-wide text-gray-600 transition duration-300 group-hover:invisible group-hover:opacity-0">
                    004
                  </span>
                  <h2 className="leading-0 font-medium text-gray-700 opacity-0 transition duration-300 group-hover:opacity-100">
                    Sketchy
                  </h2>
                </div>
                <span className="text-sm tracking-wide text-gray-600">
                  Webdesign
                </span>
              </div>
            </div>
            <div className="group relative w-20 overflow-hidden transition-all duration-500 hover:w-96">
              <div className="h-96">
                <a
                  href="#"
                  className="absolute right-0.5 top-0.5 flex h-9 w-9 origin-top-right scale-75 rounded-sm bg-black/10 opacity-0 transition-all delay-300 duration-300 hover:bg-black group-hover:scale-100 group-hover:rounded-md group-hover:bg-black/20 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="m-auto h-4 w-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </a>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src="https://tlfolio.netlify.app/images/me/show-ten.webp"
                  alt=""
                />
              </div>
              <div className="flex w-96 justify-between px-2 pt-2">
                <div className="relative">
                  <span className="absolute -left-2 m-auto block text-sm tracking-wide text-gray-600 transition duration-300 group-hover:invisible group-hover:opacity-0">
                    005
                  </span>
                  <h2 className="leading-0 font-medium text-gray-700 opacity-0 transition duration-300 group-hover:opacity-100">
                    Ken Luther
                  </h2>
                </div>
                <span className="text-sm tracking-wide text-gray-600">
                  Webdesign
                </span>
              </div>
            </div>
            <div className="group relative w-20 overflow-hidden transition-all duration-500 hover:w-96">
              <div className="h-96">
                <a
                  href="#"
                  className="absolute right-0.5 top-0.5 flex h-9 w-9 origin-top-right scale-75 rounded-sm bg-black/10 opacity-0 transition-all delay-300 duration-300 hover:bg-black group-hover:scale-100 group-hover:rounded-md group-hover:bg-black/20 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="m-auto h-4 w-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </a>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src="https://tlfolio.netlify.app/images/me/show-six.webp"
                  alt=""
                />
              </div>
              <div className="flex w-96 justify-between px-2 pt-2">
                <div className="relative">
                  <span className="absolute -left-2 m-auto block text-sm tracking-wide text-gray-600 transition duration-300 group-hover:invisible group-hover:opacity-0">
                    006
                  </span>
                  <h2 className="leading-0 font-medium text-gray-700 opacity-0 transition duration-300 group-hover:opacity-100">
                    Devscast Team
                  </h2>
                </div>
                <span className="text-sm tracking-wide text-gray-600">
                  Webdesign
                </span>
              </div>
            </div>
          </div>
          <div className="group relative order-first w-96 overflow-hidden transition-all duration-500 hover:w-96 peer-hover:w-20">
            <div className="h-96">
              <div className="absolute right-0.5 top-0.5 flex w-32 origin-top-right justify-end transition-all duration-300 group-hover:right-0.5 group-hover/list:scale-75 group-hover:scale-100 group-hover/list:opacity-0 group-hover:opacity-100">
                <a
                  href="#"
                  className="flex h-9 w-9 rounded-md bg-black/20 transition-all delay-300 duration-300 hover:bg-black/40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="m-auto h-4 w-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </a>
              </div>
              <img
                className="h-full w-full rounded-lg object-cover"
                src="https://tlfolio.netlify.app/images/me/show-one.webp"
                alt=""
              />
            </div>
            <div className="flex w-96 justify-between px-2 pt-2">
              <div className="relative">
                <span className="absolute -left-2 m-auto block text-sm tracking-wide text-gray-600 opacity-0 transition-opacity duration-300 group-hover/list:opacity-100 group-hover:opacity-0">
                  001
                </span>
                <h2 className="leading-0 font-medium text-gray-700 transition duration-300 group-hover/list:opacity-0 group-hover:opacity-100">
                  Light Trade
                </h2>
              </div>
              <span className="text-sm tracking-wide text-gray-600">
                Webdesign
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Gallery
