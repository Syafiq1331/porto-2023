import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbars = () => {
  return (
    <h1>Hello World</h1>
  )
}

interface IProps {
  children?: React.ReactNode
}

const Navbar = ({ children }: IProps) => {
  return (
    <>
      <nav>
        <div className="navbar bg-gray-50 dark:bg-slate-700 dark:text-white">
          <li className='mx-1 navbar-start lg:block hidden ml-6'>
            <Link to={'/'}>
              <p className='font-bold'>Syafiqrzf</p>
            </Link>
          </li>
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <i className='bx bx-menu text-2xl'></i>
              </label>
              <ul tabIndex={0} className="menu dark:bg-slate-700 dark:text-white menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                <li className='mx-1'>
                  <Link to={'/'}>Home</Link>
                </li>
                <li className='mx-1'>
                  <Link to={'portfolio'}>Portofolio</Link>
                </li>
                <li className='mx-1'>
                  <a href='https://medium.com/@syafiqrzf' target='_blank'>Blog</a>
                </li>
                <li className='mx-1'>
                  <Link to={'contact'}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <li className='mx-1 navbar-end lg:hidden'>
            <DarkModeToggle />
          </li>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <li className='mx-1'>
                <Link to={'/'}>Home</Link>
              </li>
              <li className='mx-1'>
                <Link to={'portfolio'}>Portofolio</Link>
              </li>
              <li className='mx-1'>
                <a href='https://medium.com/@syafiqrzf' target='_blank'>Blog</a>
              </li>
              <li className='mx-1'>
                <Link to={'contact'}>Contact</Link>
              </li>
              <li className='mx-1'>
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}

export default Navbar