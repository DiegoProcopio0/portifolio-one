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
                    href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/technologies/javascript.svg" 
                        alt="logo Javascript" 
                        className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    />
                </a>
                <a 
                    href="https://www.typescriptlang.org/" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/technologies/typescript.svg" 
                        alt="logo typescript" 
                        className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    />
                </a>
                <a 
                    href="https://pt-br.reactjs.org/" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/technologies/react.svg" 
                        alt="logo react" 
                        className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    />
                </a>
                <a 
                    href="https://nextjs.org/" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/technologies/nextjs.svg" 
                        alt="logo nextjs" 
                        className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    />
                </a>
                <a 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/html" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/technologies/html5.svg" 
                        alt="logo html5" 
                        className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    />
                </a>
                <a 
                    href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/technologies/css3.svg" 
                        alt="logo css3" 
                        className="hover:overflow-hidden hover:scale-125 ease-in duration-300  transition-all w-16" 
                    />
                </a>
               
               </div>
        </div>
    )
}