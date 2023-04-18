import profilePengganti from '../assets/profile_pengganti.jpg'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react';

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Frontend Engineer', 'Software Engineering Student', 'Web Developer', 'Online course mentor'],
      typeSpeed: 50,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <header className='container mx-auto mb-12 lg:mb-0'>
      <div className='flex flex-wrap lg:flex-nowrap lg:mx-24 lg:mt-32 lg:mb-64 lg:items-center lg:justify-items-between'>
        <img src={profilePengganti} alt="Syafiq Rizky Fauzi" className="lg:order-2 order-1 rounded-full w-32 md:w-48 lg:w-64 md:h-48 lg:h-64 h-32 mx-auto" />

        <div className='mt-5 lg:order-1 order-2'>
          <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-start dark:text-gray-200">Syafiq Rizky Fauzi</h1>
          <div className='w-full text-center lg:text-start'>
            <span className="text-xl lg:text-2xl lg:text-start lg:mt-1" ref={el}></span>
          </div>
          <p
            className='px-6 md:px-24 lg:px-0 lg:w-[45rem] text-md md:text-xl text-center lg:text-start text-gray-500 dark:text-gray-400 mt-2'
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