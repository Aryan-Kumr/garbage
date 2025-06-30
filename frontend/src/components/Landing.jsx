// import React from 'react'
// /*import Image from '../components/nareeta-martin-FoG7PKNYjpM-unsplash.jpg'*/
// import { Link } from 'react-router-dom'

 
// const Landing = () => {
//   return (
//     <div>
//       <div>
//         <section class="mb-20">
          
//           <div class="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
//             <div class="container mx-auto xl:px-32">
//               <div class="grid lg:grid-cols-2 gap-12 items-center">
//                 <div class="mt-12 lg:mt-0">
//                   <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">"Sort Smarter,recycle better - <br /><span class="text-green-600">lets keep our planet greener!"</span></h1>
//                   <Link to="/signup" class="inline-block px-7 py-3 mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">SignUp</Link>
//                   <Link to="/login" class="inline-block px-7 py-3 bg-transparent text-green-600 font-medium text-sm leading-snug uppercase rounded hover:text-green-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Login</Link>
//                 </div>
//                 <div class="mb-12 lg:mb-0">
//                   <img
//                     src={'https://th.bing.com/th/id/OIG1.kdJEaaQ00D_b82UcGE80?w=1024&h=1024&rs=1&pid=ImgDetMain'}
//                     class="w-full rounded-lg shadow-lg"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default Landing;



import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="pt-24 bg-gradient-to-br from-emerald-700 via-green-600 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-32 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl">
              Sort Smarter, Recycle Better <br />
              <span className="text-yellow-300">Let’s keep our planet Greener!</span>
            </h1>
            <p className="text-lg mb-8 text-gray-100 font-light">
              Verdure helps you classify waste effortlessly and promotes smarter recycling habits for a better tomorrow.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/signup"
                className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-md"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition font-semibold"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:mb-0">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="https://th.bing.com/th/id/OIG1.kdJEaaQ00D_b82UcGE80?w=1024&h=1024&rs=1&pid=ImgDetMain"
                alt="Recycling Illustration"
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-3xl z-0" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Landing;
