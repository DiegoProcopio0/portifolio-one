import { ContactUs } from "./ContactUs";
import { MyProjects } from "./MyProjects";
import { Technologies } from "./Technologies";

import Github from '/src/assets/github.svg'
import Linkedin from '/src/assets/linkedin.svg'
import Mail from '/src/assets/mail.svg'


import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({ duration: 1200 });

export function Main() {

    return (
        <main className="h-full max-w-4xl  my-5 mx-auto sm:px-9">
            <header>
                <h1 className="text-green-400 mb-4 text-center text-2xl font-bold  sm:text-left"
                    data-aos="fade-up"
                >
                    Diego Procopio
                </h1>
            </header>
            <div className="flex justify-center flex-col items-center sm:flex-row sm:justify-between"
            >
                <div className="w-80 bg-gradient-to-r from-blue-700 to-blue-900 h-auto p-4 rounded sm:w-96"
                    data-aos="fade-right"
                >
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
                <img 
                    src="https://i.ibb.co/f8cFQrF/hand-coding.png" 
                    className="w-48 my-5 sm:w-40" 
                    alt="hand-coding" 
                    data-aos="fade-left"
                />
            </div>
            <div 
                className="w-80 bg-gradient-to-r from-blue-700 to-blue-900 h-auto p-4 rounded mx-auto flex flex-col items-center justify-center sm:w-96 mb-10"
                data-aos="fade-down"
            >
                <h2 className="text-center text-lg text-blue-400 font-bold ">
                    Contact
                </h2>
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/DiegoProcopio0/"
                        className="hover:overflow-hidden hover:scale-125 transition-all"
                        target="_blank">
                        <img
                            src={Github}
                            alt="logo github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/diego-proc%C3%B3pio-32a6b0206/"
                        className="hover:overflow-hidden hover:scale-125 transition-all"
                        target="_blank"   >
                        <img
                            src={Linkedin}
                            alt="logo linkedin" />
                    </a>
                    <a href="mailto:digprocopio98@gmail.com"
                        className="hover:overflow-hidden hover:scale-125 transition-all"
                        target="_blank"   >
                        <img
                            src={Mail}
                            alt=" logo email" />
                    </a>
                    {/* <a
                        href="https://www.instagram.com/diegoxyz__/"
                        className="hover:overflow-hidden hover:scale-125 transition-all"
                        target="_blank"   >
                        <img
                            src={Instagram}
                            alt="logo instagram" />
                    </a> */}
                </div>
            </div>
            <Technologies />

            <MyProjects />

            <ContactUs />
        </main>
    )
}
