import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PossibleRoutes } from './utils/constants';
import AppBar from './features/AppBar/AppBar';
import LandingPage from './pages/LandingPage/LandingPage';

const App = () => {

  const routes = (
    <Routes>
      <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
    </Routes>
  );

  return (
    <Router>
      <AppBar/>
      <main>
        {routes}
      </main>
    </Router>
  );
}

export default App;
