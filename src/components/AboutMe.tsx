import { sobreMi } from "../data/sobreMi"
import { ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid"


export function SobreMi() {
    return (
        <>

            <div className="">
                <h2 className='background-title text-shadow titulos pt-14'>Sobre mi</h2>
                <h3 className='subtitulos pb-0'>Un poco más de mi vida...</h3>
            </div>

            <div>
                <div className="flex justify-center items-center w-full">
                    <img src="img/yo2.webp" className='md:w-150 xl:w-95' alt="imagen-sobre-mi" />
                </div>
                <div className='flex flex-col gap-10 mx-auto max-w-6xl xl:flex-row'>

                    {sobreMi.map(function (hobbies) {
                        return (

                            <div key={hobbies.id} className='glass-object-about-me mx-auto w-[20rem] md:w-[40rem] rounded-2xl p-5'>
                                <div className='flex justify-center md:justify-start items-center gap-x-3 about-title text-2xl lg:text-2xl'>
                                    <div className="h-8 w-8 text-[#FF886A]">{hobbies.icono}</div>
                                    <h3 className='text-left pb-2 font-[600] uppercase'> {hobbies.title}</h3>
                                </div>
                                <p className='text-white/80 text-left'>{hobbies.text}</p>

                            </div>

                        )
                    })}
                </div>
            </div>



            <div data-aos="fade-up  " className='mt-15 text-center mx-auto'>
                <h2 className='text-shadow titulos '> Disciplinado. Perseverante.<br /> Responsable. Persistente.</h2>
                <a className='subtitulos md:text-2xl' href="https://www.instagram.com/andy__garlop/" target={"_blank"}>¿Quieres saber más sobre mí? <br /> Visita mi <span className='degradado-instagram'>Instagram</span> </a>
            </div>

            <div id='contacto' className=' h-auto py-20 flex flex-col justify-center items-center'>
                <h2 className='background-title text-shadow titulos lg:text-[90px]'>Trabajemos juntos!!</h2>


                <div className='flex justify-center items-center gap-10 flex-col lg:flex-row w-full mx-auto max-w-6xl md:justify-between my-15'>

                    <div className='glass-object-whats px-7 flex justify-center items-center w-full  p-2 animate__animated animate__headShake animate__infinite animate__slow hover:bg-[#1f26875e] cursor-pointer '>
                        <a href='https://api.whatsapp.com/send?phone=+523312839590' target={"_blank"} className='whats-title flex flex-row justify-start items-center gap-x-5 '>
                            <ChatBubbleOvalLeftEllipsisIcon className="h-24 w-24 text-[#00B100]" />
                            <h3 className='text-center text-2xl pb-2 font-[600]'>WhatsApp</h3>
                        </a>
                    </div>

                    <div className='glass-object-call flex justify-center items-center  px-7 w-full  p-2 animate__animated animate__headShake animate__infinite animate__slow hover:bg-[#1f26875e] cursor-pointer'>
                        <a href='tel:+333312839590' target={"_blank"} className='call-title flex flex-row justify-start items-center gap-x-5'>
                            <PhoneIcon className="h-24 w-24 text-[#F2BB33]" />
                            <h3 className='text-center text-2xl pb-2 font-[600]'>Llamada</h3>
                        </a>
                    </div>

                    <div className='glass-object-email flex justify-center items-center  px-7 w-full  p-2 animate__animated animate__headShake animate__infinite animate__slow hover:bg-[#1f26875e] cursor-pointer'>
                        <a href='mailto:andregarlop.job@gmail.com' target={"_blank"} className='email-title flex flex-row justify-start items-center gap-x-5'>
                            <EnvelopeIcon className="h-24 w-24 text-[#DE4032]" />
                            <h3 className='text-center text-2xl pb-2 font-[600]'>Email</h3>
                        </a>
                    </div>

                </div>



            </div>


        </>
    )
}
