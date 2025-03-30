import { sobreMi } from "../data/sobreMi"

export function SobreMi() {
    return (
        <>

            <div data-aos="fade-up" data-aos-duration="1000">
                <h2 className='background-title text-shadow titulos pt-14'>Sobre mi</h2>
                <h3 className='subtitulos pb-0'>Un poco más de mi vida...</h3>
            </div>
            <div className='w-full gap-y-4 flex flex-col justify-center lg:justify-around lg:gap-x-20 items-center'>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <img src="img/yo2.webp" className='w-[370px]' width="100px" height="100px" alt="imagen-sobre-mi" />
                </div>
            </div>

            <div className='flex flex-col gap-10 mx-auto max-w-6xl lg:flex-row'>

                {sobreMi.map(function (hobbies) {
                    return (
                        <>
                            <div data-aos="fade-up" data-aos-duration="1000" className='glass-object-about-me mx-auto w-[20rem] md:w-[40rem] rounded-2xl p-5'>
                                <div className='flex justify-center md:justify-start items-center gap-x-3 about-title text-2xl lg:text-2xl'>
                                    <div className="h-8 w-8 text-[#FF886A]">{hobbies.icono}</div>
                                    <h3 className='text-left pb-2 font-[600] uppercase'> {hobbies.title}</h3>
                                </div>
                                <p className='text-white/80 text-left'>{hobbies.text}</p>
                            </div>
                        </>
                    )
                })}
            </div>


            <div data-aos="fade-up  " data-aos-duration="1000" className='mt-15 text-center mx-auto'>
                <h2 className='text-shadow titulos '> Disciplinado, perseverante,<br /> responsable, persistente.</h2>
                <a className='subtitulos md:text-2xl' href="https://www.instagram.com/andy__garlop/" target={"_blank"}>¿Quieres saber más sobre mí? <br /> Visita mi <span className='degradado-instagram'>Instagram</span> </a>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" id='contacto' className=' h-auto py-20 flex flex-col justify-center items-center'>
                <h2 className='background-title text-shadow titulos lg:text-[90px]'>Trabajemos juntos!!</h2>
                <a  className='hover:bg-white glass-object mt-14 text-2xl px-5 py-3 rounded-full text-white/50 hover:text-white/80 font-[700]' href="">
                    Contactame
                </a>

            </div>


        </>
    )
}
