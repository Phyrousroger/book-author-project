import React from 'react';
import Benefits from './Benefits.jsx';
import Chapter from './Chapter.jsx';
import Home from "./Home.jsx";
import Pricing from './Pricing.jsx';

const MainPages = () => {
    return (
        <>
            <Home/>
            <Benefits/>
            <Chapter/>
            <Pricing/>
        </>
    );
};

export default MainPages;

// import React, { useRef, useState } from "react";
// import pricing from "../json/pricing.json"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// // import "./styles.css";

// // import required modules
// import { FreeMode, Pagination } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//         className="mySwiper"
//       >
//         {
//             pricing.chapterlist.map((price)=>(
//             <SwiperSlide>
//                 <img src={price.img} alt="" />
//             </SwiperSlide>
                
//                 ))
            
//         }
        
        
//       </Swiper>
//     </>
//   );
// }