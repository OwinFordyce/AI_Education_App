import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await axios.get('http://localhost:8000/api/userprofiles/', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setProfile(result.data);
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {profile.user?.username}</p>
      <p>Email: {profile.user?.email}</p>
      <p>Learning Style: {profile.learning_style}</p>
    </div>
  );
}

export default Profile;
