import React, { useState, useEffect } from 'react';
import { Heading, Table, Tbody, Td, Th, Thead, Tr, HStack, Spacer, Input, Box} from "@chakra-ui/react";

function Employee() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      let response = await fetch('https://dummyjson.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      setStudents(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const filteredStudents = students.filter((student) =>
    student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.phone.includes(searchQuery)
  );

  return (
    <div>
      {/* <Heading textAlign="center" mt="4">List of Students</Heading> */}

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
          {filteredStudents.map((student, index) => (
            <Tr key={index}>
              <Td border="1px solid black">{student.firstName} {student.lastName}</Td>
              <Td border="1px solid black">{student.email}</Td>
              <Td border="1px solid black">{student.phone}</Td>
            
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Employee;
