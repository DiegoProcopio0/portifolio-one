import Css3 from '/src/assets/css3.svg'
import Html from '/src/assets/html.svg'
import Javascript from '/src/assets/javascript.svg'
import React from '/src/assets/react.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 1200 });

export function Technologies() {
    return (
        <div className="h-auto flex flex-col gap-4 p-4 sm:p-0 sm:max-w-lg">
            <h2 className="text-blue-400 text-center text-2xl font-bold sm:text-left"
                data-aos="slide-up"
            >
                #Conhecimentos
            </h2>
            <div className="flex items-top justify-center gap-3 mx-auto p-4 max-w-xl"
                data-aos="flip-up"
            >
                <a 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank">
                    <img 
                        src={Css3}
                        alt="logo do Css" />
                </a>
                <a 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/html" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <img 
                        src={Html}
                        alt="logo do html" />
                </a>
                <a 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <img 
                        src={Javascript}
                        alt=" logo do JavaScript" />
                </a>    
                <a 
                    href="https://pt-br.reactjs.org/" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <img 
                        src={React}
                        alt="logo do React" />
                </a>
               </div>
        </div>
    )
}