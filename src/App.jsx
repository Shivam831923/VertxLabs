import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Mainlayout } from './routes/Routes';
import Profile from './components/profile/Profile';
import AnalyticsDashboard from './components/analytics/AnalyticsDashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route path='profile' element={<Profile />} />
        <Route path="analytics" element={<AnalyticsDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;




