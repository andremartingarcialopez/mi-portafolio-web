import { Link, useParams } from "react-router-dom";
import { projects } from "../data/proyectos";
import Footer from "../components/Footer";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";

export default function ProjectDetails() {
    const paramId = useParams();

    const projectParams = projects.find(project => project.id == Number(paramId.id))
    console.log(paramId);

    return (
        <>
            <header className="glass z-100 fixed w-full  p-4">

                <div className="mx-auto max-w-6xl flex justify-between items-center text-center text-white">

                    <div className="flex justify-center items-center">
                        <Link to={"/"} className="">
                            <img src="/img\4.svg" className="md:w-80 w-50" alt="Icono-logo" />

                        </Link>
                    </div>

                    <div className="">

                        <Link to={`/`} className='flex gap-1  justify-center items-center hover:font-semibold'>
                            <ArrowLeftCircleIcon className="w-5" />
                            <p>Atras</p>
                        </Link>

                    </div>



                </div>
            </header>


            <div className="flex h-screen justify-center items-center content ">

                <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-5 md:mx-auto md:max-w-7xl px-2 mt-10 lg:mt-0">

                    <div className="px-2 w-full flex flex-col justify-center items-center h-full space-y-3 ">
                        <h2 className='font-bold text-[1.5rem] p-2 text-white/90'>{projectParams?.title}</h2>
                        <a className="" href={projectParams?.url}>
                            <img className='glass-object rounded-2xl w-[20rem] md:w-full hover:animate-pulse ' src={`${projectParams?.img}`} alt={projectParams?.alt} />
                        </a>
                        <a className="text-white my-5 bg-[#1d3557] hover:bg-[#7b9cca] active:bg-[#1d3557] p-1 w-full rounded-xl text-sm md:text-lg text-center" href={projectParams?.url} target="_self"> Ir al Proyecto</a>
                    </div>

                    <div className="mx-2">

                        <p className='pt-2 text-center md:text-start text-white/90 lg:mt-15'>{projectParams?.description}</p>
                        <p className='pt-2 text-center md:text-start text-white/90 uppercase font-semibold'>{projectParams?.technologiesUse}</p>
                        <p className='pt-2 text-center md:text-start text-[#d6fd49]'>{projectParams?.technologie01}</p>
                        <p className='pt-2 text-center md:text-start text-white/90'>{projectParams?.descrptionTechnologie01}</p>
                        <p className='pt-2 text-center md:text-start text-[#38bdf8]'>{projectParams?.technologie02}</p>
                        <p className='pt-2 text-center md:text-start text-white/90'>{projectParams?.descrptionTechnologie02}</p>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
