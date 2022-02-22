import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';

const Footer =() =>{
return(
    
        
        <Box sx={{ flexGrow: 1,
            flexDirection: "column",
            textAlign: "center",
            bgcolor: "black", 
            height: 90}}>
             <Typography variant="h6" sx= {{ color: "white"}}>
               Hecho con Amor por Sandra - 2022 
            </Typography>

              <IconButton
                sx={{ color: "white", pr:4 }}>
                  <LinkedInIcon  fontSize="large"/>
              </IconButton>
              <IconButton
                sx={{ color: "white",  pr:4 }}>
                  <MailIcon  fontSize="large"/>
              </IconButton>
              <IconButton
                sx={{ color: "white",  pr:4}}>
                  <TwitterIcon  fontSize="large"/>
              </IconButton>
              <IconButton
                sx={{ color: "white",  pr:4 }}>
                  <GitHubIcon  fontSize="large"/>
              </IconButton>
             
        </Box>
        
    
)
}

export default Footer