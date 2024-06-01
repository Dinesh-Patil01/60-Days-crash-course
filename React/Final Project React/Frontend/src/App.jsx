import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tickets from './pages/Tickets';
import TicketView from './pages/TicketView';
import TicketCreate from './pages/TicketCreate';
import TicketEdit from './pages/TicketEdit';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
            <Route path="/tickets" element={<PrivateRoute><Tickets /></PrivateRoute>} />
            <Route path="/tickets/create" element={<PrivateRoute><TicketCreate /></PrivateRoute>} />
            <Route path="/tickets/:id" element={<PrivateRoute><TicketView /></PrivateRoute>} />
            <Route path="/tickets/:id/edit" element={<PrivateRoute><TicketEdit /></PrivateRoute>} />
          </Routes>
        
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
