import Box from '@mui/material/Box';
import {useState, useEffect } from "react";
import Tarjeta from './Tarjeta';
import Busqueda from './Busqueda';


const SeccionPrincipal = ({busqueda}) =>{
  const [personajes, setPersonajes] = useState([]);
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, [busqueda]);



    return(
        <Box sx={{ display: "flex", 
                    flexDirection: "column",
                     alignItems: "center", 
                     marginTop: 10 }}>
         
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:"Center", m: 4 }}
            >           
                {personajes.map((personaje) =>(

                    <Tarjeta
                    imagen={personaje.image}
                    nombre={personaje.name}
                    status={personaje.status}
                    id={personaje.id}
                    />
            
                ))}
                        
            </Box>
        </Box>
    )
}

export default SeccionPrincipal