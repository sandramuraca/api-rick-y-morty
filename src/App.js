import Nav from './componentes/Nav';
import SeccionPrincipal from './componentes/SeccionPrincipal';
import Footer from './componentes/Footer';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Ubicaciones from './componentes/Ubicaciones';
import DetallePersonaje from './componentes/DetallePersonaje';
import Episodios from './componentes/Episodios';




import './App.css';

const  App = () =>{
  return (
    <Box>
      <BrowserRouter>
       <Nav/> 
         <Routes>
          <Route path="/" element={<SeccionPrincipal/>}/>
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
