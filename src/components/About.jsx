import React from "react";
import {MdFoodBank} from 'react-icons/md'
import tarta from '../assets/tartaprueba.JPG'
import tarta2 from '../assets/tarta2.JPG'
import tarta3 from '../assets/tarta3.JPG'
import tarta4 from '../assets/tarta4.JPG'

const About = () => {
    return(
        <div className="w-full bg-black text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 py-16 ">
            <div>
                <h1 className="py-4">Algunas de nuestras opciones</h1>
                <p className="py-4 text-xl">
                    Nuestros productos son elaborados artesanalmente por un cocinero profesional,
                    brindando una solucion pratica y saludable para todos los dias de la semana
                </p>
                {/*Card Container*/}
                <div className="grid sm:grid-cols-4 gap-4 justify-center">

                    {/*Card*/}
                        <div>
                            <div>
                            <MdFoodBank className="rounded-full" size={40}/>
                            </div>
                            <img className="justify-center border rounded-2xl h-80 w-90 " src={tarta} alt = "tarta"/>
                        </div>
                        <div>
                            <div>
                            <MdFoodBank className="rounded-full" size={40}/>
                            </div>
                            <img className="justify-center border rounded-2xl h-80 w-90" src={tarta2} alt = "tarta2"/>
                        </div>
                        <div>
                            <div>
                            <MdFoodBank className="rounded-full" size={40}/>
                            </div>
                            <img className="justify-center border rounded-2xl h-80 w-90" src={tarta3} alt = "tarta3"/>
                        </div>
                        <div>
                            <div>
                            <MdFoodBank className="rounded-full" size={40}/>
                            </div>
                            <img className="justify-center border rounded-2xl h-80 w-95" src={tarta4} alt = "tarta4"/>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About;