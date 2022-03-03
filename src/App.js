import Nav from './componentes/Nav';
import SeccionPrincipal from './componentes/SeccionPrincipal';
import Footer from './componentes/Footer';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Ubicaciones from './componentes/Ubicaciones';
import DetallePersonaje from './componentes/DetallePersonaje';
import Episodios from './componentes/Episodios';
import { useState } from "react";



import './App.css';
import Busqueda from './componentes/Busqueda';

const  App = () =>{
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");


  const escritoInput = (e) => {
    setValorDelInput(e.target.value);
  };

  const clickBoton = () => {
    setBusqueda(valorDelInput);
  };

  return (
    <Box>
      <BrowserRouter>
       <Nav/> 
       <Box>
        <Busqueda escritoInput={escritoInput} clickBoton={clickBoton}/>
       </Box>
         <Routes>
          <Route path="/" element={<SeccionPrincipal busqueda={busqueda}/>}/>
          <Route path="/episodios" element={<Episodios/>}/>
          <Route path="/ubicaciones" element={<Ubicaciones/>}/>
          <Route path="/detallesPersonajes/:idPersonaje" element={<DetallePersonaje/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </Box>
    
  );
}

export default App;
