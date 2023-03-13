import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PossibleRoutes } from './utils/constants';
import AppBar from './features/AppBar/AppBar';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './configs/firebase.configs';
import AuthProvider from './App.authProvider';

initializeApp(firebaseConfig);
//Working here, need to create login form to test firebaseConfig

const App = () => {

  const routes = (
    <Routes>
      <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
      <Route path={`${PossibleRoutes.CREATE_ACCOUNT}`} element={<CreateAccountPage />} />
      <Route path={`${PossibleRoutes.LOGIN}`} element={<LoginPage />} />
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
