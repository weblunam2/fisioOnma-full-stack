import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ACERCA DE <span className='text-gray-700 font-semibold'>NOSOTROS</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Somos un centro de rehabilitación y terapia física con una amplia experiencia profesional en 
            la rama de la rehabilitación4 física desde 2015 y hasta la fecha nuestro compromiso es mejorar la calidad de vida 
            de cada uno de nuestros pacientes, por eso día a día nos seguimos actualizando en las novedades de terapia física.</p>
          <p>Contamos con tratamientos de Electroterapia, Ultrasonido Terapéutico, Laserterapia, Termoterapia y nuestro nuevo servicio adicional: Depilación Laser diodo. </p>
          <b className='text-gray-800'>Nuestra Vision</b>
          <p>Nuestro compromiso es mejorar la calidad de vida de cada uno de nuestros pacientes, por eso día a día nos seguimos actualizando en las novedades de la terapia física</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>PORQUE  <span className='text-gray-700 font-semibold'>ESCOGERNOS</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFICACIA:</b>
          <p>Tratamientos efectivos respaldados por evidencia científica para maximizar tu recuperación en el menor tiempo posible.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCIA: </b>
          <p>Horarios flexibles y opciones de tratamiento en clínica o a domicilio, adaptados a tu estilo de vida.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZACIÓN:</b>
          <p >Planes de tratamiento diseñados específicamente para tus necesidades y objetivos individuales de salud y bienestar.</p>
        </div>
      </div>

    </div>
  )
}

export default About
