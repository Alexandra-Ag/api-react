import { useState } from 'react'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carros from './components/carros'
import Tanqueo from './components/Tanqueo'
import Tablacarros from './components/tablacarros'
import UpdateUsers from './components/editarcarro'
import TablaTan from './components/tablerosTan'
import EditarTan from './components/editarTanqueo';


function App() {
  return (
    <>
     <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Carros />}></Route>
          <Route path='/get' element={<Tablacarros />}></Route>
          <Route path='/update/:id' element={<UpdateUsers />}></Route>
          <Route path='/registro' element={<Tanqueo />}></Route>
          <Route path='/getTan' element={<TablaTan />}></Route>
          <Route path='/updateTan/:id' element={<EditarTan/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App