import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const DetallePersonaje=() =>{

    const params = useParams();
    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
          .then((res) => res.json())
          .then((data) => {
            setPersonaje(data);
          });
      });

    return(
      
        <Box>
            <Card
            sx={{ width: 300, height: 400, m: 2, bgcolor: "black", color: "white" }}
            >
                <CardContent>
                    <CardMedia height="280" component="img" image={personaje.image} />
                    <Typography variant="h6">{personaje.name}</Typography>
                    <Typography variant="body2">{personaje.species}</Typography>
                    <Typography variant="body2">{personaje.status}</Typography>
                </CardContent>
            </Card>
        </Box>
        
    )
    }
    
    export default DetallePersonaje