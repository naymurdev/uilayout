import { TEMPLATES } from '@/assets/data/templates'
import Image from 'next/image'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Eye, MoveUpRight, X } from 'lucide-react'
function TemplateCard() {
  return (
    <div className="grid 2xl:grid-cols-3 grid-cols-2 gap-5 mt-4">
      {TEMPLATES?.map((template, index) => {
        return (
          <>
            <Drawer>
              <DrawerTrigger>
                <article
                  key={index}
                  className="border p-2 rounded-lg text-left dark:bg-gray-900 bg-black/5 relative"
                >
                  <Image
                    src={template?.src}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-lg border"
                  />
                  <div className="py-2 flex justify-between items-center">
                    <h1 className="text-2xl leading-[110%] uppercase font-semibold">
                      {template?.name}
                    </h1>
                    <p className=" p-2 text-xl dark:bg-white h-10 dark:text-black bg-base-dark text-white rounded-lg px-5  grid place-content-center  font-semibold">
                      ${template?.price}
                    </p>
                  </div>
                </article>
              </DrawerTrigger>
              <DrawerContent className="h-[95vh] w-full ">
                <DrawerDescription className=" h-[95vh]  px-5  overflow-auto overflow-x-hidden ">
                  <div className="container mx-auto px-10 grid grid-cols-6 gap-4 py-4">
                    <div className="col-span-3 grid gap-2">
                      <Image
                        src={template?.images[0]}
                        alt=""
                        width={1200}
                        height={800}
                        className=" dark:border-white border-base-dark border-2 rounded-lg"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        {template?.images?.slice(1, 3).map((img, index) => (
                          <>
                            <>
                              <Image
                                src={img}
                                key={index}
                                alt=""
                                width={600}
                                height={600}
                                className="rounded-lg  dark:border-white border-base-dark border-2  overflow-hidden"
                              />
                            </>
                          </>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {template?.images?.slice(3).map((img, index) => (
                          <>
                            <Image
                              src={img}
                              alt=""
                              width={1200}
                              height={800}
                              key={index}
                              className="rounded-lg  dark:border-white border-base-dark border-2 h-fit "
                            />
                          </>
                        ))}
                      </div>
                    </div>
                    <article className=" col-span-3 text-foreground">
                      <h1 className="text-2xl  uppercase font-semibold text-center">
                        {template?.name}
                      </h1>
                      <h1 className="text-4xl leading-[110%]  font-medium  text-center">
                        {template?.title}
                      </h1>
                      <p className="text-2xl pt-10">Description:</p>
                      <div className="dark:bg-gray-800 bg-gray-100 p-3 rounded-lg">
                        <p>{template?.description}</p>
                      </div>
                      <p className="text-2xl mt-2">Features:</p>
                      <ul className="dark:bg-gray-800 bg-gray-100 p-3 rounded-lg  list-disc px-8">
                        {template?.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <p className="text-2xl mt-2">Technologies:</p>
                      <ul className="flex flex-nowrap gap-2">
                        {template?.technologies.map((technology, index) => (
                          <li
                            key={index}
                            className="border p-2 rounded-lg mt-1 dark:bg-gray-800 bg-gray-100"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>

                      <div className="fixed bottom-4 left-0 w-full ">
                        <div className="w-fit mx-auto border rounded-md flex gap-2 p-2 dark:bg-white bg-base-dark backdrop-blur-lg ">
                          <button className="h-12 px-6 bg-green-500 rounded-md text-xl text-white">
                            (${template?.price}) Buy Now
                          </button>
                          <a
                            href={template?.link}
                            target="_blank"
                            className="bg-blue-600 h-12 px-6 text-white rounded-md  text-xl flex gap-2 items-center"
                          >
                            Visit
                            <Eye />
                          </a>
                          <DrawerClose>
                            <button className="bg-red-500 h-12 px-6 text-white rounded-md">
                              <X />
                            </button>
                          </DrawerClose>
                        </div>
                      </div>
                    </article>
                  </div>
                </DrawerDescription>
              </DrawerContent>
            </Drawer>
          </>
        )
      })}
      {/* <iframe
        title="Embedded Website"
        src="https://profitable.vercel.app/"
        width="100%"
        height="600px"
        frameBorder="0"
      ></iframe> */}
    </div>
  )
}

export default TemplateCard
