import { createContext, useState } from "react";

// el primer componente que pasa el contexto de un lugar a otro
const ThemeContext = createContext()


// el segundo componente envoltorio que tiene lo estados, funciones, variables que quiero compartir

function ThemeWrapper(props) {

  // aqui creamos la data a compartir
  const [ isThemeDark, setIsThemeDark ] = useState(false)

  const handleSwitchTheme = () => {
    setIsThemeDark(!isThemeDark)
  }

  const btnThemeClassName = isThemeDark === true ? "dark-btn" : "light-btn"

  const passedContext = {
    isThemeDark,
    handleSwitchTheme,
    btnThemeClassName
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeWrapper
}
