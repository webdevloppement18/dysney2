import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"
import { useEffect, useRef, useState } from 'react'
import CallApi from '../Service/CallApi'

const IMAGE_BASE_URL= "http://image.tmdb.org/t/p/original"
const widthslider = window.innerWidth


export default function Slider() {

    const [movieList, setMovieList] = useState([])

    const ImageSLiderRef = useRef()


    useEffect(() =>{
     getMovies()
    }, [])

    const getMovies = () => {
        CallApi.getVideos.then(resp => {
          setMovieList(resp.data.results)
        })
    }

    const SlideRight = (el)=>{
        el.scrollLeft += widthslider -110
    }
    const SlideLeft = (el)=>{
        el.scrollLeft -= widthslider -110
    }
 


  return (
    <>
     <div className="relative z-[60]">
       <IoIosArrowBack onClick={() => SlideLeft(ImageSLiderRef.current)} className="text-[white] hidden md:block text-[25px] absolute mx-8 mt-[250px] cursor-pointer z-50" />
       <IoIosArrowForward  onClick={() => SlideRight(ImageSLiderRef.current)}className="text-[white] hidden md:block text-[25px] absolute mx-8 mt-[250px] cursor-pointer z-50 right-0" />
        <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll smooth" ref={ImageSLiderRef}>
          {movieList.map((item, index) =>(
            <div key={index} className="relative min-w-full md:h-[500px] mr-5 rounded-md hover:border-[4px] border-gray-200 cursor-pointer transition-all">
                <img  className="w-full h-full object-cover object-left-top "src={`${IMAGE_BASE_URL}${item.backdrop_path}`} alt=" images de films"/>
                <h2 className="font-semibold text-white text-4xl absolute bottom-[2rem] left-[2rem]">
                    {item.name ? item.name : item.title}
                </h2>
                </div>
          ))}

        </div>
     </div>
            
    </>
  )
}
