import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>

     {/* <div>

        <h1>Hola</h1>
        <Button text="Mi primer boton" color="green"/>
        <Button text="Mi segundo boton" color="blue"/>        

      </div> */}

      <ItemListContainer message="En la brevedad los productos estarán disponibles"/>
    </>
  )
}

export default App
