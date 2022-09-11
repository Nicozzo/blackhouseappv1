import React from "react";
import menu from "../assets/menuoriginal.JPG"

const Menu = () => {
    return(
        <div className="w-full text-white bg-black">
            <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
            <div className="flex justify-center">
                <div className="flex justify-center w-full">
                <h1 className="px-20">Nuestro Menu</h1>

                <img className="max-w-[300px] py-16 border rounded-2xl " src={menu} alt = "M"></img>

                </div>
                
        
                </div>
            </div>
        </div>
    )
}

export default Menu;