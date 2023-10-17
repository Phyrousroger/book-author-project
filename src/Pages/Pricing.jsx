import React from 'react'
import pricing from "../json/pricing.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/free-mode";

import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from 'swiper';

const Pricing = () => {
  return (
    <>
    <div className='container mx-auto'>
      <div className="flex justify-center">
        <div className=" text-center">
          <h1 className=" text-lg font-semibold tracking-widest font-poppins text-[#c27b7f]">
            {pricing.header}
          </h1>
          <h1 className="text-4xl font-philosopher">{pricing.title}</h1>
        </div>
      </div>

      {/* <Swiper
        modules={[Pagination,Autoplay,Navigation,A11y]}
        pagination={{clickable:true}}
        slidesPerView={3}
        autoplay
        breakpoints={{
          768:{
            slidesPerView:3,
            spaceBetween:30,
          },
          1024:{
            slidesPerView:4,
            spaceBetween:30
          }
          
        }}
      >
      
        
          
        {
            pricing.chapterlist.map((price)=>(
              <SwiperSlide key={price.id} >
                
                  {/* <a href={price.img} className="glightbox2" data-glightbox={`description: .custom-desc${price.id};descPosition: right;`} 
                  > */}
                {/* <img src={price.img} alt=""/> */}
                {/* </a> */}
                
              {/* </SwiperSlide> */}
            {/* ))
        }
        
        </Swiper> */} 
        <Swiper
        
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay
        breakpoints={{
          768:{
            slidesPerView:3,
            spaceBetween:30,
          },
          1024:{
            slidesPerView:4,
            spaceBetween:30
          }
          
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        {
            pricing.chapterlist.map((price)=>(
            <SwiperSlide>
              <a href={price.img} className="glightbox2" data-glightbox={`description: .custom-desc${price.id};descPosition: right;`} >
                <img src={price.img} alt="" />
                </a>
            </SwiperSlide>
                
                ))
            
        }
        
        
      </Swiper>


    </div>
    

    </>
  )
}

export default Pricing
