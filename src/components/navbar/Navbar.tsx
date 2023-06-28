import { AppBar, Button, Container, Grid, Paper, TextField, Toolbar } from "@mui/material";
import './Navbar.css'

export function Navbar() {

    const styles = {
        loginButton: {
            my: 2,
            height : '36.5px',
            color: 'white',
            display: 'flex',
            outline: 'white',
            lineHeight: 1,

        }
    }
    return (
        <AppBar position="static">
            <Container maxWidth='xl' >
                <Toolbar disableGutters>
                    <Button color="inherit" variant="contained">Movie Catalog</Button>
                    <form className="form">
                        <Grid container spacing={1} alignItems="center">
                            <Grid item xs={8}>
                                <TextField style={{color:'red'}} label="Enter text" fullWidth size="small" />
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Button sx={styles.loginButton}  variant="contained">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}