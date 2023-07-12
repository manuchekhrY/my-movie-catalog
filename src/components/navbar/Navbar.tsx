import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import './Navbar.css'

interface NavbarProps {
    onClick: () => void;
    onSearch: (query: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ onClick, onSearch }) => {

    return (
        <AppBar position="static" >
            <Container maxWidth='xl' className="outer" >
                <Toolbar className="navbar">
                    <Link className="link" to='/'>
                        <Button
                            color="inherit"
                            size="large"
                            variant="contained"
                            sx={{ marginRight: '10px', alignSelf: 'center', borderRadius: "10px", color: 'black' }}
                        >
                            Movie Catalogue
                        </Button>
                    </Link>
                    <SearchForm onSearch={onSearch} />
                    <Link to='/'>
                        <Button
                            color="inherit"
                            size="large"
                            variant="contained"
                            onClick={onClick}
                            sx={{ borderRadius: '10px', color: "black" }}
                        >
                            Top Movies
                        </Button>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;