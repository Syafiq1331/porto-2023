import toggle from '../../public/menu-toggle.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <i className='bx bx-menu text-2xl'></i>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Portofolio</a></li>
              <li><a href='https://medium.com/@syafiqrzf' target='_blank'>Blog</a></li>
              <li><a>Contacts</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Portofolio</a></li>
            <li><a href='https://medium.com/@syafiqrzf' target='_blank'>Blog</a></li>
            <li><a>Contacts</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar