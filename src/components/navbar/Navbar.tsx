import { AppBar, Button, Container, Toolbar } from "@mui/material";

interface NavbarProps {
    onClick: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ onClick }) => {

    return (
        <AppBar position="static" sx={{ marginBottom: '30px' }}>
            <Container maxWidth='xl' >
                <Toolbar >
                    <Button color="inherit" variant="contained" >Movie Catalog</Button>
                    <Button color="error" variant="contained" sx={{ marginLeft: 'auto' }} onClick={onClick}>Top Movies</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;