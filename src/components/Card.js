import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({data,trending,index,media_type}) => {
  const imageURL = useSelector(state => state.movieoData.imageURL)
  const mediaType = data.media_type ?? media_type
  return (
    <Link to={"/"+mediaType+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all ' >
     {
      data?.poster_path ? (
        <img
        src = {imageURL+data?.poster_path}
       />
      ) :(
        <div className='bg-neutral-600 h-full w-full flex justify-center items-center'>
            No image found
        </div>
      )
     }
    
      <div className='absolute top-0 '>
      {
        trending &&(
          <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/65 overflow-hidden'>
            #{index} Trending
          </div>
        )
      }
      </div>
      <div className='absolute bottom-0 h-14 backdrop-blur-3xl w-full bg-black/40 p-2'>
          <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>
            {data?.tile || data?.name ||data?.original_title}
          </h2>
          <div className='text-sm flex justify-between items-center text-white/70'>
            <p>
              {moment(data.release_date).format("MMMM Do YYYY")}
            </p>
            <p className='px-1 rounded-full text-xs'>
              Rating:{Number(data.vote_average).toFixed(1)}
            </p>
          </div>
      </div>
      
    </Link>
  )
}

export default Card