import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

interface SearchFormProps {
    onSearch: (searchText: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    const clear = () => {
        setSearchText('')
    }

    return (
        <>
            <Container sx={{ display: 'flex', alignContent: 'center', width: '700px', padding: '10px' }}>
                <TextField
                    color="error"
                    label="Enter text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    size="small"
                    fullWidth
                    sx={{ marginRight: '10px' }}
                />
                <Link to='/'>
                    <Button
                        variant="contained"
                        onClick={handleSearch} >
                        Search
                    </Button>
                </Link>
                <button onClick={clear}>CLear m e</button>
            </Container>
        </>
    )
}

export default SearchForm;