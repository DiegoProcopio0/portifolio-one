export function Project({linkProject, linkImage, title, aboutProject, technology,  technology1, technology2}) {
    return (
        <>
        <a 
            target="_blank"
            href={linkProject}
        >
        <div className="p-4 flex flex-col justify-center rounded mb-3 sm:flex-row ">
            <img 
                className=" w-80 max-w-80 mx-auto sm:w-96 sm:mx-0"
                src={linkImage}
                alt="Image do Projeto" />
            <div className="w-80 max-w-80 bg-blue-700 p-4 mx-auto sm:mx-0 sm:mb-0">
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