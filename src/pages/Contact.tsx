import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <div className='dark:bg-slate-800 h-[76.3vh]'>
        <h1 className='text-center text-2xl font-semibold pt-12 dark:text-slate-50'>Reach Me ✨</h1>
        <div className='flex justify-center pt-4 pb-12'>
          <div>
            <span className='flex items-center gap-4'>
              <i className='bx bxs-envelope text-red-500 text-4xl' ></i>
              <a href='mailto:syafiqbussines@gmail.com' className='text-slate-700 dark:text-slate-50 underline text-md md:text-lg'>syafiqbussines@gmail.com</a>
            </span>
            <span className='flex items-center gap-4'>
              <i className='bx bxl-telegram text-blue-500 text-4xl' ></i>
              <a href='http://t.me/syafiq1331' className='text-slate-700 dark:text-slate-50 underline text-md md:text-lg'>Syafiqrzf</a>
            </span>
            <span className='flex items-center gap-4'>
              <i className='bx bxl-linkedin-square text-blue-800 text-4xl' ></i>
              <a href='https://www.linkedin.com/in/syafiqrzf1331/' target='_blank' className='text-slate-700 dark:text-slate-50 underline text-md md:text-lg'>Rizky Fauzi</a>
            </span>
            <span className='flex items-center gap-4'>
              <i className='bx bxl-instagram-alt text-[#E1306C] text-4xl' ></i>
              <a href='https://instagram.com/syafiqrzf' target='_blank' className='text-slate-700 dark:text-slate-50 underline text-md md:text-lg'>Syafiqrzf</a>
            </span>
            <span className='flex items-center gap-4'>
              <i className='bx bxl-github text-[black] text-4xl'></i>
              <a href='https://github.com/Syafiq1331' target='_blank' className='text-slate-700 dark:text-slate-50 underline text-md md:text-lg'>Syafiq Rizky</a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact