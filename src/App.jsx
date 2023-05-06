import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HappyNavBar from './components/NavBar'
import './App.css'

import Home from './views/Home';
import Contacto from './views/Contacto';

function App() {

  return (

    <div>

      <BrowserRouter>

        <HappyNavBar />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/contacto' element={<Contacto />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
