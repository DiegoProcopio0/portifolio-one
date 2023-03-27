import { LinkedinLogo, At } from "phosphor-react";


export function Footer() {
    return (
       <footer className="flex justify-between items-center p-4 w-full bg-gray-900 border-t-2 border-t-gray-700 py-5 bottom-0 inherit">
            <h2 className="sr-only">
                Footer
            </h2>
            <div className="flex flex-col gap-2">
                <span>
                    Diego Procopio
                </span>
                <span>
                    &copy; Todos os direitos reservados
                </span>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
                <a 
                    href="https://www.linkedin.com/in/diego-proc%C3%B3pio-32a6b0206/"
                >
                    <LinkedinLogo size={40} color="#ffffff" />
                </a>
                <a 
                    href="mailto:digprocopio98@gmail.com"
                >
                    <At size={40} color="#ffffff" />
                </a>
            </div>
       </footer>
    )
}   