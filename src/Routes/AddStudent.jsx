// src/Routes/AddStudent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [form, setForm] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const facultyMap = {
      "Ekonomi": "Fakultas Ekonomi",
      "Manajemen": "Fakultas Ekonomi",
      "Akuntansi": "Fakultas Ekonomi",
      "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
      "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
      "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
      "Teknik Sipil": "Fakultas Teknik",
      "Arsitektur": "Fakultas Teknik",
      "Matematika": "Fakultas Teknologi Informasi dan Sains",
      "Fisika": "Fakultas Teknologi Informasi dan Sains",
      "Informatika": "Fakultas Teknologi Informasi dan Sains",
    };

    const newStudent = {
      ...form,
      faculty: facultyMap[form.programStudy],
    };

    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    }).then(() => navigate("/student"));
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">Fullname</label>
        <input
          data-testid="name"
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={handleChange}
        />
        <label htmlFor="input-profilePicture">Profile Picture URL</label>
        <input
          data-testid="profilePicture"
          name="profilePicture"
          placeholder="Profile Picture URL"
          value={form.profilePicture}
          onChange={handleChange}
        />
        <label htmlFor="input-address">Address</label>
        <input
          data-testid="address"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <label htmlFor="input-phoneNumber">Phone Number</label>
        <input
          data-testid="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="input-date">Birth Date</label>
        <input
          data-testid="date"
          name="birthDate"
          type="date"
          value={form.birthDate}
          onChange={handleChange}
        />
        <label htmlFor="input-gender">Gender</label>
        <select
          data-testid="gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label htmlFor="prody">Program Study</label>
        <select
          data-testid="prody"
          name="programStudy"
          value={form.programStudy}
          onChange={handleChange}
        >
          <option value="">Select Program Study</option>
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
        </select>
        <button data-testid="add-btn" type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;