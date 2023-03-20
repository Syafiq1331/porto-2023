import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portolio from '../pages/Portolio';
import Contact from '../pages/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router