import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LearningStyleAssessment from './components/LearningStyleAssessment';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Quizzes from './components/Quizzes';
import Exercises from './components/Exercises';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/assessment" component={LearningStyleAssessment} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/quizzes" component={Quizzes} />
        <Route path="/exercises" component={Exercises} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

