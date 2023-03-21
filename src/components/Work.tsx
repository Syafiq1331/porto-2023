import React from 'react'
import { useEffect } from "react";
import Card from './Card'
import idn from '../../public/projects/idn_landingPage.png'
import tekaje from '../../public/projects/tekaje_landingPage.png'
import bookshelf from '../../public/projects/bookshelf__App.png'
import pemudacoding from '../../public/projects/pemudacoding__company.png';

const Work = () => {

  return (
    <div className='bg-[#EDF7FA]'>
      <div className='container mx-auto py-4 '>
        <div className='flex justify-between px-6 py-4'>
          <p className='font-semibold'>Recent projects</p>
          <a href=" " className='text-sky-500'>View All</a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mx-4 my-4 pb-6 lg:px-24 md:px-10 px-2'>
          <Card
            image={idn}
            link='https://polytechinc-idn.vercel.app/'
            title='Polytechinc IDN landing page'
            desc='Landing page about polytechinc IDN Bogor, Indonesia.'
            tech_1='Vercel' tech_2='Tailwindcss' tech_3='React Js'
            data-aos="fade-left"
          />
          <Card
            image={tekaje}
            link='https://syafiq1331.github.io/tekajefest/'
            title='Tekaje fest landing page'
            desc='Landing page about polytechinc IDN Bogor, Indonesia.'
            tech_1='Bootstrap 5' tech_2='Sass' tech_3='Github pages'
          />
          <Card
            image={bookshelf}
            link='https://syafiq1331.github.io/Simple-Bookshelf/'
            title='Bookshelf dicoding Apps'
            desc='Landing page about polytechinc IDN Bogor, Indonesia.'
            tech_1='Github pages' tech_2='CSS native' tech_3='Javascript native'
          />
          <Card
            image={pemudacoding}
            link='http://syafiqrzf.my.id/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
        </div>
      </div>
    </div>
  )
}

export default Work