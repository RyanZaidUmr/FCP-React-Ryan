// src/components/Footer.jsx
import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
      className="footer" 
      bgColor="white.100" 
      p={4} 
    >
      <Flex 
        justify="center" 
        align="center" 
        color="black.600" 
      >
        <p className="studentName">Ryan Ramadhan Zaid Umar</p> -
        <p className="studentId">FS11970509</p>
      </Flex>
    </Box>
  );
};

export default Footer;
