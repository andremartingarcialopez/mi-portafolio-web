import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/16/solid"
import { menuNavegacion } from "./data/menuNavegacion"
import Frase from "./components/Frase"

function App() {


  return (
    <>

      <header className="glass z-100 fixed w-full border p-4">
        <div className="mx-auto md:grid grid-cols-3 items-center text-center text-white">

          <div>
            <p className="font-semibold text-3xl ">André García</p>
          </div>

          <div className="lg:grid pl-30 grid-cols-4 gap-6 md:ml-[-100px] hidden">
            {menuNavegacion.map(function (menuOption) {
              return (
                <a className='lg:flex hidden justify-center items-center hover:font-semibold' href={menuOption.href}>{menuOption.option}</a>
              )
            })}
          </div>

          <div>
            <a className="lg:flex hidden justify-center items-center hover:font-semibold gap-x-2" href="#contactame">Contactame
              <ArrowRightIcon className="w-4 h-4"/>
            </a>

          </div>

        </div>
      </header>


      <section>
        <div className="bg-animation w-full h-screen md:flex flex flex-col lg:flex-row justify-center lg:gap-x-[7rem] items-center gap-y-[4rem] p-2">

          <div className='flex justify-center items-center'>
            <img className='border-img md:w-[400px] w-[300px] glass-object-profile' width="100px" height="100px" src="img\imagen-perfil.webp" alt="imagen-perfil" />
          </div>

          <div className='flex flex-col justify-center lg:items-center lg:h-[90vh]'>
            <h1 className='text-shadow titulos text-white/70'>Programador Jr<br />
              <p className='md:pt-5'>JavaScript/TypeScript</p>
            </h1>

            <div className='flex flex-row justify-center items-baseline text-xl text-black/50'>
              <p className='text-center pt-5 text-black/50 text-xl font-[600]'>Guadalajara Jalisco, México</p>
              <MapPinIcon className="text-xl w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-body">
        <Frase/>
      </section>

    </>
  )
}

export default App
