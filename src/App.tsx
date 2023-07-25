import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PossibleRoutes } from './utils/constants';
import AppBar from './features/AppBar/AppBar';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AuthProvider from './App.authProvider';
import ContactDevsPage from './pages/ContactDevsPage/ContactDevsPage';
import AppFooter from './features/AppFooter/AppFooter';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export const endpoint: string = process.env.REACT_APP_GQL_ENDPOINT_DEVELOPMENT as string;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    },
  },
});

const App = () => {

  const routes = (
    <Routes>
      <Route path={`${PossibleRoutes.ROOT}`} element={<LandingPage />} />
      <Route path={`${PossibleRoutes.CREATE_ACCOUNT}`} element={<CreateAccountPage />} />
      <Route path={`${PossibleRoutes.LOGIN}`} element={<LoginPage />} />
      <Route path={`${PossibleRoutes.CONTACT_DEVS}`} element={<ContactDevsPage />} />
    </Routes>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <ReactQueryDevtools initialIsOpen={true} />
          <AppBar/>
          <main>
            {routes}
          </main>
          <AppFooter />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
