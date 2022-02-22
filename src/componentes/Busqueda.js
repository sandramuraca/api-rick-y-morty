import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

//onClick={handleClick}

const Busqueda = ({ escritoInput, clickBoton }
    ) =>{
       

    return(
        <Box>
            <TextField
        sx={{ width: 400 }}
        id="standard-basic"
        label="Search your character"
        variant="standard"
        onChange={escritoInput}
      />
      <Button
        margin="normal"
        variant="outline"
        endIcon={<SearchIcon />}
        onClick={clickBoton}
      >
        Buscar
      </Button>

        </Box>
        
    )
}

export default Busqueda