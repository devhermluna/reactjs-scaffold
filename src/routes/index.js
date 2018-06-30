import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// pages/components
import Posts from '../pages/Posts';

export default () => {
  return (
    <Router>
      <Route path="/" component={Posts}/>
    </Router>
  )
}