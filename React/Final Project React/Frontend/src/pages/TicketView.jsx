import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Text } from '@chakra-ui/react';

const TicketView = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await axios.get(`http://localhost:5000/tickets/${id}`);
      setTicket(response.data);
    };
    fetchTicket();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/tickets/${id}`);
    navigate('/tickets');
  };

  if (!ticket) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">{ticket.title}</Text>
      <Text>{ticket.description}</Text>
      <Text>Assignee: {ticket.assignee}</Text>
      <Text>Status: {ticket.status}</Text>
      <Text>Priority: {ticket.priority}</Text>
      <Link to={`/tickets/${id}/edit`}>
        <Button mt={3} colorScheme="teal">Edit</Button>
      </Link>
      <Button mt={3} colorScheme="red" onClick={handleDelete}>Delete</Button>
    </Box>
  );
};

export default TicketView;
