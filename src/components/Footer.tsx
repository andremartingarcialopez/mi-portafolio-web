
export default function Footer() {
    return (
        <>
            <div className="custom-shape-divider-bottom-1654615957">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

            <div className='bg-[#1d3557] text-white gap-y-4 w-full flex flex-col lg:flex-row justify-around  items-center h-auto py-3'>

                <div>
                <div className="flex justify-center items-center">
            <a className="" href="#">
              <img src="img\4.svg" className="w-80" alt="" />
            
            </a>
          </div>
                    <p className=" text-center">©{new Date().getFullYear()}</p>
                    
                </div>

                <div>
                    <p>| Programador Junior Js/TypeScript |</p>
                </div>

                <div className='md:flex md:gap-x-10  grid grid-cols-2 gap-2  lg:grid lg:grid-cols-2 '>

                    <a className='enlaces-footer' target={"_blank"} href="https://github.com/andremartingarcialopez">
                        <p>Github</p>
                    </a>

                    <a className='enlaces-footer' target={"_blank"} href="mailto: andregarlop.job@gmail.com">
                        <p>Email</p>
                    </a>

                    <a className='enlaces-footer' target={"_blank"} href="https://www.linkedin.com/in/andre-martin-garcia-lopez-ba8a26240/">
                        <p>LinkedIn</p>
                    </a>

                    <a className='enlaces-footer' target={"_blank"} href="https://www.instagram.com/andy__garlop/">
                        <p>Instagram</p>
                    </a>

                    <a className='enlaces-footer col-span-2' target={"_blank"} href="https://drive.google.com/file/d/1aZL6sMy1VUAyHzQRYVvfw_xmnliTui-1/view?usp=sharing">
                        <p>Curriculum Vitae</p>
                    </a>

                </div>

            </div>
        </>
    )
}
