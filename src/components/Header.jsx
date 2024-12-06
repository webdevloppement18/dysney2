import {FaHome, FaPlus, FaSearch, FaStar} from 'react-icons/fa'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {PiTelevisionBold} from 'react-icons/pi'
import {RiMovie2Line} from 'react-icons/ri'
import Logo from '../assets/image/disney-logo.png'
import HeaderItems from './HeaderItems'
import { useState } from 'react'



export default function Header() {

    const [menuOpen, setMenuOpen]= useState (false)


    const handleMenu = ()=>{
        setMenuOpen(!menuOpen)
    }

    const menu = [
        {
            name: 'HOME',
            icon : FaHome,
        },
        {
            name: 'RECHERCHER',
            icon : FaSearch,
        },
        {
            name: 'PLUS',
            icon : FaPlus,
        },
        {
            name: 'FAVORIS',
            icon : FaStar,
        },
        {
            name: 'FILM',
            icon : PiTelevisionBold,
        },
        {
            name: 'SERIES',
            icon : RiMovie2Line,
        },
       
    ]













  return (
    <div  className='flex items-center justify-between p-4'>

        <div className='flex items-center gap-4'>
            <img src={Logo} alt="logo" className='max-w-[80px] object-cover' />
            <div className='hidden md:flex items-center gap-6'>
                {menu.map((item)=>(
                    <HeaderItems key={item.name} name={item.name} Icon={item.icon}/>
                ))}

            </div>
            <div className='flex md:hidden items-center gap-6'>
                {menu.map((item, index)=>index <3 &&(
                    <HeaderItems key={item.name} name={item.name} Icon={item.icon}/>
                ))}

            </div>
            <div className='relative md:hidden' onClick={handleMenu}>
                <HeaderItems name={""} Icon={BsThreeDotsVertical}/>
                {menuOpen ? <div className='absolute mt-3 z-index-[100] bg-[#060a12] border border-gray-700 px-6 py-3 flex flex-col gap-2 rouded-md'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItems key={item.name} name={item.name} Icon={item.icon}/>
                    ))}
                    </div> : null
                }    
                    
            </div>
        </div>
        <img className='w-10 h-10 rouded-full cursor-pointer ' src='https://media.istockphoto.com/id/1919265357/fr/photo/portrait-en-gros-plan-dun-homme-daffaires-confiant-debout-dans-son-bureau.jpg?s=2048x2048&w=is&k=20&c=Cg1AVHJ3bSWt4TFbCKDl88yZ1m8w91vS1oYBtcDjeck=' alt='phot de profil' />
    </div>        
  )
}
