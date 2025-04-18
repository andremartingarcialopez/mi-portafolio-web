import { projects } from "../data/proyectos"

export function Proyectos() {
    return (
        <>
            <div className='text-center h-auto flex flex-col justify-center mx-auto max-w-4xl'>

                <div  >
                    <h2 className='background-title text-shadow titulos'>Mis Proyectos</h2>
                    <h3 className='subtitulos mx-auto max-w-2xl'>Disfruto contribuir al éxito de los demás compartiendo mis conocimientos y habilidades.</h3>
                </div>

                {projects.map(function (project) {
                    return (

                        <div key={project.id} className='flex flex-col justify-center items-center gap-x-5 gap-y-8 w-full'>

                            <div className='flex flex-col md:px-3  md:gap-x-5 justify-center items-center py-4 border-b border-b-gray-400 w-full'>

                                <div className="flex flex-col justify-center items-center w-full">
                                    <h4 className='font-bold text-[1.5rem] p-2 text-white/90'>{project.title}</h4>
                                    <a href={project.url} target="_blank" className="my-2 ">
                                        <img className='glass-object rounded-2xl an w-[20rem] md:w-full hover:animate-pulse' width="100px" height="100px" src={project.img} alt="imagen-proyecto-happyPet-web" />
                                    </a>
                                </div>

                                <div className="w-[20rem] md:w-full mt-5 text-center md:text-left">
                                    <p className='pt-2 text-white/90'>{project.description}</p>
                                    <p className="my-3 text-white">{project.technologiesUse}</p>
                                    <p className='text-[#d6fd49]'>{project.technologie01} <span className="text-white">{project.descrptionTechnologie01}</span></p>
                                    <p className='text-[#38bdf8]'>{project.technologie02} <span className="text-white"> {project.descrptionTechnologie02}</span></p>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
        </>
    )
}
