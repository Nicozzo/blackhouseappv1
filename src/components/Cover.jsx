import React from "react";

import CoverVid from '../assets/video.mp4'

const Cover = () => {
    return (
        <div className="w-full h-[90vh] top-[90px]">
            <video className="object-cover h-full w-full absolute -z-10" 
            src={CoverVid} autoPlay loop muted/>
            <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4">
                <h1>Pedi por aqui las mejores tartas</h1>
                <h1 className="py-2">Rapido y facil</h1>
                <p className="text-xl py-4">Utilizamos los productos de mayor calidad para su elaboracio artesanal</p>
                <div>
                    <button className="m-2">Pedidos</button>
                    <button className="m-2">Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Cover;