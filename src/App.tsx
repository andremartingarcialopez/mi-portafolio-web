

function App() {


  return (
    <>

      <header className=" border p-4">

        <div className="mx-auto md:grid grid-cols-3 items-center text-center">

          <div>
            <p className="font-semibold text-3xl ">André García</p>
          </div>

          <div className="lg:flex justify-between gap-6 md:ml-[-100px] hidden">
            <a className='lg:flex hidden justify-center items-center hover:font-semibold' href="#servicios">Servicios</a>
            <a className='lg:flex hidden justify-center items-center hover:font-semibold' href="#proyectos">Proyectos</a>
            <a className='lg:flex hidden justify-center items-center hover:font-semibold' href="#sobreMi">Sobre mi</a>
            <a className='lg:flex hidden justify-center items-center hover:font-semibold' href="#contacto">Contacto</a>
          </div>

          <div>
            <a className="lg:flex hidden justify-center items-center hover:font-semibold" href="#contactame">Contactame </a>
          </div>

        </div>

      </header>

      <section>

        <div className="bg-animation w-full h-screen md:flex flex flex-col lg:flex-row justify-center lg:gap-x-[7rem] items-center gap-y-[4rem] p-2">

          <div className='flex justify-center items-center'>
            <img className='border-img md:w-[400px] w-[300px] glass-object-profile' width="100px" height="100px" src="img\imagen-perfil.webp" alt="imagen-perfil" />
          </div>

          <div className='flex flex-col justify-center lg:items-center lg:h-[90vh]'>
            <h1 className='text-shadow titulos text-white/70'>Desarrollador Jr<br />
              <p className='md:pt-5'>JavaScript</p>
            </h1>

            <div className='flex flex-row justify-center items-baseline pt-5 gap-x-3 text-xl text-black/50'>
              <p className='text-center pt-5 text-black/50 text-xl font-[600]'>Guadalajara Jalisco, México</p>
            </div>
          </div>



        </div>

      </section>

    </>
  )
}

export default App
