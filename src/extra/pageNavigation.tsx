import React from 'react';
import { IconButton, Container } from '@mui/material';
import { KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon, KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon } from '@mui/icons-material';

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const NavigationButtons: React.FC<PaginationButtonsProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent: 'center' }}>
      <IconButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        color="primary"
      >
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <h4>Page {currentPage}</h4>
      <IconButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        color="primary"
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </Container>
  );
};

export default NavigationButtons;
