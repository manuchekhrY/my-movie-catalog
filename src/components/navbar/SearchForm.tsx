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

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <Container sx={{ display: 'flex', alignItems: 'center', width: '500px' }} >
            <TextField
                color="info"
                placeholder="Enter Movie Name"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                size="small"
                fullWidth
                sx={{ marginRight: '10px', backgroundColor: 'white', borderRadius: '5px' }}
                onKeyDown={handleKeyDown}
            />
            <Link to='/'>
                <Button
                    variant="contained"
                    color="inherit"
                    size="large"
                    onClick={handleSearch}
                    sx={{ borderRadius: '10px', color: "black" }}
                >
                    Search
                </Button>
            </Link>
        </Container>
    )
}

export default SearchForm;