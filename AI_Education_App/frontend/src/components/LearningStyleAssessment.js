import React, { useState } from 'react';
import axios from 'axios';

function LearningStyleAssessment() {
  const [learningStyle, setLearningStyle] = useState('');

  const handleAssessment = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/userprofiles/', {
        learning_style: learningStyle,
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      // Redirect to dashboard or display a message
    } catch (error) {
      console.error('There was an error submitting the assessment!', error);
    }
  };

  return (
    <div>
      <h2>Learning Style Assessment</h2>
      <form onSubmit={handleAssessment}>
        <label>
          <input
            type="radio"
            value="visual"
            checked={learningStyle === 'visual'}
            onChange={(e) => setLearningStyle(e.target.value)}
          />
          Visual
        </label>
        <label>
          <input
            type="radio"
            value="auditory"
            checked={learningStyle === 'auditory'}
            onChange={(e) => setLearningStyle(e.target.value)}
          />
          Auditory
        </label>
        <label>
          <input
            type="radio"
            value="reading/writing"
            checked={learningStyle === 'reading/writing'}
            onChange={(e) => setLearningStyle(e.target.value)}
          />
          Reading/Writing
        </label>
        <label>
          <input
            type="radio"
            value="kinesthetic"
            checked={learningStyle === 'kinesthetic'}
            onChange={(e) => setLearningStyle(e.target.value)}
          />
          Kinesthetic
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LearningStyleAssessment;
