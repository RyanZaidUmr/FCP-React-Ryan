// src/Routes/AddStudent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  VStack,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

const AddStudent = () => {
  const [fullname, setFullname] = useState("");
  const [faculty, setFaculty] = useState("");
  const [programStudy, setProgramStudy] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { fullname, faculty, programStudy };

    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then(() => {
        // Optionally navigate back to the student list or clear the form
        navigate("/student");
      });
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Add Student</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel htmlFor="fullname">Full Name</FormLabel>
            <Input
              id="fullname"
              placeholder="Enter full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="faculty">Faculty</FormLabel>
            <Select
              id="faculty"
              placeholder="Select faculty"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
            >
              <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
              <option value="Fakultas Ilmu Sosial dan Politik">
                Fakultas Ilmu Sosial dan Politik
              </option>
              <option value="Fakultas Teknik">Fakultas Teknik</option>
              <option value="Fakultas Teknologi Informasi dan Sains">
                Fakultas Teknologi Informasi dan Sains
              </option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="programStudy">Program Study</FormLabel>
            <Input
              id="programStudy"
              placeholder="Enter program study"
              value={programStudy}
              onChange={(e) => setProgramStudy(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Add Student
          </Button>
        </VStack>
      </form>
      <Text mt={4}>
        <Button onClick={() => navigate("/student")}>Cancel</Button>
      </Text>
    </Box>
  );
};

export default AddStudent;
