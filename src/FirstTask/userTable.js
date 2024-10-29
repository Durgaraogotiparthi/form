import React, { useState, useEffect } from 'react';
import {Box,
Table,Thead,Tbody,Tfoot,
Tr,Th,Td,Button,HStack,Container,Text,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,
ModalFooter,FormControl,FormLabel,Input,Heading,
Spacer,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import WithoutZod from './withoutzod';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [isValidationModalOpen, setIsValidationModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    id: null,
    name: '',
    email: '',
    phone: '',
    city: '',
    company: '',
  });

  const schema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email format." }),
    phone: z.string().regex(/^\d{10}$/, { message: "Phone must be a 10-digit number." })
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers && savedUsers !== "undefined") {
      setUsers(JSON.parse(savedUsers));
    } else {
      fetchUsers();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Fetching data failed:", error);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openValidationModal = () => {
    setIsValidationModalOpen(true);
    reset();
  };

  const closeValidationModal = () => {
    setIsValidationModalOpen(false);
    setNewUser({ id: null, name: '', email: '', phone: '', city: '', company: '' });
    reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitWithValidation = async (data) => {
    setLoading(true);
    reset();
    const userToAdd = {
      id: newUser.id !== null ? newUser.id : users.length + 1,
      ...data,
      address: { city: newUser.city },
      company: { name: newUser.company || 'New Company' },
    };
    
    if (newUser.id !== null) {
      const updatedUsers = users.map(user => user.id === newUser.id ? userToAdd : user);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    } else {
      const updatedUsers = [...users, userToAdd];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    closeValidationModal();
    setLoading(false);
  };

  const handleEditUser = (user) => {
    setNewUser({ 
      id: user.id, 
      name: user.name, 
      email: user.email, 
      phone: user.phone, 
      city: user.address.city, 
      company: user.company.name 
    });
    reset(user);
    openValidationModal();
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <Container maxW="container.lg" mt={4}>
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" width="100%">
        <Text fontSize="2xl" mb={4} textAlign="center" color="teal.500">
          User Management
        </Text>
        <HStack justify="flex-end" mb={4} bg="lightblue" p="2">
          <Heading>Durgarao</Heading>
          <Spacer />
          <Button colorScheme="teal" onClick={openValidationModal}>
            Add User
          </Button>
          <WithoutZod/>
        </HStack>
        <Table variant="striped" colorScheme="teal" size="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>City</Th>
              <Th>Company</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentUsers.map((user) => (
              <Tr key={user.id}>
                <Td maxW="150px" wordBreak="break-all">{user.name}</Td>
                <Td maxW="150px" wordBreak="break-all">{user.email}</Td>
                <Td maxW="150px" wordBreak="break-all">{user.phone}</Td>
                <Td maxW="150px" wordBreak="break-all">{user.address.city}</Td>
                <Td maxW="150px" wordBreak="break-all">{user.company.name}</Td>
                <Td>
                  <HStack spacing={2}>
                    <Button colorScheme="blue" onClick={() => handleEditUser(user)}>
                      Edit
                    </Button>
                    <Button colorScheme="red" onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan={5}>Total Users: {users.length}</Td>
            </Tr>
          </Tfoot>
        </Table>
        <HStack spacing={4} justify="center" mt={4}>
          <Button onClick={handlePrevPage} isDisabled={currentPage === 1} leftIcon={<ChevronLeftIcon />}>
            Previous
          </Button>
          <Text>
            Page {currentPage} of {totalPages}
          </Text>
          <Button onClick={handleNextPage} isDisabled={currentPage === totalPages} rightIcon={<ChevronRightIcon />}>
            Next
          </Button>
        </HStack>
      </Box>

      <Modal isOpen={isValidationModalOpen} onClose={closeValidationModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{newUser.id ? 'Edit User' : 'Add New User'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" isInvalid={errors.name} mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" {...register("name")} defaultValue={newUser.name} />
              {errors.name && <Text color="red.500">{errors.name.message}</Text>}
            </FormControl>
            <FormControl id="email" isInvalid={errors.email} mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register("email")} defaultValue={newUser.email} />
              {errors.email && <Text color="red.500">{errors.email.message}</Text>}
            </FormControl>
            <FormControl id="phone" isInvalid={errors.phone} mb={4}>
              <FormLabel>Phone</FormLabel>
              <Input type="text" {...register("phone")} defaultValue={newUser.phone} />
              {errors.phone && <Text color="red.500">{errors.phone.message}</Text>}
            </FormControl>
            <FormControl id="city" mb={4}>
              <FormLabel>City</FormLabel>
              <Input type="text" name="city" onChange={handleInputChange} defaultValue={newUser.city} />
            </FormControl>
            <FormControl id="company" mb={4}>
              <FormLabel>Company</FormLabel>
              <Input type="text" name="company" onChange={handleInputChange} defaultValue={newUser.company} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeValidationModal}>Close</Button>
            <Button colorScheme="teal" ml={3} isLoading={loading} onClick={handleSubmit(onSubmitWithValidation)}>
              {newUser.id ? 'Update' : 'Submit'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default UserTable;
