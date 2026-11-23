import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
// import { useState } from 'react'

const BannerHome = () => {

    const bannerData = useSelector(state => state.movieoData.bannerData)
    const imageURL = useSelector(state => state.movieoData.imageURL)
    const [currentImage,setCurrentImage] = useState(0)


    const handleNext = ()=>{
        if(currentImage < bannerData.length-1){
            setCurrentImage(preve => preve+1)
        }
    }
    const handlePrevious = ()=>{
        if(currentImage > 0){ 
            setCurrentImage(preve => preve-1)
        }
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(currentImage < bannerData.length-1){
               handleNext()
            }else{
                setCurrentImage(0)
            }
        },4000)
        return()=>clearInterval(interval)
    },[bannerData,imageURL,currentImage])

  return (
    <section className='w-full h-full'>
        <div className='flex min-h-full max-h-[95vh] overflow-hidden '>
            {
                bannerData.map((data,index)=>{
                    return (
                       <div key={data.id+"bannerData"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all'style={{transform : `translateX(-${currentImage*100}%)`}}>
                            <div>
                                <img
                                    src={imageURL+data.backdrop_path}
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <div className='absolute top-0 items-center justify-between hidden w-full h-full px-4 group-hover:lg:flex'> 
                                <button onClick ={handlePrevious} className='z-10 p-1 text-xl text-black bg-white rounded-full'>
                                <FaAngleLeft/>
                                </button>
                                <button onClick ={handleNext} className='z-10 p-1 text-xl text-black bg-white rounded-full'>
                                <FaAngleRight/>
                                </button>
                            </div>
                            <div className='absolute top-0 w-full h-full hover:bg-gradient-to-t from-neutral-900 to-transparent'>
                            </div>
                            <div className='container absolute bottom-0 max-w-md px-4 mx-auto lg:ml-8'>
                                <h2 className='text-2xl font-bold text-white lg:text-4xl'>{data?.title || data?.name}</h2>
                                <p className='my-1 text-ellipsis line-clamp-3'>{data.overview}</p>
                                <div className='flex gap-6'>
                                <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
                                <span>  |  </span>
                                <p>View : {Number(data.popularity).toFixed(0)}</p>
                            </div>
                            <button className='px-4 py-2 mt-3 mb-4 font-bold text-black transition-all bg-white rounded shadow-md hover:bg-gradient-to-l from-red-500 to-orange-500'>
                                Play now
                            </button>
                            </div>
                           
                       </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default BannerHome