import { LinkedinLogo, At } from "phosphor-react";

const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

export function Footer() {
    return (
       <footer className="flex justify-between items-center p-4 w-full bg-gray-900 border-t-2 border-t-gray-700 py-5 bottom-0 inherit">
            <h2 className="sr-only">
                Footer
            </h2>
            <div className="flex flex-col gap-2">
                <button 
                    className="text-green-400 hover:text-green-200 "
                    onClick={scrollToTop}
                >
                    VOLTAR AO TOPO
                </button>
            </div>
            <div className="flex gap-2 sm:flex-row">
                <a 
                    href="https://www.linkedin.com/in/diego-procopio/"
                >
                    <LinkedinLogo size={40} color="#ffffff" />
                </a>
                <a 
                    href="mailto:diegprocopio98@gmail.com"
                >
                    <At size={40} color="#ffffff" />
                </a>
            </div>
       </footer>
    )
}   