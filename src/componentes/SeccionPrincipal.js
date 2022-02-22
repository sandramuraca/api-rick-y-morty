import Box from '@mui/material/Box';
import {useState, useEffect } from "react";
import Tarjeta from './Tarjeta';
import Busqueda from './Busqueda';




const SeccionPrincipal = () =>{

  const [personajes, setPersonajes] = useState([]);

  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, [busqueda]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    console.log(valorDelInput);
    setBusqueda(valorDelInput);
  };


    return(
        <Box sx={{ display: "flex", 
                    flexDirection: "column",
                     alignItems: "center", 
                     marginTop: 10 }}>
            <Box>
            <Busqueda
                escritoInput={handleChange} 
                clickBoton={handleClick}
                    />                
            </Box>
        
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:"Center", m: 4 }}
            >           
                {personajes.map((personaje) =>(

                    <Tarjeta
                    imagen={personaje.image}
                    nombre={personaje.name}
                    status={personaje.status}
                    />
            
                ))}
                        
            </Box>
        </Box>
    )
}

export default SeccionPrincipal