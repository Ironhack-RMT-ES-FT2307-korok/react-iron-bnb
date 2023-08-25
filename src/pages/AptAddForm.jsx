import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function AptAddForm() {

  const navigate = useNavigate()

  const [ title, setTitle ] = useState("")
  const [ img, setImg ] = useState("")
  const [ pricePerDay, setPricePerDay ] = useState(0)

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleImgChange = (event) => {
    setImg(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPricePerDay(event.target.value)
  }

  const handleCreateApt = async (event) => {
    event.preventDefault()

    try {
      
      // 1. enviar al piso al servidor para crearlo
      await axios.post("https://ironbnb-m3.herokuapp.com/apartments", {
        title: title,
        img: img,
        pricePerDay: pricePerDay
      })

      // 2. redireccionar al usuario a la lista
      navigate("/pisos")

    } catch (error) {
      console.log(error)
      navigate("/error")
    }

  }

  return (
    <div>
      
      <h2>Crear un piso</h2>

      <form>

        <label htmlFor="title">Titulo:</label>
        <input type="text" name="title" value={title} onChange={handleTitleChange}/>

        <br />

        <label htmlFor="img">Imagen:</label>
        <input type="text" name="img" value={img} onChange={handleImgChange}/>

        <br />

        <label htmlFor="pricePerDay">Precio:</label>
        <input type="number" name="pricePerDay" value={pricePerDay} onChange={handlePriceChange}/>

        <br />

        <button onClick={handleCreateApt}>Agregar</button>

      </form>

    </div>
  )
}

export default AptAddForm