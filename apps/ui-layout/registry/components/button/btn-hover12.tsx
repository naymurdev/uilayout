const ButtonHover12 = () => {
  return (
    <>
      <button className='group h-8 select-none rounded-lg dark:bg-black dark:text-white bg-white dark:bg-gradient-to-b dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-600 px-3 text-sm leading-8 text-zinc-950 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] dark:shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-zinc-50 hover:via-zinc-900 hover:to-zinc-800 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset] dark:hover:bg-gradient-to-b dark:hover:from-zinc-900 dark:hover:via-zinc-900 dark:hover:to-zinc-700 dark:active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]'>
        <span className='block group-active:[transform:translate3d(0,1px,0)]'>
          Click me
        </span>
      </button>
    </>
  );
};

export default ButtonHover12;
