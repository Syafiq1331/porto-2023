import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import toggle from '../../public/menu-toggle.svg';
import Router from '../routes/Routes';
import Header from './Header';

const Navbars = () => {
  return (
    <h1>Hello World</h1>
  )
}

interface IProps {
  children: React.ReactNode
}

const Navbar = ({ children }: IProps) => {
  return (
    <>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <i className='bx bx-menu text-2xl'></i>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
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
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}

export default Navbar