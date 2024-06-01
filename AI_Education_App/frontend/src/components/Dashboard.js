import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      const result = await axios.get('http://localhost:8000/api/progress/', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setProgress(result.data);
    };
    fetchProgress();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {progress.map((item) => (
          <li key={item.id}>
            Lesson: {item.lesson.title}, Score: {item.score}, Completed: {item.completed.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
