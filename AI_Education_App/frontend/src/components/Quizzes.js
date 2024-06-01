import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const result = await axios.get('http://localhost:8000/api/quizzes/', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setQuizzes(result.data);
    };
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quizzes;
