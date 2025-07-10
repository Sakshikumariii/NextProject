"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];


export default  function Slider() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const router = useRouter();
   const handleClick = () => {
      router.push('/orders');
   }

   useEffect(()=>{
      const interval=setInterval(()=>
         setCurrentSlide((prev)=>(prev===data.length-1?0:prev+1)),
         2000
      )
      return ()=>clearInterval(interval);
   },[])
  return (
   <div className='flex h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex-col lg:flex-row bg-fuchsia-50'>

  
  <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
    <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
      {data[currentSlide].title}
    </h1>
    <button className='bg-red-500 text-white py-4 px-8' onClick={()=>handleClick()}>Order Now</button>
  </div>

  
  <div className='flex-1 relative w-full h-full'>
    <Image
      src={data[currentSlide].image}
      alt='slider image'
      fill
      className='object-cover'
    />
  </div>
</div>

  )
}

