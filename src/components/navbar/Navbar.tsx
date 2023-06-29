import { AppBar, Button, Container, Toolbar } from "@mui/material";
//import { SearchForm } from "./SearchForm";

export function Navbar() {

    const styles = {
        loginButton: {
            my: 2,
            height : '36.5px',
            color: 'white',
            display: 'flex',
            marginLeft: 'auto',
            outline: 'white',
            lineHeight: 1,
            
        }
    }
    return (
        <AppBar position="static" sx={{marginBottom:'30px'}}>
            <Container maxWidth='xl' >
                <Toolbar disableGutters>
                    <Button color="inherit" variant="contained">Movie Catalog</Button>
                    
                    <Button sx={styles.loginButton}  variant="contained">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}