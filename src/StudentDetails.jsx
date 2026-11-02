
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function StudentDetails() {
  const { id } = useParams();

  const students = [
    { id: 1, name: 'Divya Sri', age: 19, course: 'CSE' },
    { id: 2, name: 'Rahul', age: 20, course: 'ECE' },
    { id: 3, name: 'Priya', age: 19, course: 'IT' }
  ];

  const student = students.find(
    (s) => s.id === Number(id)
  );

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>

      <Link to="/">Back to Student List</Link>
    </div>
  );
}

export default StudentDetails;
