import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Somos tu mejor opción para tratar lesiones musculoesqueléticas con 
          aplicaciones de electroterapia, ultrasonido y laser y lo mejor de todo te ofrecemos la mejor calidad y excelente servicio.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Agencia</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>Acerca de Nosotros</li>
            <li>Politica de Privacidad</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>MANTENEN CONTACTO</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+52 614 219 7753</li>
            <li>FisioOnMa@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024</p>
      </div>

    </div>
  )
}

export default Footer
