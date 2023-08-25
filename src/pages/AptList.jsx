import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function AptList() {

  const [ apartments, setApartments ] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {

    getData()

  }, [])

  const getData = async () => {

    try {
      
      const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      console.log(response)
      setApartments(response.data)

    } catch (error) {
      console.log(error)
      // redireccionar a /error
      navigate("/error")
    }

  }

  if (apartments === null) {
    return <h3>... buscando</h3>
  }

  return (
    <div>
      
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