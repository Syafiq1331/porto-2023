import Navbar from './Navbar'
import profile from '../../public/profile.jpg'

const Header = () => {
  return (
    <header className='container mx-auto mb-12 lg:mb-0'>
      <Navbar />
      <div className='flex flex-wrap lg:flex-nowrap lg:mx-24 lg:mt-32 lg:mb-64 lg:items-center lg:justify-items-between'>
        <img src={profile} alt="Syafiq Rizky Fauzi" className="lg:order-2 order-1 rounded-full w-32 md:w-48 lg:w-64 md:h-48 lg:h-64 h-32 mx-auto" />

        <div className='mt-5 lg:order-1 order-2'>
          <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-start">Syafiq Rizky Fauzi</h1>
          <h2 className="text-xl lg:text-2xl text-center lg:text-start lg:mt-1">Frontend Developer</h2>
          <p
            className='px-6 md:px-24 lg:px-0 lg:w-[45rem] text-md md:text-xl text-center lg:text-start text-gray-500 mt-2'
          >
            A software engineering student at polytechnic IDN & someone who enthusiast about front end web developer. I always want make something great with my code, experience and my little bit knowledge.
          </p>
          <a href="https://drive.google.com/file/d/1LOm3S79FrLK__p2GoSPEjiGmt47-mWgx/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#FF6464] px-6 py-3 rounded-lg text-white mx-auto lg:mx-0 block mt-5">Download CV</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header