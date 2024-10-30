// src/Components/Navbar.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="gray.200" p={4}>
      <Flex>
        <Link as={RouterLink} to="/" data-testid="home-page" color="blue.500" mr={4}>
          Student Portal
        </Link>
        <Link as={RouterLink} to="/student" data-testid="student-page" color="blue.500" mr={4}>
          All Students
        </Link>
        <Link as={RouterLink} to="/add" data-testid="add-page" color="blue.500">
          Add Student
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
