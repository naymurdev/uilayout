const buttonHover7 = () => {
  return (
    <>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md  border-2 dark:border-[#656fe2] border-[#394481]  font-medium">
        <div className="inline-flex h-12 translate-y-0 items-center justify-center  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff]   px-6 dark:text-white text-black transition group-hover:-translate-y-[150%]">
          Contact me
        </div>
        <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-[#394481] dark:bg-[#656fe2] px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
          Contact me
        </div>
      </button>
    </>
  )
}

export default buttonHover7
