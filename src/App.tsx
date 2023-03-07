import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PossibleRoutes } from './utils/constants';
import AppBar from './features/AppBar/AppBar';
import LandingPage from './pages/LandingPage/LandingPage';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './configs/firebase.configs';
import AuthProvider from './App.authProvider';

initializeApp(firebaseConfig);

const App = () => {

  const routes = (
    <Routes>
      <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
    </Routes>
  );

  return (
    <AuthProvider>
      <Router>
        <AppBar/>
        <main>
          {routes}
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
