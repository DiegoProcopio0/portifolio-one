export function Header() {
    return (
        <header className="w-full text-center bg-blue-700">
            <h2 className="sr-only">
                Header
            </h2>
            <ul 
                className="flex justify-center gap-4 items-center py-8 text-cyan-50/75 decoration-current"
            >
                <li className="hover:text-green-500 transition-colors text-xs sm:text-base">
                    <a href="/"          
                    >
                        HOME
                    </a>
                </li>
                <li className="hover:text-green-500 transition-colors text-xs sm:text-base">
                    <a href="#entre-em-contato">
                        ENTRE EM CONTATO
                    </a>
                </li>
                <li className="hover:text-green-500 transition-colors text-xs sm:text-base  ">
                    <a href="#meus-projetos">
                        MEUS PROJETOS
                    </a>
                </li>
            </ul>
        </header>
    )
}
