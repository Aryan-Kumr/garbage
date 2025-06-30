// import Leaf from './leaf.png'
// import { Link } from 'react-router-dom'
// // import axios from 'axios'
// import React,{useState} from 'react'

// const Navbar = () => {
//    const [change, setChange] = useState(true);
//    // const [user,setUser] = useState("");
//    // useEffect(() => {
//    //   axios.get('/api/user/')
//    //     .then(response => setUser(response.data))
//    //     .catch(error => console.log(error));
//    // }, []);
//    return (
//       <header className="text-gray-600 body-font bg-green-500">
//          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//             <Link to="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                <img className='h-10' src={Leaf} alt="leaf" />
//                <span className="ml-3 text-2xl">Verdure</span>
//             </Link>
//             <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer ">
//                <Link to="/home" className="mr-5 hover:scale-110 text-gray-900 font-extrabold font-fantasy text-xl scroll-smooth">Home</Link>
//                <Link to="/video" className="mr-5 hover:scale-110 text-gray-900 font-extrabold font-fantasy text-xl">WebCam</Link>
//                <Link to="/image" className="mr-5 hover:scale-110 text-gray-900 font-extrabold font-fantasy text-xl">ImageUpload</Link>
//                <Link to="/predictionlist" className="mr-5 hover:scale-110 text-gray-900 font-extrabold font-fantasy text-xl">Prediction List</Link>
//                <Link to="/footer" className="mr-5 hover:scale-110 text-gray-900 font-extrabold font-fantasy text-xl">Contact Us</Link>
//             </nav>
//             <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={()=>setChange(!change)}>
//                {change ? <Link className="font-extrabold" to="/login">Login</Link> :<Link to="/">Logout</Link>}
//                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//                   <path d="M5 12h14M12 5l7 7-7 7"></path>
//                </svg>
//             </button>
//          </div>
//       </header>
//    )
// }

// export default Navbar;


import Leaf from './leaf.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
   const [change, setChange] = useState(true);

   return (
      <header className="bg-gradient-to-r from-green-500 to-teal-500 shadow-md">
         <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:px-8">
            {/* Logo + Title */}
            <Link to="/home" className="flex items-center gap-2">
               <img src={Leaf} alt="leaf" className="h-10 w-10" />
               <span className="text-2xl font-bold text-white">Verdure</span>
            </Link>

            {/* Navigation + Button */}
            <div className="flex items-center gap-6 text-white font-medium text-base">
               <Link to="/home" className="hover:text-gray-100 hover:underline transition">Home</Link>
               <Link to="/video" className="hover:text-gray-100 hover:underline transition">WebCam</Link>
               <Link to="/image" className="hover:text-gray-100 hover:underline transition">Image Upload</Link>
               <Link to="/predictionlist" className="hover:text-gray-100 hover:underline transition">Prediction List</Link>
               <Link to="/footer" className="hover:text-gray-100 hover:underline transition">Contact Us</Link>

               <button
                  onClick={() => setChange(!change)}
                  className="flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 px-4 py-1.5 rounded-md transition font-semibold"
               >
                  <Link to={change ? "/login" : "/"}>{change ? 'Login' : 'Logout'}</Link>
                  <svg
                     className="w-4 h-4"
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     viewBox="0 0 24 24"
                  >
                     <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
               </button>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
