import Nav from './componentes/Nav';
import SeccionPrincipal from './componentes/SeccionPrincipal';
import Footer from './componentes/Footer';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Ubicaciones from './componentes/Ubicaciones';
import PersonajeDetalle from './componentes/PersonajeDetalle';
import Episodios from './componentes/Episodios';


import './App.css';

const  App = () =>{
  return (
    <Box>
      <BrowserRouter>
       <Nav/> 
       <SeccionPrincipal/>
        <Routes>
          <Route path="/" element={<SeccionPrincipal/>}/>
          <Route path="/personaje/:idPersonaje" element={<PersonajeDetalle/>}/>
          <Route path="/episodios" element={<Episodios/>}/>
          <Route path="/ubicaciones" element={<Ubicaciones/>}/>
        </Routes>
      </BrowserRouter>
   
     <Footer />
    </Box>
    
  );
}

export default App;
