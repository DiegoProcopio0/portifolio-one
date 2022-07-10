import Css from './Css'
import Html from './Html'
import Javascript from './Javascript'
import React from './ReactLogo'


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
                    href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank">
                    <Css />
                </a>
                <a 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/html" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <Html />
                </a>
                <a 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <Javascript />
                </a>    
                <a 
                    href="https://pt-br.reactjs.org/" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <React />
                </a>
               </div>
        </div>
    )
}