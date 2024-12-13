// thanks to maximeheckel
import React, { useState } from 'react';
import { Lock, Phone } from 'lucide-react';

import Image from 'next/image';
import { TabsBtn, TabsContent, TabsProvider } from '@/components/core/tab';

function index() {
  return (
    <>
      <TabsProvider defaultValue={'login'} wobbly={false}>
        <div className='flex justify-center mt-2'>
          <div className='flex items-center w-fit dark:bg-[#1a1c20] bg-gray-200 p-1 dark:text-white text-black rounded-md border'>
            <TabsBtn value='login'>
              <span className='relative z-[2] uppercase'>Login</span>
            </TabsBtn>
            <TabsBtn value='register'>
              <span className='relative z-[2] uppercase'>Register</span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value='login'>
          <div className='dark:bg-black bg-white  mx-auto max-w-[400px]  dark:text-white text-black p-4 py-8 shadow-md rounded-md space-y-2'>
            <div className='flex justify-center'>
              <Image
                src='/apple-touch-icon.png'
                alt='img'
                width={80}
                height={80}
                className='w-12'
              />
            </div>
            <div className='text-center py-2'>
              <h1 className='font-semibold text-2xl'>Welcome Back</h1>
              <p>Please Enter Your Details to Sign In</p>
            </div>

            <div className='flex gap-2 justify-between'>
              <button className='bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl flex justify-center '>
                <svg
                  width='84'
                  height='84'
                  viewBox='0 0 84 84'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                >
                  <path
                    d='M82.8559 33.8402H79.4997V33.6673H41.9997V50.334H65.5476C62.1122 60.0361 52.8809 67.0006 41.9997 67.0006C28.1934 67.0006 16.9997 55.8069 16.9997 42.0006C16.9997 28.1944 28.1934 17.0007 41.9997 17.0007C48.3726 17.0007 54.1705 19.4048 58.5851 23.3319L70.3705 11.5465C62.9288 4.61107 52.9747 0.333984 41.9997 0.333984C18.9893 0.333984 0.333008 18.9902 0.333008 42.0006C0.333008 65.0111 18.9893 83.6673 41.9997 83.6673C65.0101 83.6673 83.6663 65.0111 83.6663 42.0006C83.6663 39.2069 83.3788 36.4798 82.8559 33.8402Z'
                    fill='#FFC107'
                  />
                  <path
                    d='M5.1377 22.6069L18.8273 32.6465C22.5314 23.4757 31.5023 17.0007 42.0002 17.0007C48.3731 17.0007 54.171 19.4048 58.5856 23.3319L70.371 11.5465C62.9294 4.61107 52.9752 0.333984 42.0002 0.333984C25.996 0.333984 12.1169 9.3694 5.1377 22.6069Z'
                    fill='#FF3D00'
                  />
                  <path
                    d='M42 83.6661C52.7625 83.6661 62.5417 79.5474 69.9354 72.8495L57.0396 61.937C52.8562 65.1057 47.6562 66.9995 42 66.9995C31.1625 66.9995 21.9604 60.0891 18.4937 50.4453L4.90625 60.9141C11.8021 74.4078 25.8063 83.6661 42 83.6661Z'
                    fill='#4CAF50'
                  />
                  <path
                    d='M82.8562 33.8389H79.5V33.666H42V50.3327H65.5479C63.8979 54.9931 60.9 59.0118 57.0333 61.9389L57.0396 61.9348L69.9354 72.8473C69.0229 73.6764 83.6667 62.8327 83.6667 41.9993C83.6667 39.2056 83.3792 36.4785 82.8562 33.8389Z'
                    fill='#1976D2'
                  />
                </svg>
              </button>
              <button className='bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl flex justify-center '>
                <svg
                  width='123'
                  height='143'
                  viewBox='0 0 123 143'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M83.4565 22.829C88.6693 16.7873 92.1831 8.37251 91.2215 0C83.7095 0.286 74.6213 4.7987 69.2349 10.8332C64.398 16.1885 60.1757 24.7454 61.3108 32.9535C69.6904 33.5755 78.2436 28.8778 83.4565 22.829ZM102.247 75.9687C102.457 97.6115 122.058 104.811 122.275 104.904C122.116 105.412 119.144 115.162 111.95 125.244C105.725 133.952 99.2686 142.626 89.0959 142.811C79.1039 142.99 75.8866 137.135 64.4559 137.135C53.0324 137.135 49.4607 142.625 40.0038 142.99C30.1854 143.34 22.7023 133.568 16.4339 124.888C3.60774 107.134 -6.18897 74.7181 6.96972 52.8395C13.5057 41.9788 25.1822 35.0907 37.8637 34.9191C47.5014 34.7403 56.604 41.1334 62.4965 41.1334C68.389 41.1334 79.451 33.4473 91.0769 34.577C95.9428 34.77 109.608 36.4568 118.378 48.7617C117.669 49.1836 102.074 57.8795 102.247 75.9687Z'
                    fill='white'
                  />
                </svg>
              </button>
              <button className='bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl text-blue-500 flex justify-center '>
                <svg
                  width='80'
                  height='80'
                  viewBox='0 0 80 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                >
                  <path
                    d='M40.0003 0.416016C29.5022 0.416016 19.434 4.58639 12.0107 12.0097C4.58737 19.433 0.416992 29.5012 0.416992 39.9993C0.416992 50.4975 4.58737 60.5657 12.0107 67.989C19.434 75.4123 29.5022 79.5827 40.0003 79.5827C50.4985 79.5827 60.5667 75.4123 67.99 67.989C75.4133 60.5657 79.5837 50.4975 79.5837 39.9993C79.5837 29.5012 75.4133 19.433 67.99 12.0097C60.5667 4.58639 50.4985 0.416016 40.0003 0.416016Z'
                    fill='#039BE5'
                  />
                  <path
                    d='M45.3581 50.4909H55.6018L57.2102 40.0846H45.356V34.3971C45.356 30.0742 46.7685 26.2409 50.8122 26.2409H57.3101V17.1596C56.1685 17.0055 53.7539 16.668 49.1914 16.668C39.6643 16.668 34.0789 21.6992 34.0789 33.1617V40.0846H24.2852V50.4909H34.0789V79.093C36.0185 79.3846 37.9831 79.5826 39.9997 79.5826C41.8227 79.5826 43.6018 79.4159 45.3581 79.1784V50.4909Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='inline-block w-full border '></span>
              OR
              <span className='inline-block w-full border '></span>
            </div>
            <form className='space-y-2 py-1'>
              <input
                type='email'
                placeholder='Enter your Eamil..'
                className='w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800'
              />
              <input
                type='password'
                placeholder='Enter your password..'
                className='w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800'
              />
              <button
                type='submit'
                className='dark:bg-gray-50 mt-2 bg-base-dark flex gap-1 items-center justify-center p-3 text-center w-full dark:text-black text-white rounded-md font-medium'
              >
                Sign in
                <Lock className='w-4 h-4' />
              </button>
            </form>
            <p className='text-center w-full pb-2'>
              Don't have an account yet?{' '}
              <button className='dark:text-white text-black underline font-semibold'>
                Sign Up
              </button>
            </p>
          </div>
        </TabsContent>
        <TabsContent value='register'>
          <div className='dark:bg-black bg-white  mx-auto max-w-[400px]  dark:text-white text-black p-4 py-8 shadow-md rounded-md space-y-2'>
            <div className='flex justify-center'>
              <Image
                src='/apple-touch-icon.png'
                alt='img'
                width={80}
                height={80}
                className='w-12'
              />
            </div>
            <div className='text-center py-2'>
              <h1 className='font-semibold text-2xl'>Register Account</h1>
              <p>Please Enter Your Details to Sign up</p>
            </div>

            <form className='space-y-2 py-1'>
              <input
                type='text'
                placeholder='Enter your username'
                className='w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800'
              />
              <div className='flex items-center'>
                <div className='dark:bg-gray-50 bg-black h-full p-2 dark:text-black text-white rounded-md'>
                  <Phone />
                </div>
                <input
                  type='tel'
                  placeholder='018XXXXXXXX'
                  className='w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800'
                />
              </div>
              <input
                type='email'
                placeholder='Enter your Eamil'
                className='w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800'
              />
              <input
                type='password'
                placeholder='Enter your password'
                className='w-full p-2 border focus:outline-none rounded-md dark:bg-gray-800'
              />
              <button
                type='submit'
                className='dark:bg-gray-50 bg-base-dark flex gap-1 items-center justify-center p-3 text-center w-full dark:text-black text-white rounded-md font-medium'
              >
                Sign up
              </button>
            </form>
            <p className='text-center w-full pb-2'>
              Have an account?{' '}
              <button className='dark:text-white text-black underline font-semibold'>
                Sign in
              </button>
            </p>
            <div className='flex gap-2 items-center'>
              <span className='inline-block w-full border '></span>
              OR
              <span className='inline-block w-full border '></span>
            </div>
            <div className='flex gap-2 justify-between w-[90%] mx-auto'>
              <button className='bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl flex justify-center '>
                <svg
                  width='84'
                  height='84'
                  viewBox='0 0 84 84'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                >
                  <path
                    d='M82.8559 33.8402H79.4997V33.6673H41.9997V50.334H65.5476C62.1122 60.0361 52.8809 67.0006 41.9997 67.0006C28.1934 67.0006 16.9997 55.8069 16.9997 42.0006C16.9997 28.1944 28.1934 17.0007 41.9997 17.0007C48.3726 17.0007 54.1705 19.4048 58.5851 23.3319L70.3705 11.5465C62.9288 4.61107 52.9747 0.333984 41.9997 0.333984C18.9893 0.333984 0.333008 18.9902 0.333008 42.0006C0.333008 65.0111 18.9893 83.6673 41.9997 83.6673C65.0101 83.6673 83.6663 65.0111 83.6663 42.0006C83.6663 39.2069 83.3788 36.4798 82.8559 33.8402Z'
                    fill='#FFC107'
                  />
                  <path
                    d='M5.1377 22.6069L18.8273 32.6465C22.5314 23.4757 31.5023 17.0007 42.0002 17.0007C48.3731 17.0007 54.171 19.4048 58.5856 23.3319L70.371 11.5465C62.9294 4.61107 52.9752 0.333984 42.0002 0.333984C25.996 0.333984 12.1169 9.3694 5.1377 22.6069Z'
                    fill='#FF3D00'
                  />
                  <path
                    d='M42 83.6661C52.7625 83.6661 62.5417 79.5474 69.9354 72.8495L57.0396 61.937C52.8562 65.1057 47.6562 66.9995 42 66.9995C31.1625 66.9995 21.9604 60.0891 18.4937 50.4453L4.90625 60.9141C11.8021 74.4078 25.8063 83.6661 42 83.6661Z'
                    fill='#4CAF50'
                  />
                  <path
                    d='M82.8562 33.8389H79.5V33.666H42V50.3327H65.5479C63.8979 54.9931 60.9 59.0118 57.0333 61.9389L57.0396 61.9348L69.9354 72.8473C69.0229 73.6764 83.6667 62.8327 83.6667 41.9993C83.6667 39.2056 83.3792 36.4785 82.8562 33.8389Z'
                    fill='#1976D2'
                  />
                </svg>
              </button>
              <button className='bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl flex justify-center '>
                <svg
                  width='123'
                  height='143'
                  viewBox='0 0 123 143'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M83.4565 22.829C88.6693 16.7873 92.1831 8.37251 91.2215 0C83.7095 0.286 74.6213 4.7987 69.2349 10.8332C64.398 16.1885 60.1757 24.7454 61.3108 32.9535C69.6904 33.5755 78.2436 28.8778 83.4565 22.829ZM102.247 75.9687C102.457 97.6115 122.058 104.811 122.275 104.904C122.116 105.412 119.144 115.162 111.95 125.244C105.725 133.952 99.2686 142.626 89.0959 142.811C79.1039 142.99 75.8866 137.135 64.4559 137.135C53.0324 137.135 49.4607 142.625 40.0038 142.99C30.1854 143.34 22.7023 133.568 16.4339 124.888C3.60774 107.134 -6.18897 74.7181 6.96972 52.8395C13.5057 41.9788 25.1822 35.0907 37.8637 34.9191C47.5014 34.7403 56.604 41.1334 62.4965 41.1334C68.389 41.1334 79.451 33.4473 91.0769 34.577C95.9428 34.77 109.608 36.4568 118.378 48.7617C117.669 49.1836 102.074 57.8795 102.247 75.9687Z'
                    fill='white'
                  />
                </svg>
              </button>
              <button className='bg-white border dark:bg-gray-900 w-full p-2 rounded-md text-2xl text-blue-500 flex justify-center '>
                <svg
                  width='80'
                  height='80'
                  viewBox='0 0 80 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                >
                  <path
                    d='M40.0003 0.416016C29.5022 0.416016 19.434 4.58639 12.0107 12.0097C4.58737 19.433 0.416992 29.5012 0.416992 39.9993C0.416992 50.4975 4.58737 60.5657 12.0107 67.989C19.434 75.4123 29.5022 79.5827 40.0003 79.5827C50.4985 79.5827 60.5667 75.4123 67.99 67.989C75.4133 60.5657 79.5837 50.4975 79.5837 39.9993C79.5837 29.5012 75.4133 19.433 67.99 12.0097C60.5667 4.58639 50.4985 0.416016 40.0003 0.416016Z'
                    fill='#039BE5'
                  />
                  <path
                    d='M45.3581 50.4909H55.6018L57.2102 40.0846H45.356V34.3971C45.356 30.0742 46.7685 26.2409 50.8122 26.2409H57.3101V17.1596C56.1685 17.0055 53.7539 16.668 49.1914 16.668C39.6643 16.668 34.0789 21.6992 34.0789 33.1617V40.0846H24.2852V50.4909H34.0789V79.093C36.0185 79.3846 37.9831 79.5826 39.9997 79.5826C41.8227 79.5826 43.6018 79.4159 45.3581 79.1784V50.4909Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>
          </div>
        </TabsContent>
      </TabsProvider>
    </>
  );
}

export default index;
