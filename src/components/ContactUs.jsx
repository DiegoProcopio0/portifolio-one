import whatsapp from '/src/assets/whatsapp.svg'

export function ContactUs() {
    return (
        <div className="text-center"
            id="entre-em-contato"
            data-aos="fade-up"
        >
            <h2 className="text-blue-400 text-center text-2xl font-bold sm:text-left mt-7">
                #Entre em contato
            </h2>
            <div className="mx-auto max-w-xs">
                <a 
                    href="https://contate.me/diegodev"
                    target="_blank"
                    className="flex items-center justify-center gap-3 bg-blue-700 rounded p-4 lg:w-96 hover:bg-slate-800 transition-all ease-in duration-300"
                >
                    <img src={whatsapp} alt="Logo do Whatsapp" />
                    <span>
                        (19) 971240888
                    </span>
                </a>
            </div>
        </div>
    )
}
