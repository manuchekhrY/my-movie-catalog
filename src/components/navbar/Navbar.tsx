import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css'
import SearchForm from "./SearchForm";

interface NavbarProps {
    onClick: () => void;
    onSearch: (query: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ onClick, onSearch }) => {

    return (
        <AppBar position="static" sx={{ marginBottom: '30px' }}>
            <Container maxWidth='xl' >
                <Toolbar >
                    <Link to='/'>
                        <Button className="button-left" color="inherit" variant="contained" >Movie Catalog</Button>
                        <Button className="button-right" color="error" variant="contained" onClick={onClick}>Top Movies</Button>
                    </Link>
                    <SearchForm onSearch={onSearch} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;