const GradientCard = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-12">
        <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
          <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
            <p className="text-gray-700 dark:text-gray-300">
              I absolutely love Tailus! The component blocks are beautifully
              designed and easy to use, which makes creating a great-looking
              website a breeze.
            </p>

            <div className="mt-8 flex gap-4 items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                alt=""
              />
              <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                  Oketa Fred
                </h3>
                <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
                  Fullstack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
