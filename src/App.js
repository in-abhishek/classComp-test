import ConstructorLifeCycleComp from './Pages/ConstructorLifeCycleComp';
import Count from './Pages/CountComp';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import RenderComp from './Pages/RenderComp';
import ComponenentDidMountComp from './Pages/ComponenentDidMountComp';
import CompDidUpdateComp from './Pages/CompDidUpdateComp';
import DataProps from './Pages/DataProps';
import Calc from './Components/Calc';

function App() {
  return (
    <div className='div-container'>
      {/* -------------- */}
      <BrowserRouter>
        <div className='nav-links'>
          <div className='nav-bar' >
            <NavLink to="/">Home</NavLink>
          </div>
          <div className='nav-bar' >
            <NavLink to="/RenderComp">RenderComp</NavLink>
          </div>
          <div className='nav-bar' >
            <NavLink to="/ComponenentDidMountComp">CompDidMount</NavLink>
          </div>
          <div className='nav-bar'>
            <NavLink to="/CompDidUpdateComp">CompDidUpdate</NavLink>
          </div>
          <div className='nav-bar'>
            <NavLink to="/Count">Count</NavLink>
          </div>
          <div className='nav-bar' >
            <NavLink to="/DataProps">UpdateData Props</NavLink>
          </div>
          <div className='nav-bar'>
            <NavLink to="/Calc">Calculator</NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<ConstructorLifeCycleComp />} />
          <Route exact path="/RenderComp" element={<RenderComp />} />
          <Route exact path="/ComponenentDidMountComp" element={<ComponenentDidMountComp />} />
          <Route exact path="/CompDidUpdateComp" element={<CompDidUpdateComp />} />
          <Route exact path="/Count" element={<Count />} />
          <Route exact path="/DataProps" element={<DataProps />} />
          <Route exact path="/Calc" element={<Calc />} />

        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
