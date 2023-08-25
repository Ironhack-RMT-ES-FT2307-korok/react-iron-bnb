import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AptList from './pages/AptList'
import AptAddForm from './pages/AptAddForm'
import Error from './pages/Error'
import NotFound from './pages/NotFound'
import Navbar from "./components/Navbar"

function App() {

  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={ <Home /> }/>
        <Route path="/pisos" element={ <AptList /> }/>
        <Route path="/pisos/add" element={ <AptAddForm /> }/>

        {/* rutas para gestionar errores */}
        <Route path="/error" element={ <Error /> }/>
        <Route path="*" element={ <NotFound />}/>

      </Routes>

    </>
  )
}

export default App
