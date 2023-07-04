import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import './Navbar.css'
import React from "react";

interface SearchFormProps {
    onSearch: (searchText: string) => void;
  }
//function SearchForm (onSearch: (searchText: string) => void)  {

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <>
            <Container sx={{ display: 'flex', alignContent: 'center', width: '700px', padding: '10px' }}>
                <TextField
                    color="error"
                    label="Enter text"
                    value={searchText}
                    onChange={handleInputChange}
                    size="small"
                    fullWidth
                    sx={{ marginRight: '10px' }}
                />
                <Button
                    variant="contained"
                    onClick={handleSearch} >
                    Search
                </Button>
            </Container>
        </>
    )
}

export default SearchForm;