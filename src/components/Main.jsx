import { MyProjects } from "./MyProjects";
import { Technologies } from "./Technologies";

export function Main() {
    return (
        <main className="h-full max-w-4xl  my-5 mx-auto sm:px-9">
            <header>
                <h1 className="text-green-400 mb-4 text-center text-2xl font-bold  sm:text-left">
                    Diego Procopio
                </h1>
            </header>
            <div className="flex justify-center flex-col items-center sm:flex-row sm:justify-between">
                <div className="w-80 bg-gradient-to-r from-blue-700 to-blue-900 h-auto p-4 rounded sm:w-96">
                    <span className="text-blue-400">
                        about
                    </span>
                    <span className="mx-2">
                        Diego
                    </span>
                    <span>
                        {"{"}
                    </span>
                    <div className="ml-9 my-2">
                        <span className="text-blue-400 mr-2">
                            Occupation: 
                        </span>
                        <span>
                            Dev. Front-end,
                        </span>
                    </div>
                    <span>
                        {"}"}
                    </span>
                </div>
                <img src="/src/assets/hand-coding.png" className="w-48 my-5 sm:w-40" alt="hand-coding" />
            </div>
            <div className="w-80 bg-gradient-to-r from-blue-700 to-blue-900 h-auto p-4 rounded mx-auto flex flex-col items-center justify-center sm:w-96 mb-10">
               <h2 className="text-center text-lg text-blue-400 font-bold ">
                  Contact
               </h2> 
               <div className="flex items-center gap-3">
                <a 
                    href="https://github.com/DiegoProcopio0/"
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank">
                    <img 
                        src="./src/assets/Github.svg" 
                        alt="logo github" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/diego-proc%C3%B3pio-32a6b0206/" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/linkedin.svg" 
                        alt="logo linkedin" />
                </a>
                    <a href="mailto:digprocopio98@gmail.com" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/Mail.svg" 
                        alt=" logo email" />
                </a>    
                <a 
                    href="https://www.instagram.com/diegoxyz__/" 
                    className="hover:overflow-hidden hover:scale-125 transition-all" 
                    target="_blank"   >
                    <img 
                        src="./src/assets/Instagram.svg" 
                        alt="logo instagram" />
                </a>
               </div>
            </div>
            <Technologies />

            <MyProjects />
        </main>
    )
}