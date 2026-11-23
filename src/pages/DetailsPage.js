import React from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import { useSelector } from 'react-redux';
import useFetchDetails from '../hooks/useFetchDetails';
import useFetch from '../hooks/useFetch';
import HorizontalScrollCard from '../components/HorizontalScrollCard';

const DetailsPage = () => {
  const params = useParams()
  console.log("params",params);
  const imageURL = useSelector(state => state.movieoData.imageURL)
  const {data} = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const {data :castData} = useFetchDetails(`/${params?.explore}/${params.id}/credits`)
  const {data : similarData} = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const {data : recommendData} = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
 
  console.log("data",data);
  console.log("starcast",castData);
  // const duration = (Number(data?.runtime)/60).toFixed(1).split(".")
  return (
    <div>
      <div className='w-full h-[450px] relative'>
          <div className='w-full h-full'>
          <img
              src = {imageURL + data?.backdrop_path}
              className='w-full h-full object-cover'
          />
          </div>
          <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'>

          </div>
      </div>
      <div className='container mx-auto lg:mx-7 px-3 flex gap-5 mt-2' >
      <div className='-mt-28 relative lg:mx-0 w-fit min-w-60'>
      <img
              src = {imageURL + data?.backdrop_path}
              className='w-80 h-80 object-cover rounded'
          />
      </div>  
      <div className=''>
        <h2 className='text-2xl lg:text-3xl font-bold text-white'>{data?.title || data?.name}</h2>       
        <p className='text-xl '>{data?.tagline}</p>
        <div>
          <div className='text-medium flex items-center my-2 gap-3'>
           <p> Rating : {Number(data?.vote_average).toFixed(1)}+</p>
           <span> | </span>
           <p> View : {Number(data?.vote_count)}</p>
           {/* <p>Duration : {duration[0]}h {duration[1]}m</p> */}
          </div>
          <div>
            <h2 className='text-xl font-bold text-white'>Overview</h2>
            <p>{data?.overview}</p>
            <div className='flex items-center gap-4 mt-1'>
              <p>
                Status : {data?.status}
              </p>
              <span>|</span>
              <p>
                Release Date : {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <p>
                Revenue : {data?.revenue}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
        <HorizontalScrollCard data={similarData} heading={"Similar "+ params?.explore} media_type={params?.explore}/>
        <HorizontalScrollCard data={recommendData} heading={"Recommended "+ params?.explore} media_type={params?.explore}/>
      </div>
    </div>
  )
}

export default DetailsPage