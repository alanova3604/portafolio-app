import { useState } from 'react'
import './App.css'
import Header from "./componentes/Header.jsx";
import Home from "./componentes/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header />
        <Home />
      </>
  )
}

export default App
