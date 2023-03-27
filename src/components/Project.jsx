export function Project({linkProject, linkImage, title, aboutProject, technology,  technology1, technology2}) {
    return (
        <>
        <a 
            target="_blank"
            href={linkProject}
            data-aos="fade-up"
        >
        <div className=" p-4 flex flex-col justify-center rounded mb-3 sm:flex-row ">
            <img 
                className=" max-w-80 min-h-[200px] w-auto mx-auto sm:mx-0 bg-auto sm:w-1/2"
                src={linkImage}
                alt="Image do Projeto" />
            <div className=" max-w-80 w-auto bg-blue-700 p-4 mx-auto sm:mx-0 sm:mb-0 sm:w-1/2 hover:bg-slate-800 transition-all ease-in duration-300">
                <div className="mb-2">     
                    <h3 className="text-blue-400 my-2 text-center sm:text-left">
                        <strong>
                             {title}  
                        </strong>
                    </h3>
                    <p className="text-center sm:text-left"> 
                        {aboutProject}
                    </p>
                </div>
                <h4 className="text-blue-400 my-2 font-medium text-center sm:text-left">
                    <strong>
                        Tecnologias
                    </strong>
                </h4>
                <div className="flex gap-4 my-2 items-center justify-center sm:justify-start sm:justify-items-start">
                    <span>
                        {technology}
                    </span>
                    <span>
                        {technology1}
                    </span>
                    <span>
                       {technology2}
                    </span>
                </div>
            </div>
        </div>
        </a>
        </>
    )
}