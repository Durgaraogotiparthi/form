import React, { useState, useEffect } from 'react';
import { Heading, Table, Tbody, Td, Th, Thead, Tr, HStack, Spacer, Input, Box } from "@chakra-ui/react";
import UserModal from './create';

function Home() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const postData = async () => {
    let fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    try {
      if (!fetchData.ok) {
        throw new Error(fetchData.status);
      }
    } catch (error) {
      console.log(error);
    }
    let convertPost = await fetchData.json();
    setUsers(convertPost);
  };

  useEffect(() => {
    postData();
  }, []);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
  };

 
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  );

  return (
    <div>
      <Heading textAlign="center" mt="4">List of Users</Heading>
      
      <HStack justify="flex-end" mb={4} bg="lightblue" p="2">
        <Heading>Durgarao</Heading>
        <Spacer />
        <Box>
        <Input
          placeholder="Search by name, email, or phone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="md"
        />
      </Box>
        <UserModal onAddUser={handleAddUser} textAlign="right" />
      </HStack>

     
      
      
      <Table variant="simple" border="1px solid black">
        <Thead>
          <Tr>
            <Th border="1px solid black">Name</Th>
            <Th border="1px solid black">Email</Th>
            <Th border="1px solid black">Phone</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredUsers.map((user, index) => (
            <Tr key={index}>
              <Td border="1px solid black">{user.name}</Td>
              <Td border="1px solid black">{user.email}</Td>
              <Td border="1px solid black">{user.phone}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Home;
