import React, { useEffect, useState } from 'react'

import logo2 from "../logos/movielogo4.jpg"
import userIcon from "../logos/usericon.jpeg"
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'
import { navigation } from '../contants/navigation';


const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split("?q=?q=[object%20Object]"&&"%20")?.join(" ")
  const [searchInput, setSearchInput] = useState(removeSpace)
  const navigate = useNavigate()
   
  
  useEffect(()=>{
    if(searchInput){
      navigate(`/search?q=${searchInput}`)
    }
     
  },[searchInput])

  const handleSubmit = (e)=> {
    e.preventDefault()
  }

  return (
    <header className='fixed top-0 z-40 w-full h-20 bg-black bg-opacity-50' >
        <div className='container flex items-center mx-auto ml-2 lg:ml-8' >
          <Link to={"/"}> 
            <img
             src = {logo2}
             alt ="logo"
             width = {160}
            
            />         
          </Link>
          <nav className='items-center hidden gap-5 ml-5 lg:flex' >
            {
              navigation.map((nav,index)=>{
                return (
                  <div>
                    <NavLink key={nav.label} to = {nav.href} className={({isActive})=>`hover:text-neutral-100 font-bold ${isActive && "text-neutral-100"}`}>
                      {nav.label}
                    </NavLink>
                  </div>
                )
              })
            }
          </nav>

          <div className='flex items-center gap-5 ml-auto font-bold cursor-pointer ' >
            <form className='flex items-center gap-2 ' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Search here ...'
                className='hidden px-4 py-1 text-black bg-white outline-none lg:block '
                onChange={(e)=>setSearchInput(e.target.value)}
                value = {searchInput}
              />
              <button className='items-start hidden text-2xl text-white lg:flex '  >
              <IoIosSearch/>
              </button>
            </form>
           
            <div className='w-12 h-12 overflow-hidden transition-all rounded-full cursor-pointer active:scale-50 '>
                <img
                src = {userIcon}
                alt = "usericon"
               

                />
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header