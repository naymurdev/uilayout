const ButtonHover10 = () => {
  return (
    <>
      <button className='group relative h-12 rounded-full border-2 dark:border-[#656fe2] border-[#394481] bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] px-5 dark:text-white text-neutral-950'>
        <span className='relative inline-flex overflow-hidden'>
          <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12'>
            Contact me
          </div>
          <div className='absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
            Contact me
          </div>
        </span>
      </button>
    </>
  );
};

export default ButtonHover10;
