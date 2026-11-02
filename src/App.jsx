
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentList />} />
      <Route path="/student/:id" element={<StudentDetails />} />
    </Routes>
  );
}

export default App;
