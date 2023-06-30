import { Button, Container, TextField } from "@mui/material";
import { Component } from "react";
import './Navbar.css'
import React from "react";

class SearchForm extends Component<{ onSearch: (searchText: string) => void }> {
    state = {
        searchText: "",
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchText: event.target.value });
    };

    handleSearch = () => {
        const { onSearch } = this.props;
        const { searchText } = this.state;
        onSearch(searchText);
    };

    render() {
        const { searchText } = this.state;

        return (
            <>
                <Container sx={{ display: 'flex', alignContent: 'center', width: '700px', padding: '10px' }}>
                    <TextField
                        color="error"
                        label="Enter text"
                        value={searchText}
                        onChange={this.handleInputChange}
                        size="small"
                        fullWidth
                        sx={{ marginRight: '10px' }}
                    />

                    <Button
                        variant="contained"
                        onClick={this.handleSearch} >
                        Search
                    </Button>
                </Container>
            </>
        )
    }
}

export default SearchForm;