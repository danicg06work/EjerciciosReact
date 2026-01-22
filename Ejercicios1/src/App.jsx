import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Welcome from './Welcome';
import CajaEstilo from './StyledBox.jsx'
import Wrapper from './Wrapper.jsx'
import Image from './Image.jsx'
import Saludo from './Gretting.jsx'
import IsOnline from './IsOnline.jsx'
import ItemList from './ItemList.jsx';
import Card from './Card.jsx'
import Button from './Button.jsx';
import ListarDeportes from './ListarDeportes.jsx';

function App() {
  const [count, setCount] = useState(0)

  const deportesOlimpicos = [
    {
      nombre: "Atletismo",
      categoria: "Deportes de pista y campo",
      popularidad: 5,
      esDeEquipo: false
    },
    {
      nombre: "Natación",
      categoria: "Deportes acuáticos",
      popularidad: 5,
      esDeEquipo: false
    },
    {
      nombre: "Fútbol",
      categoria: "Deportes de equipo",
      popularidad: 5,
      esDeEquipo: true
    },
    {
      nombre: "Gimnasia",
      categoria: "Deportes artísticos",
      popularidad: 4,
      esDeEquipo: false
    },
    {
      nombre: "Baloncesto",
      categoria: "Deportes de equipo",
      popularidad: 5,
      esDeEquipo: true
    },
    {
      nombre: "Voleibol",
      categoria: "Deportes de equipo",
      popularidad: 4,
      esDeEquipo: true
    }
  ];



  return (
    <>
      {/* 1*/}
      <Welcome />
      {/* 2*/}
      <CajaEstilo />
      {/* 3*/}
      <Wrapper >
        <p>Hola soy el hijo de wrapper</p>
      </Wrapper>
      {/* 4*/}
      <Image src="/src/assets/images.jfif">
      </Image>
      {/* 5*/}
      <Saludo name="Daniel"></Saludo>
      {/* 6*/}
      <IsOnline estado={true}></IsOnline>
      <IsOnline estado={false}></IsOnline>
      {/* 7*/}
      <ItemList items={["1. Madrid", "2. Barcelona", "3. Valencia"]}></ItemList>
      {/*8*/}
      <Card title="Tarjeta 1 " body="Lorem Ipsum" footer="Hecho por mi"></Card>
      {/*9*/}
      <Button texto="PULSA AQUI!!!"></Button>
      {/*10*/}
      <ListarDeportes deportes = {deportesOlimpicos}></ListarDeportes>
    </>
  )
}

export default App
