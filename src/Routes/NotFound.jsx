// src/Routes/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box textAlign="center" p={4} color="red.500">
      <Heading as="h2" size="lg" fontWeight="bold">
        404 | Not Found
      </Heading>
      <Text mt={4}>The page you are looking for does not exist.</Text>
      <Button 
        data-testid="back" 
        onClick={handleGoBack} 
        mt={4} 
        colorScheme="blue" 
        variant="solid">
        Go Back
      </Button>
    </Box>
  );
};

export default NotFound;
