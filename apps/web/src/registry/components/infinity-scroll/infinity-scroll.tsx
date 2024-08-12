// https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
import { AppleIcon, SparkleIcon } from 'lucide-react'
import React from 'react'
import {
  FaAirbnb,
  FaApple,
  FaBitcoin,
  FaFacebook,
  FaSass,
  FaSymfony,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6'

function index() {
  return (
    <>
      <div className="w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaAirbnb />
          </li>
          <li>
            <FaApple />
          </li>
          <li>
            <FaBitcoin />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <FaSymfony />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaAirbnb />
          </li>
          <li>
            <AppleIcon />
          </li>
          <li>
            <FaBitcoin />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <FaSymfony />
          </li>
        </ul>
      </div>
    </>
  )
}

export default index
