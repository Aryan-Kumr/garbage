import React from 'react'
import Leaf from './leaf.png'
const Footer = () => {
  return (
    <footer class="text-gray-600 body-font bg-gray-200">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className='h-10' src={Leaf} />
            <span class="ml-3 text-xl">Verdure</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">Send waste at its correct place!</p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Metal Waste</a>
              </li>
              <li>
                <a href="https://twitter.com" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Biomedical Waste</a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Plastic Waste</a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Radioactive waste</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Us</h2>
            <nav class="list-none mb-10">
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Why choose us</a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Disclaimer</a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Terms and conditions</a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Sitemap</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
            <nav class="list-none mb-10">
              <li>
                <a href="https://wastemission.com/blog/what-types-of-metal-can-be-recycled/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Metal Waste</a>
              </li>
              <li>
                <a href="https://medium.com/@mike_38047/biomedical-waste-management-in-india-its-time-for-an-update-b2387b509854" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Biomedical Waste</a>
              </li>
              <li>
                <a href="https://medium.com/@soniannasution01/plastic-pollution-a-wake-up-call-to-protect-our-environment-ba0580f0e8b9" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Plastic Waste</a>
              </li>
              <li>
                <a href="https://medium.com/prime-movers-lab/exploring-nuclear-safety-and-waste-251314bd4d66" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Radioactive waste</a>
              </li>
            </nav>          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Us</h2>
            <nav class="list-none mb-10">
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">Bangalore</a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800"> Karnataka</a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">0123456789</a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">abcdef@gmail.com</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-200">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">

          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5  0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/" rel="noopener noreferrer" class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/" rel="noopener noreferrer" class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="https://twitter.com/" rel="noopener noreferrer" class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>


  )
}

export default Footer;