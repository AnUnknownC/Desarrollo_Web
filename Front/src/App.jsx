import { useEffect, useState } from 'react'
// import heroVid from './assets/vecteezy_eating-dinner-in-restaurant_22933277.mov'
import cocido from './assets/cocido.avif'
import './App.css'

function App() {
  return (
    <>
    <header className='fixed top-0 left-0 z-50 flex w-full h-[100px] justify-between border-b border-black items-center bg-black *:text-white'>
      <div className='!ml-12'>Sazón de la Abuela</div>
      <ul className='flex flex-row gap-10 [&>*]:transition-transform [&>*]:duration-300 [&>*:hover]:scale-110 [&>*:hover]:bg-gray-900 [&>*:hover]:rounded-2xl items-center'>
        <li className='flex items-center justify-center h-[40px] w-[100px]'>Inicio</li>
        <li className='flex items-center justify-center h-[40px] w-[150px]'>Proyectos</li>
        <li className='flex items-center justify-center h-[40px] w-[125px]'>Contacto</li>
      </ul>
      <button className='h-[40px] w-[150px] !mr-12 border border-black bg-green-700'>Reservar mesa</button>
    </header>
    <div className="">
      <section className="relative w-full h-[600px] overflow-hidden shadow-lg !mb-12">
        <video src="{heroVid}" autoPlay loop className='w-full h-full object-cover bg-black'></video>
        <div className='absolute top-[100px] left-[50px] h-[400px] w-[600px] *:text-left *:text-white'>
          <p className='font-serif !ml-10 !mt-4 h-[30px] w-[500px]'>Sazón de la Abuela</p>
          <h1 className='!playfair !ml-10 !my-5 h-[150px] w-[500px] text-xl'>Como en casa. Mejor que en casa.</h1>
          <p className='font-serif !ml-10 h-[100px] w-[500px]'>Sazón de la Abuela lleva más de 25 años cocinando lo de siempre con lo de aquí. Caldo de gallina, cocido de los jueves, tarta de manzana que sale del horno a las doce. Sin cartas enormes. Sin artificios.</p>
        </div>
      </section>
      <section className='flex flex-wrap gap-15 justify-center'>
        <div className='flex text-center justify-center w-full h-[100px] '>
          <div className='py-6 flex items-center justify-center w-[300px] h-full border-3 border-red-900 text-black text-bold text-5xl'>Menu</div>
        </div>
        <div className='w-[350px] h-[350px]'>
          <img src={cocido} alt="" className='w-full h-[70%] rounded-tl-xl rounded-tr-xl'/>
          <p className='flex justify-content items-center w-full h-[30%] !px-10 text-black bg-yellow-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className='w-[350px] h-[350px]'>
          <img src={cocido} alt="" className='w-full h-[70%] rounded-tl-xl rounded-tr-xl'/>
          <p className='flex justify-content items-center w-full h-[30%] !px-10 text-black bg-yellow-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className='w-[350px] h-[350px]'>
          <img src={cocido} alt="" className='w-full h-[70%] rounded-tl-xl rounded-tr-xl'/>
          <p className='flex justify-content items-center w-full h-[30%] !px-10 text-black bg-yellow-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className='w-[350px] h-[350px]'>
          <img src={cocido} alt="" className='w-full h-[70%] rounded-tl-xl rounded-tr-xl'/>
          <p className='flex justify-content items-center w-full h-[30%] !px-10 text-black bg-yellow-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
      </section>
      <section className="flex w-7/8 h-[450px] !mx-auto !my-6 gap-6">
        <div className="w-1/2 flex items-center justify-center border-5">
          <div className="text-black">
            <h2 className="text-2xl font-bold !text-black">Visítanos</h2>
            <p className="mt-4">
              Encuéntranos en nuestra ubicación.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.8941075774167!2d-74.0849135055525!3d4.7405879118576255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84fbc8aa1cf3%3A0x3c9b757565223cf5!2sPapa%20a%20la%20Lata!5e0!3m2!1ses-419!2sco!4v1786508917522!5m2!1ses-419!2sco" className="w-full h-full border-0 rounded-2xl" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Ubicación"
          />
        </div>
      </section>
      <section className="flex w-[1400px] h-[450px] !mx-auto !my-6 gap-6">
          <div className="flex-1 overflow-hidden rounded-2xl">
            <iframe
              src="https://www.youtube.com/embed/CBSsL4u_nng?autoplay=1&mute=1&controls=0&loop=1&playlist=CBSsL4u_nng"
              title="YouTube video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-black rounded-2xl">
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold">
                Conócenos
              </h2>

              <p className="mt-4">
                Una pequeña descripción de tu negocio.
              </p>
            </div>
          </div>
        </section>
    </div>
    </>
  )
}

export default App
