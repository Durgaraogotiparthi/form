import React, { useEffect, useState } from 'react';
import './App.css'; 

const Appss = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h2>Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#fff' }}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Appss;










// import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
// import React, { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");
//   const [address, setAddress] = useState("");
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { name, email, age, address };

//     // Log the data for debugging
//     console.log("Submitting data:", data);

//     fetch('http://localhost:3000/data', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Form submitted successfully:", data);
//       })
//       .catch((err) => {
//         console.error("Form submit failed:", err);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <FormControl mb={4}>
//         <FormLabel>Name:</FormLabel>
//         <Input
//           type="text"
//           name="name"
//           border="1px solid"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </FormControl>
      
//       <FormControl mb={4}>
//         <FormLabel>Email:</FormLabel>
//         <Input
//           type="email"
//           name="email"
//           border="1px solid"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//       </FormControl>
      
//       <FormControl mb={4}>
//         <FormLabel>Age:</FormLabel>
//         <Input
//           type="number"
//           name="age"
//           border="1px solid"
//           value={age}
//           onChange={(e) => setAge(e.target.value)} 
//         />
//       </FormControl>
      
//       <FormControl mb={4}>
//         <FormLabel>Address:</FormLabel>
//         <Input
//           type="text"
//           name="address"
//           border="1px solid"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)} 
//         />
//       </FormControl>
      
//       <Button type="submit" colorScheme="teal">Submit</Button>
//     </form>
//   );
// }

// export default Form;
