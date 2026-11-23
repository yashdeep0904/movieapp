import { AiFillHome } from "react-icons/ai";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export const navigation = [
    { 
      label : "Tv Shows",
      href : 'tv',
      icon : <PiTelevisionSimpleFill/>
    },
    {
      label :"Movies",
      href : 'movies',
      icon: <MdLocalMovies/>
      
    }
  ]
  
  export const mobileNavigation = [
    {
      label : "Home",
      href : "/",
      icon: <AiFillHome />
    
    },
    ...navigation,
    {
      label : "Search",
      href : "/search",
      icon : <IoIosSearch />
    }
  ]