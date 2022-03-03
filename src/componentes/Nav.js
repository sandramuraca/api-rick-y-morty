
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"


const Nav = ()=>{
    return (
      
          <Box sx={{ flexGrow: 1 }}>
          <AppBar 
          position="fixed"
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Rick & Morty
              </Typography>

              <Button color="inherit">
                <Link to ="/">
                 
                Home
                </Link>
              </Button>

              <Button color="inherit">
                <Link to="/episodios">
                Episodios
                </Link>
              </Button>

              <Button color="inherit">
                <Link to="/ubicaciones">
                Ubicaciones
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      );

}

export default Nav