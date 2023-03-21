import React from 'react'
import Card from '../components/Card'
import idn from '../../public/projects/idn_landingPage.png'
import tekaje from '../../public/projects/tekaje_landingPage.png'
import bookshelf from '../../public/projects/bookshelf__App.png'
import pemudacoding from '../../public/projects/pemudacoding__company.png';
import asmaulHusna from '../../public/projects/asmaulHusna.png';
import codeRun from '../../public/projects/codeRun.png';
import dicodingSubmission__1 from '../../public/projects/dicodingSubmission__1.png';
import freshCart from '../../public/projects/freshCart.png';
import goPro from '../../public/projects/goPro.png';
import konohaStore from '../../public/projects/konohaStore.png';
import listenQuranku from '../../public/projects/listenQuranku.png';
import minimalistResume from '../../public/projects/minimalistResume.png';
import ReactTodoSimple from '../../public/projects/ReactTodoSimple.png';
import tugasKuliah__1 from '../../public/projects/tugasKuliah__1.png';
import waktuSholat from '../../public/projects/waktuSholat.png';
import pokeApps from '../../public/projects/pokeApps.png';

const Portfolio = () => {
  return (
    <div className='bg-[#EDF7FA]'>
      <div className='container mx-auto py-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mx-4 my-4'>
          <Card
            image={idn}
            link='https://polytechinc-idn.vercel.app/'
            title='Polytechinc IDN landing page'
            desc='Landing page about polytechinc IDN Bogor, Indonesia.'
            tech_1='Vercel' tech_2='Tailwindcss' tech_3='React Js'
          />
          <Card
            image={pokeApps}
            link='https://syafiq1331.github.io/tekajefest/'
            title='Tekaje fest landing page'
            desc='Landing page about polytechinc IDN Bogor, Indonesia.'
            tech_1='Bootstrap 5' tech_2='Sass' tech_3='Github pages'
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
          <Card
            image={asmaulHusna}
            link='https://asmahusna.vercel.app/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={codeRun}
            link='https://syafiq1331.github.io/Workshop-day1/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={dicodingSubmission__1}
            link='https://syafiq1331.github.io/submission-01/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={freshCart}
            link='https://syafiq1331.github.io/fresh-cart/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={goPro}
            link='https://syafiq1331.github.io/simple-landingpage/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={konohaStore}
            link='https://syafiq1331.github.io/bootstrap-ecommerce/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={listenQuranku}
            link='https://listenquranku.vercel.app/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={minimalistResume}
            link='https://minimalist-porto-lch6-dqm09k5fv-syafiq1331.vercel.app/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={ReactTodoSimple}
            link='https://todo-syafiq.vercel.app/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={tugasKuliah__1}
            link='https://syafiqrzf1331.vercel.app/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
          <Card
            image={waktuSholat}
            link='https://mesjidku.vercel.app/'
            title='Pemuda coding company profile'
            desc='Landing page about my first company profile. Pemuda Coding Academy'
            tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;