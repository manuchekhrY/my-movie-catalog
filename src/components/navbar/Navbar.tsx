import { AppBar, Button, Container, Toolbar } from "@mui/material";
import './Navbar.css'

export function Navbar() {

    const styles = {
        loginButton: {
            my: 2,
            height: '40px',
            minWidth: '90px',
            color: 'white',
            display: 'flex',
            marginLeft: 'auto',
            alignItems: 'center',
            outline: 'white',
            textTransform: 'none',
            textAlign: 'center',
            lineHeight: 1,
            Link: {
                textDecoration: 'none',
            }
        }
    }

    return (
        <AppBar position="static">
            <Container maxWidth='xl' >
                <Toolbar disableGutters>
                    <Button color="inherit" variant="contained">Movie Catalog</Button>
                    <Button sx={styles.loginButton}  variant="contained">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}