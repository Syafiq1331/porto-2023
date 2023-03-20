import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Index';
import Hello from "./pages/Hello";

export interface IApplicationProps { }

const Application: React.FC<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
      {/* <Link to="/hello">Home</Link> */}
    </BrowserRouter>
  )
}

export default Application;