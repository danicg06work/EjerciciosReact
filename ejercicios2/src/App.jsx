import React from "react"
import './App.css'
import UserList from "./UserList"
import ThemeSwitcher  from "./ThemeSwitcher"
import Despleagable from "./Desplegable"
function App() {
  return (
    <>
        {/*1 y 2 y 3*/}
        <ThemeSwitcher>
          <UserList></UserList>
        </ThemeSwitcher>
        {/*5*/}
        <Despleagable titulo = "Hola">
          <p>Contenido documental</p>
        </Despleagable>
    </>
  )
}

export default App
