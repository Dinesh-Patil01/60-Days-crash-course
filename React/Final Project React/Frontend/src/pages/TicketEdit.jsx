import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Input, Textarea, Select, Button } from '@chakra-ui/react';

const TicketEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await axios.get(`http://localhost:5000/tickets/${id}`);
      const ticket = response.data;
      setTitle(ticket.title);
      setDescription(ticket.description);
      setAssignee(ticket.assignee);
      setStatus(ticket.status);
      setPriority(ticket.priority);
    };
    fetchTicket();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTicket = { title, description, assignee, status, priority };
    await axios.put(`http://localhost:5000/tickets/${id}`, updatedTicket);
    navigate('/tickets');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mb={3}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mb={3}
        />
        <Select
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          mb={3}
        >
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          {/* Add more assignees as needed */}
        </Select>
        <Select
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          mb={3}
        >
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        <Select
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          mb={3}
        >
          {[...Array(10).keys()].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </Select>
        <Button type="submit" colorScheme="teal">Update Ticket</Button>
      </form>
    </Box>
  );
};

export default TicketEdit;
