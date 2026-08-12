import { useEffect, useState } from 'react'
import heroVid from './assets/vecteezy_eating-dinner-in-restaurant_22933277.mov'
import './App.css'

function App() {
  return (
    <>
    <header className='fixed top-0 left-0 z-50 flex w-full h-[100px] justify-between border-b border-black items-center bg-transparent'>
      <div className='!ml-12'>Sazón de la Abuela</div>
      <ul className='flex flex-row gap-10'>
        <li className=''>Inicio</li>
        <li className=''>Proyectos</li>
        <li className=''>Contacto</li>
      </ul>
      <button className='h-[40px] w-[150px] !mr-12 border border-black'>Reservar mesa</button>
    </header>
    <div className="">
      <section className="relative w-full h-[600px] overflow-hidden shadow-lg !mb-12">
        <video src={heroVid} autoPlay loop className='w-full h-full object-cover'></video>
        <div className='absolute top-[100px] left-[50px] h-[400px] w-[600px] *:text-left *:text-white'>
          <p className='font-serif !ml-10 !mt-4 h-[30px] w-[500px]'>Sazón de la Abuela</p>
          <h1 className='!playfair !ml-10 !my-5 h-[150px] w-[500px] text-xl'>Como en casa. Mejor que en casa.</h1>
          <p className='font-serif !ml-10 h-[100px] w-[500px]'>Sazón de la Abuela lleva más de 25 años cocinando lo de siempre con lo de aquí. Caldo de gallina, cocido de los jueves, tarta de manzana que sale del horno a las doce. Sin cartas enormes. Sin artificios.</p>
        </div>
      </section>
      <section className='flex flex-wrap gap-6 justify-center'>
        <div className='w-[350px] h-[350px] bg-red-600'>
          <img src="" alt="" className='w-full h-[70%] bg-yellow-600'/>
          <p className='w-full h-[30%] bg-yellow-200'></p>
        </div>
        <div className='w-[350px] h-[350px] bg-red-600'>
          <img src="" alt="" className='w-full h-[70%] bg-yellow-600'/>
          <p className='w-full h-[30%] bg-yellow-200'></p>
        </div>
        <div className='w-[350px] h-[350px] bg-red-600'>
          <img src="" alt="" className='w-full h-[70%] bg-yellow-600'/>
          <p className='w-full h-[30%] bg-yellow-200'></p>
        </div>
        <div className='w-[350px] h-[350px] bg-red-600'>
          <img src="" alt="" className='w-full h-[70%] bg-yellow-600'/>
          <p className='w-full h-[30%] bg-yellow-200'></p>
        </div>
      </section>
    </div>
    </>
  )
}

export default App
