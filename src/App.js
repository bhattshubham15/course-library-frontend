import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COURSE, ADD_COURSE } from "./graphqueries";
import { useMutation } from '@apollo/client';

function App() {
  const getAllUsers = useQuery(GET_COURSE);
  const [addCourse] = useMutation(ADD_COURSE, {
    variables: {
      course_name: "Rails",
      category: "CSE",
      language: "English",
      email: "acarails@gmail.com",
      price: 800,
      stack: "WEB"
    }
  });
  return (
    <div className="container">
      <form
        onSubmit={e => {
          e.preventDefault();
          addCourse();
        }}
      >
        <button type="submit">Add Course</button>
      </form>
    </div>
  )
}

export default App;
