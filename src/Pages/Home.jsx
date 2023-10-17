import React from 'react';
import Navbar from "../Component/Navbar.jsx";
import hero from "../../images/hero.png"
const Home = () => {
    // const {image}=hero;
    return (

          <div className="bg-pink-100 py-5">
              <Navbar/>
                  <div className="md:grid grid-cols-2 grid-flow-col mt-20 container mx-auto">
                      <div className="my-auto md:p-0 p-5">

                          <p className="md:text-lg text-base text-gray-500 text-pink-400 uppercase tracking-widest font-semibold font-poppins">let's make the best investment</p>
                          <h1 className="md:text-5xl text-4xl uppercase font-bold tracking-widest leading-tight text-teal-900 font-philosopher">There is no friend as loyal as a book </h1>
                          <p className="md:text-lg text-base my-10 leading-relaxed font-poppins text-gray-500 font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cum debitis dolorum enim eos est iste iure nostrum quam quia!</p>

                          <div className="rounded ">
                          <label htmlFor="" className="">
                              <input type="text" className="w-56 rounded-l select-none text-gray-500 px-5 py-3 outline-none bg-white" placeholder="your email"/>
                              <button className=" bg-red-400 text-white relative px-5 z-10 py-2 hover:text-white  
                              before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:bg-purple-500 before:transform before:transition before:scale-x-0 before:duration-300
                              hover:before:transform select-none cursor-pointer hover:before:scale-x-100 before:transition-transform;
                              ">
                                Submit
                                 </button>
                          </label>
                          </div>
                      </div>
                      <div className="md:p-0 p-5">
                          <img src={hero} alt="" className="md:ml-auto w-96 m-auto"/>
                      </div>
                  </div>

          </div>

    );
};

export default Home;