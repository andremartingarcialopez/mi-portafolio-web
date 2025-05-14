import { Link } from "react-router-dom"
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

                        <div key={project.id} className='flex flex-col justify-center items-center px-3 gap-x-5 gap-y-8 w-full'>

                            <div className='flex flex-col md:px-3  md:gap-x-5 justify-center items-center py-4 border-b border-b-gray-400 w-full'>

                                <div className="flex flex-col justify-center items-center w-full">
                                    <h4 className='font-bold text-[1.5rem] p-2 text-white/90'>{project.title}</h4>
                                    <Link to={`/projectDetails/${project.id}`} target="_self" className="my-2 ">
                                        <img className='glass-object rounded-2xl an w-[20rem] md:w-full hover:animate-pulse' width="100px" height="100px" src={project.img} alt="imagen-proyecto-happyPet-web" />
                                    </Link>
                                </div>

                                <a className="text-white my-5 bg-[#1d3557] hover:bg-[#7b9cca] p-1 w-full rounded-xl text-sm md:text-lg" href={project.url}> Ir al Proyecto</a>
                            </div>
                        </div>

                    )
                })}

            </div>
        </>
    )
}
