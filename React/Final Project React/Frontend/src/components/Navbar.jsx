import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Box, Flex, Button, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Box bg="teal.500" p={4}>
      <Flex>
        <Link to="/">Home</Link>
        <Spacer />
        <Link to="/about">About</Link>
        <Spacer />
        <Link to="/contact">Contact</Link>
        <Spacer />
        <Link to="/tickets">Tickets</Link>
        <Spacer />
        {isLoggedIn ? (
          <Button colorScheme="teal" variant="outline" onClick={logout}>
            LOGOUT
          </Button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
