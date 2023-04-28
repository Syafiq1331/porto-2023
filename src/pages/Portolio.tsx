import Card from '../components/Card'
import idn from '../assets/projects/idn_landingPage.png'
import tekaje from '../assets/projects/tekaje_landingPage.png'
import bookshelf from '../assets/projects/bookshelf__App.png'
import pemudacoding from '../assets/projects/pemudacoding__company.png';
import asmaulHusna from '../assets/projects/asmaulHusna.png';
import codeRun from '../assets/projects/codeRun.png';
import dicodingSubmission__1 from '../assets/projects/dicodingSubmission__1.png';
import freshCart from '../assets/projects/freshCart.png';
import goPro from '../assets/projects/goPro.png';
import konohaStore from '../assets/projects/konohaStore.png';
import listenQuranku from '../assets/projects/listenQuranku.png';
import minimalistResume from '../assets/projects/minimalistResume.png';
import ReactTodoSimple from '../assets/projects/ReactTodoSimple.png';
import tugasKuliah__1 from '../assets/projects/tugasKuliah__1.png';
import waktuSholat from '../assets/projects/waktuSholat.png';
import pokeApps from '../assets/projects/pokeApps.png';
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <>
      <div className='bg-gray-900'>
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
              title='AsmaulHusna Ku'
              desc='AsmaulHusna Ku is a simple app that can show you the meaning of AsmaulHusna'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={codeRun}
              link='https://syafiq1331.github.io/Workshop-day1/'
              title='Code Run | Workshop project day 1'
              desc='Simple landing page for workshop project day 1'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={dicodingSubmission__1}
              link='https://syafiq1331.github.io/submission-01/'
              title='Dicoding submission'
              desc='Simple landing page for dicoding submission'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={freshCart}
              link='https://syafiq1331.github.io/fresh-cart/'
              title='Fresh Cart e commerce'
              desc='Fresh Cart is a simple ecommerce website for college project'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={goPro}
              link='https://syafiq1331.github.io/simple-landingpage/'
              title='Go Pro landing page'
              desc='Landing page for college project'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={konohaStore}
              link='https://syafiq1331.github.io/bootstrap-ecommerce/'
              title='Konoha Store'
              desc='Konoha Store is a simple ecommerce website for college project'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={listenQuranku}
              link='https://listenquranku.vercel.app/'
              title='Listen quranku'
              desc='Listen quranku app that can play quran'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={minimalistResume}
              link='https://minimalist-porto-lch6-dqm09k5fv-syafiq1331.vercel.app/'
              title='Minimalist resume'
              desc='Minimalist resume with react js and tailwindcss'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={ReactTodoSimple}
              link='https://todo-syafiq.vercel.app/'
              title='Simple todo'
              desc='Simple todo app with react ts and zustand'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={tugasKuliah__1}
              link='https://syafiqrzf1331.vercel.app/'
              title='Simple portfolio website'
              desc='Simple portfolio website for my college assignment.'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
            <Card
              image={waktuSholat}
              link='https://mesjidku.vercel.app/'
              title='Waktu Sholatku website'
              desc='Waktu sholatku is a website that can show you the time of prayer in your city.'
              tech_1='React Js' tech_2='tailwindcss' tech_3='typescript'
            />
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default Portfolio;