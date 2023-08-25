import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ClockLoader from "react-spinners/ClockLoader";
import { ThemeContext } from "../context/theme.context";

function AptList() {

  const { btnThemeClassName } = useContext(ThemeContext)

  const [ apartments, setApartments ] = useState(null)
  const [ isFetching, setIsFetching ] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      console.log(response)
      setApartments(response.data)
      setIsFetching(false) // !

      

    } catch (error) {
      console.log(error)
      // redireccionar a /error
      navigate("/error")
    }
  }

  const handleRefresh = () => {
    setIsFetching(true)
    getData()
  }
  
  if (isFetching === true) {
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <ClockLoader size={100} color="#36d7b7" />
      </div>
      )
  }

  return (
    <div>
      <button className={btnThemeClassName} onClick={handleRefresh}>Refrescar</button>
      
      {apartments.map((eachApt) => {
        return (
          <div key={eachApt._id}>
            <h3>{eachApt.title}</h3>
            <img src={eachApt.img} alt="imagen-piso" width={300}/>
            <p>Precio: {eachApt.pricePerDay}</p>
          </div>
        )
      })}

    </div>
  )
}

export default AptList