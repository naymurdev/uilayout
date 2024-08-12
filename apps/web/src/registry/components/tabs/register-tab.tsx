// thanks to maximeheckel
import { FcGoogle } from 'react-icons/fc'
import React, { useState } from 'react'
import { Lock, Phone } from 'lucide-react'

import Image from 'next/image'
import { TabsBtn, TabsContent, TabsProvider } from './tab'
import { FaApple, FaFacebook } from 'react-icons/fa6'

function index() {
  return (
    <>
      <TabsProvider defaultValue={'login'} wobbly={false}>
        <div className="flex justify-center mt-2">
          <div className="flex items-center w-fit dark:bg-[#1a1c20] bg-gray-200 p-1 dark:text-white text-black rounded-md border">
            <TabsBtn value="login">
              <span className="relative z-[2] uppercase">Login</span>
            </TabsBtn>
            <TabsBtn value="register">
              <span className="relative z-[2] uppercase">Register</span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value="login">
          <div className="dark:bg-black bg-white  mx-auto max-w-[400px]  dark:text-white text-black p-4 py-8 shadow-md rounded-md space-y-2">
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="img"
                width={80}
                height={80}
                className="w-12"
              />
            </div>
            <div className="text-center py-2">
              <h1 className="font-semibold text-2xl">Welcome Back</h1>
              <p>Please Enter Your Details to Sign In</p>
            </div>

            <div className="flex gap-2 justify-between">
              <button className="bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl flex justify-center ">
                <FcGoogle />
              </button>
              <button className="bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl flex justify-center ">
                <FaApple />
              </button>
              <button className="bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl text-blue-500 flex justify-center ">
                <FaFacebook />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="inline-block w-full border "></span>
              OR
              <span className="inline-block w-full border "></span>
            </div>
            <form className="space-y-2 py-1">
              <input
                type="email"
                placeholder="Enter your Eamil.."
                className="w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800"
              />
              <input
                type="password"
                placeholder="Enter your password.."
                className="w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800"
              />
              <button
                type="submit"
                className="dark:bg-gray-50 mt-2 bg-base-dark flex gap-1 items-center justify-center p-3 text-center w-full dark:text-black text-white rounded-md font-medium"
              >
                Sign in
                <Lock className="w-4 h-4" />
              </button>
            </form>
            <p className="text-center w-full pb-2">
              Don't have an account yet?{' '}
              <button className="dark:text-white text-black underline font-semibold">
                Sign Up
              </button>
            </p>
          </div>
        </TabsContent>
        <TabsContent value="register">
          <div className="dark:bg-black bg-white  mx-auto max-w-[400px]  dark:text-white text-black p-4 py-8 shadow-md rounded-md space-y-2">
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="img"
                width={80}
                height={80}
                className="w-12"
              />
            </div>
            <div className="text-center py-2">
              <h1 className="font-semibold text-2xl">Register Account</h1>
              <p>Please Enter Your Details to Sign up</p>
            </div>

            <form className="space-y-2 py-1">
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800"
              />
              <div className="flex items-center">
                <div className="dark:bg-gray-50 bg-black h-full p-2 dark:text-black text-white rounded-md">
                  <Phone />
                </div>
                <input
                  type="tel"
                  placeholder="018XXXXXXXX"
                  className="w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800"
                />
              </div>
              <input
                type="email"
                placeholder="Enter your Eamil"
                className="w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800"
              />
              <button
                type="submit"
                className="dark:bg-gray-50 bg-base-dark flex gap-1 items-center justify-center p-3 text-center w-full dark:text-black text-white rounded-md font-medium"
              >
                Sign up
              </button>
            </form>
            <p className="text-center w-full pb-2">
              Have an account?{' '}
              <button className="dark:text-white text-black underline font-semibold">
                Sign in
              </button>
            </p>
            <div className="flex gap-2 items-center">
              <span className="inline-block w-full border "></span>
              OR
              <span className="inline-block w-full border "></span>
            </div>
            <div className="flex gap-2 justify-between w-[90%] mx-auto">
              <button className="bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl flex justify-center ">
                <FcGoogle />
              </button>
              <button className="bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl flex justify-center ">
                <FaApple />
              </button>
              <button className="bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl text-blue-500 flex justify-center ">
                <FaFacebook />
              </button>
            </div>
          </div>
        </TabsContent>
      </TabsProvider>
    </>
  )
}

export default index
