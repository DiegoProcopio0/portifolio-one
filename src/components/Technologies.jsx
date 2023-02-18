import Css from "./technologies/Css"
import Html from "./technologies/Html"
import Javascript from "./technologies/Javascript"
import Typescript from "./technologies/Typescript"
import Nextjs from "./technologies/Nextjs"
import Reactjs from "./technologies/Reactjs"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 1200 });

export function Technologies() {
    return (
        <div className="h-auto flex flex-col gap-4 p-4 sm:p-0">
            <h2 className="text-blue-400 text-center text-2xl font-bold sm:text-left"
                data-aos="slide-up"
            >
                #Conhecimentos
            </h2>
            <div className="flex flex-wrap items-top justify-center gap-3 mx-auto p-4 w-full "
                data-aos="flip-up"
            >
                <a 
                    className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" 
                    target="_blank"   >
                    <Javascript />
                </a>
                <a 
                    className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" 
                    target="_blank"   >
                    <Typescript />
                </a>
                <a 
                    className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" 
                    target="_blank"   >
                    <Reactjs />
                </a>
                <a 
                    className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" 
                    target="_blank"   >
                    <Nextjs />
                </a>
                <a 
                    className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" 
                    target="_blank"   >
                    <Html />
                </a>
                <a 
                    className="hover:overflow-hidden hover:scale-125 ease-in duration-300 transition-all w-16" 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" 
                    target="_blank">
                    <Css />
                </a>
               
               </div>
        </div>
    )
}