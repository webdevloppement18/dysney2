import disneyLogo from '../assets/image/disney.png'
import marvelLogo from '../assets/image/marvel.png'
import nationalGLogo from '../assets/image/nationalG.png'
import pixarLogo from '../assets/image/pixar.png'
import starwarsLogo from '../assets/image/starwars.png'
import disneyVideo from '../assets/video/disney.mp4'
import marvelVideo from '../assets/video/marvel.mp4'
import nationalVideo from '../assets/video/national-geographic.mp4'
import pixarVideo from '../assets/video/pixar.mp4'
import starVideo from '../assets/video/star-wars.mp4'

export default function Categorie() {
    const ListCategorie = [

        {id:1, logo: disneyLogo, video: disneyVideo},
        {id:2, logo: marvelLogo, video: marvelVideo},
        {id:3, logo: nationalGLogo, video: nationalVideo},
        {id:4, logo: pixarLogo, video: pixarVideo},
        {id:5, logo: starwarsLogo, video: starVideo},
    ]
  return (
        <div className='flex items-center gap-5 px-5 md:px-16 p-2 overflow-hidden relative'>
            {ListCategorie.map((item)=>(
                 <div key={item.id} className='bg-transparent border-2 border-gray-200 rounded-md cursor-pointer hover:scale-110 transition-all shadow-xl shadow-black'>
                 <video muted loop autoPlay playsInline src={item.video} className='w-full h-full absolute top-0 rounded:md z-0 opacity-0 hover:opacity-50'></video>
                 <img src={item.logo} alt='Logo' className='w-full z-[1]'/>
                 </div>

            ))}

        </div>
  )
}
