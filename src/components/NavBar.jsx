import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return( 
        <div className="w-full h-[90px] bg-black">
            <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
                <div>
                    <h1 className="text-white">BLACKHOUSE</h1>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex text-white items-center">
                        <li>Inicio</li>
                        <li>Sobre Nosotros</li>
                        <li>Menu</li>
                        <li>Contacto</li>
                        <button className="ml-4">Pedidos</button>
                    </ul>
                
                </div>
                {/*Hamburger Menu*/}
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={30} className = "text-white"/> : 
                    <AiOutlineMenu size={30} className = "text-white"/>} 
                    
                    
                </div>
                {/*Mobile Menu*/}
                <div className= {nav ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center" :"absolute left-[-100%]" }>
                    <ul>
                        <li className="text-2xl">Inicio</li>
                        <li className="text-2xl">Sobre Nosotros</li>
                        <li className="text-2xl">Menu</li>
                        <li className="text-2xl">Contacto</li>
                        <button className="m-8 px-8">Pedidos</button>
                    </ul>
                </div>
            </div>
            

        </div>
    )
}

export default NavBar;