import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Tarjeta = ({imagen,nombre,status}) =>{
    return(
        <Box>
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
        </Box>
       

    )
}

export default Tarjeta