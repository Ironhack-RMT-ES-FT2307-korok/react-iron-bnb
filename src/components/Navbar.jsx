
import { NavLink } from "react-router-dom"

function Navbar() {

  const checkActiveUrl = (info) => {
    // console.log(info)
    
    // debe retornar el valor que tendra esa className o style
    if (info.isActive === true) {
      return "nav-active"
    } else {
      return "nav-inactive"
    }
  }

  return (
    <nav>
      
      <NavLink className={checkActiveUrl} to="/">Home</NavLink>
      <NavLink className={checkActiveUrl} end={true} to="/pisos">Lista de pisos</NavLink>
      <NavLink className={checkActiveUrl} end={true} to="/pisos/add">Agregar piso</NavLink>

    </nav>
  )
}

export default Navbar