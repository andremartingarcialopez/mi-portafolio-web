import { CodeBracketIcon } from "@heroicons/react/20/solid"

export default function MisServicios() {
    return (
        <div  className='h-auto w-full'>
            <div>
                <h2 className='background-title text-shadow titulos'>Mis Servicios</h2>
                <h3 className="subtitulos">Un compañero de trabajo el cual se caracteriza por ser perseverante y responsable.</h3>
            </div>

            <div   className='w-full gap-y-4 flex lg:flex-row flex-col justify-center lg:justify-center lg:gap-x-20 items-center pb-20'>

                <img className='w-[25rem]' src="img/yo1.webp" width="100px" height="100px" alt="imagen-servicios" />

                <div className='flex flex-col pt-7 lg:pt-0  justify-center items-center gap-y-[2rem]'>

                    <div className='glass-object-services px-7 w-[20rem] md:w-[40rem] rounded-lg p-2'>
                        <div className='flex flex-row justify-start items-center gap-x-3'>
                            {/* <i className="fa-solid fa-laptop-code skill-title text-5xl"></i> */}
                            <CodeBracketIcon className="skill-title h-25 w-25  text-[#2bc0e4]" />
                            <h3 className='skill-title  text-xl pb-2 font-[600]'>Mis Conocimientos y Habilidades</h3>
                        </div>
                        <p className='text-white/90'>Experiencia en HTML, CSS, JavaScript y React/TypeScript. Me especializo en desarrollar páginas web responsivas utilizando frameworks de diseño como TailwindCSS, creando interfaces visualmente atractivas y centradas en la experiencia del usuario.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
