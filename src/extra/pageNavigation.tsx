import React from 'react';
import { Container, Button } from '@mui/material';
import { KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon, KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon } from '@mui/icons-material';
import './pageNavigation.css'

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const NavigationButtons: React.FC<PaginationButtonsProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Container className='container' sx={{ display: 'flex' }}>
      <Button
      variant='contained'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        color="inherit"
        size='small'
        sx={{marginRight : '10px', color:'black', borderRadius : '10px'}}
      >
        <KeyboardDoubleArrowLeftIcon />
      </Button>
      <h4>Page {currentPage}</h4>
      <Button
        color='inherit'
        variant='contained'
        size='small'
        sx={{ marginLeft: '10px', color: 'black', borderRadius: '10px' }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
      >
        <KeyboardDoubleArrowRightIcon />
      </Button>
    </Container>
  );
};

export default NavigationButtons;