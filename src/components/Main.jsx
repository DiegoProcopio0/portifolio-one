import { GithubLogo, LinkedinLogo, EnvelopeSimple  } from "phosphor-react";

import { ContactUs } from "./ContactUs";
import { MyProjects } from "./MyProjects";
import { Technologies } from "./Technologies";

import Cv from '/src/assets/cv/cv-diegoprocopio.pdf'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { TypeWriter } from "./TypeWriter";
import { Form } from "./Form";

AOS.init({ duration: 1200 });

export function Main() {

    return (
        <main className="h-full max-w-4xl my-5 mx-auto sm:px-9" 
              data-aos="fade-up"
        >
            <header className="text-center sm:text-left font-bold sm:pb-0 pb-6 py-2">
                <h1 className="text-white mb-4 pb-2  text-2xl">
                    <TypeWriter 
                        text="Diego Procopio"
                    />
                </h1>
                <a 
                    href={Cv}
                    className="ease-in duration-300 p-3 bg-green-500 rounded hover:text-green-400 hover:bg-white"
                >
                    DOWNLOAD DO CV
                </a>
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
                        <GithubLogo size={50} color="#1ED760" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/diego-proc%C3%B3pio-32a6b0206/"
                        className="hover:overflow-hidden hover:scale-125 transition-all"
                        target="_blank"   >
                        <LinkedinLogo size={52} color="#1ED760" />
                    </a>
                    <a href="mailto:digprocopio98@gmail.com"
                        className="hover:overflow-hidden hover:scale-125 transition-all"
                        target="_blank"   >
                        <EnvelopeSimple size={60} color="#1ED760" />
                    </a>
                </div>
            </div>
            <Technologies />

            <MyProjects />

            <Form />    

            <ContactUs />
        </main>
    )
}
