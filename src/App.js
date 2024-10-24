import { Text, CardBody, Card, SimpleGrid, Heading, Box, Button, useToast, Spacer, Flex } from '@chakra-ui/react';
import { PhoneIcon,EmailIcon} from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const toast  = useToast()
    const showData = ()=>{
        toast({
            title:"View User Details....",
            isClosable:true,
        })
    }

    useEffect(() => {
        async function fetchUsers() {
            const url = 'https://jsonplaceholder.typicode.com/users';

            try {
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                let users = await response.json(); 
                setUsers(users); 
            } catch (error) {
                console.log('Error:', error); 
            } finally {
                setLoading(false); 
            }
        }

        fetchUsers(); 
    }, []); 

    return (
        <div  style={{ padding: '20px' }} >
            <Flex as='nav' gap={3} p='3' alignItems='center' backgroundColor='tomato'>
            <Heading mb="3" textAlign="center">User Names</Heading>
            <Spacer/>
            <Button>Contact Us</Button>
            <Button>Log Out</Button>
            </Flex>

            <Card>
                <CardBody>
                    {loading ? ( 
                        <Text>Loading...</Text>
                    ) : (
                        <SimpleGrid columns={[1, null, 3]} spacing={4}>
                            {users.map((user) => (
                                <Card key={user.id} p={4} boxShadow="md">
                            <CardBody>
                                <Box>
                                    <Heading as='h6' fontSize="md" display="inline">UserName:</Heading>
                                    <span style={{ marginLeft: '8px' }}>{user.name}</span>
                                </Box>
                                <Box>
                                    <Heading as='h6' fontSize="md" display="inline">Website:</Heading>
                                    <span style={{ marginLeft: '8px' }}>{user.website}</span>
                                </Box>
                                <Box>
                                    <Heading as='h6' fontSize="md" display="inline"><EmailIcon/> Email:</Heading>
                                    <span style={{ marginLeft: '8px' }}>{user.email}</span>
                                </Box>
                                
                                <Box>
                                    <Heading as='h6' fontSize="md" display="inline"><PhoneIcon/> Phone:</Heading>
                                    <span style={{ marginLeft: '8px' }}>{user.phone}</span>
                                </Box>
                                <Button textAlign="center" mt="2" onClick={showData}>Viewmore</Button>
                            </CardBody>
                                </Card>
                            ))}
                        </SimpleGrid>
                    )}
                </CardBody>
            </Card>
        </div>
    );
  // return (
  //   <div className="App">
  //     <h1>Hi</h1>
  //     <Heading>Hello World!!!</Heading>
  //   </div>
  // );
}

export default App;
