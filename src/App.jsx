import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AptList from './pages/AptList'
import AptAddForm from './pages/AptAddForm'
import Error from './pages/Error'
import NotFound from './pages/NotFound'
import Navbar from "./components/Navbar"
// import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context/theme.context.jsx'

function App() {

  const { isThemeDark, handleSwitchTheme, btnThemeClassName } = useContext(ThemeContext)

  // const [ isThemeDark, setIsThemeDark ] = useState(false)

  // const handleSwitchTheme = () => {
  //   setIsThemeDark(!isThemeDark)
  // }

  return (
    <div className={isThemeDark === true ? "dark-page" : "light-page"}>

      <button className={btnThemeClassName} onClick={handleSwitchTheme}>Cambio de tema</button>

      <Navbar />

      <Routes>

        <Route path="/" element={ <Home /> }/>
        <Route path="/pisos" element={ <AptList /> }/>
        <Route path="/pisos/add" element={ <AptAddForm /> }/>

        {/* rutas para gestionar errores */}
        <Route path="/error" element={ <Error /> }/>
        <Route path="*" element={ <NotFound />}/>

      </Routes>

    </div>
  )
}

export default App
