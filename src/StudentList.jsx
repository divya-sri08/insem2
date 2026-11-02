
import React from 'react';
import { Link } from 'react-router-dom';

function StudentList() {
  const students = [
    { id: 1, name: 'Divya Sri' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Priya' }
  ];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <p key={student.id}>
          <Link to={`/student/${student.id}`}>
            {student.name}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default StudentList;
