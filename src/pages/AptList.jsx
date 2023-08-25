import axios from "axios"
import { useEffect, useState } from "react"

function AptList() {

  const [ apartments, setApartments ] = useState(null)


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
    }

  }

  if (apartments === null) {
    return <h3>... buscando</h3>
  }


  return (
    <div>
      
      {apartments.map((eachApt) => {
        return (
          <li>{eachApt.title}</li>
        )
      })}

    </div>
  )
}

export default AptList