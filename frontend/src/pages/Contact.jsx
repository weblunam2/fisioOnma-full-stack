import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACTA<span className='text-gray-700 font-semibold'>NOS</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>NUESTRA OFICINA</p>
          <p className=' text-gray-500'>Hidalgo #1536, Col. Centro <br /> Nvo. Casas Grandes, Chihuhua</p>
          <p className=' text-gray-500'>Tel: +52 614 219 7753 <br /> Email: fisioOnMa@gmail.com</p>
          
        </div>
      </div>

    </div>
  )
}

export default Contact
