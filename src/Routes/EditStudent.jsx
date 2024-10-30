// src/Routes/EditStudent.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const EditStudent = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => setStudent(data));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const facultyMap = {
      Ekonomi: "Fakultas Ekonomi",
      Manajemen: "Fakultas Ekonomi",
      Akuntansi: "Fakultas Ekonomi",
      Administrasi: "Fakultas Ilmu Sosial dan Politik",
      Hubungan: "Fakultas Ilmu Sosial dan Politik",
      Teknik: "Fakultas Teknik",
      Matematika: "Fakultas Teknologi Informasi dan Sains",
      Fisika: "Fakultas Teknologi Informasi dan Sains",
      Informatika: "Fakultas Teknologi Informasi dan Sains",
    };

    const updatedStudent = {
      ...student,
      faculty: facultyMap[student.programStudy],
    };

    fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStudent),
    }).then(() => navigate("/student"));
  };

  if (!student) {
    return <p>Loading ...</p>;
  }

  return (
    <Box p={5}>
      <Heading mb={4}>Edit Student</Heading>
      <img src={student.profilePicture} alt={student.fullname} className="image-container" />
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel htmlFor="fullname">Full Name</FormLabel>
            <Input
              data-testid="name"
              name="fullname"
              value={student.fullname}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              data-testid="address"
              name="address"
              value={student.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
            <Input
              data-testid="phoneNumber"
              name="phoneNumber"
              value={student.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="birthDate">Birth Date</FormLabel>
            <Input
              data-testid="date"
              name="birthDate"
              type="date"
              value={student.birthDate}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select
              data-testid="gender"
              name="gender"
              value={student.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="programStudy">Program Study</FormLabel>
            <Select
              data-testid="prody"
              name="programStudy"
              value={student.programStudy}
              onChange={handleChange}
            >
              <option value="Ekonomi">Ekonomi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Administrasi Publik">Administrasi Publik</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
              <option value="Hubungan Internasional">Hubungan Internasional</option>
              <option value="Teknik Sipil">Teknik Sipil</option>
              <option value="Arsitektur">Arsitektur</option>
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Informatika">Informatika</option>
            </Select>
          </FormControl>

          <Button data-testid="edit-btn" type="submit" colorScheme="teal" width="full">
            Edit Student
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EditStudent;
