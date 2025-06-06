import { MapPinIcon } from "@heroicons/react/16/solid"
import Frase from "../components/Frase"
import MisServicios from "../components/MisServicios"
import { Proyectos } from "../components/Proyectos"
import { SobreMi } from "../components/AboutMe"
import Footer from "../components/Footer"
import { menuNavegacion } from "../data/menuNavegacion"



export function HomePage() {
  return (
    <>

      <header className="glass z-100 fixed w-full border p-4">
        <div className="mx-auto max-w-[120rem] md:grid grid-cols-2 items-center text-center text-white">

          <div className="flex justify-center items-center">
            <a href="#">
              <img src="img\4.svg" className="md:w-70 w-50" alt="" />

            </a>
          </div>

          <div className="lg:grid pl-30 grid-cols-4 gap-6 md:ml-[-100px] hidden">
            {menuNavegacion.map(function (menuOption) {
              return (
                <a key={menuOption.id} className='lg:flex hidden justify-center items-center hover:font-semibold' href={menuOption.href}>{menuOption.option}</a>
              )
            })}
          </div>



        </div>
      </header>


      <section>
        {/* flex flex-col xl:flex-row justify-center lg:gap-x-[7rem] items-center gap-y-[4rem] p-2 */}
        <div className="bg-animation min-h-screen">
          
          <div className="flex flex-col xl:flex-row xl:justify-between items-stretch mx-auto gap-10 xl:gap-0 max-w-6xl ">
            
            <div className='flex justify-center items-center'>
              <img className='border-img w-80 lg:w-150 xl:w-120  glass-object-profile' src="img\imagen-perfil.webp" alt="imagen-perfil" />
            </div>

            <div className='flex flex-col justify-center lg:items-center'>
              <h1 className='text-shadow titulos text-xl md:text-[3rem] text-white/70'>Front End Jr <br /> JavaScript/React TypeScript</h1>

              <div className='flex flex-row justify-center items-baseline text-xl text-black/50'>
                <p className='text-center pt-5 text-black/50 text-xl font-[600]'>Guadalajara Jalisco, México</p>
                <MapPinIcon className="text-xl w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-body">
        <Frase />
        <div id='servicios' className="lg:pt-30">
          <MisServicios />
        </div>

        <div id="proyectos" className="lg:pt-30">
          <Proyectos />
        </div>

        <div id="sobreMi" className="pt-10">
          <SobreMi />
        </div>
      </section>

      <footer className="bg-body">
        <Footer />
      </footer>



    </>
  )
}


