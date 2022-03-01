import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

const Tarjeta = ({imagen,nombre,status,id}) =>{
    console.log(id)
    return(
        <Box>
            <Link to={`/detallesPersonajes/${id}`} >
                <Card sx={{ width: 345, m: 2 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image={imagen}
                        />
                        <CardContent>
                        <Typography variant="h6" gutterBottom component="div">
                            Nombre: {nombre}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Status: {status}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Box>
       

    )
}

export default Tarjeta