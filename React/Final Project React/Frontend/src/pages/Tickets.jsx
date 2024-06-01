import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Grid, GridItem, Select } from '@chakra-ui/react';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get('http://localhost:5000/tickets');
      setTickets(response.data);
    };
    fetchTickets();
  }, []);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const sortedAndFilteredTickets = tickets
    .filter(ticket => !filter || ticket.status === filter)
    .sort((a, b) => {
      if (sort === 'Low to High') return a.priority - b.priority;
      if (sort === 'High to Low') return b.priority - a.priority;
      return 0;
    });

  return (
    <Box>
      <Box mb={4}>
        <Link to="/tickets/create">
          <Button colorScheme="teal">Create Ticket</Button>
        </Link>
      </Box>
      <Box mb={4}>
        <Select placeholder="Sort by Priority" onChange={handleSortChange} mb={3}>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </Select>
        <Select placeholder="Filter by Status" onChange={handleFilterChange}>
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
      </Box>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
        {sortedAndFilteredTickets.map(ticket => (
          <GridItem key={ticket.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Box>
              <Box fontWeight="bold" as="h4" mb={2}>
                {ticket.title}
              </Box>
              <Box>Status: {ticket.status}</Box>
              <Box>Priority: {ticket.priority}</Box>
              <Link to={`/tickets/${ticket.id}`}>
                <Button mt={3} colorScheme="teal">View</Button>
              </Link>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Tickets;
