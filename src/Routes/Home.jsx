import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToStudents = () => {
    navigate("/student");
  };

  return (
    <div>
      <h2>Welcome to the Student Portal</h2>
      <button data-testid="student-btn" onClick={goToStudents}>
        All Students
      </button>
    </div>
  );
};

export default Home;
