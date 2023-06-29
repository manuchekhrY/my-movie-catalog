import { Button, Container, Grid, IconButton } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const MovieItem = () => {
    return (
        <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent:'center' }}>
            <IconButton color="primary" sx={{marginRight: '10px'}}>
                <KeyboardDoubleArrowLeftIcon />
            </IconButton>
            <h3>Page</h3>
            <IconButton color="primary" sx={{marginLeft: '10px'}}>
                <KeyboardDoubleArrowRightIcon />
            </IconButton>
        </Container>

    )
}

export default MovieItem;
