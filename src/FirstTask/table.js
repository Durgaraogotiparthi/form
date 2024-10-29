import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email};

    console.log("Submitting data:", data);

    try {
      const response = await axios.post('http://localhost:3000/user', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Form submitted successfully:", response.data);
      
    
      setName("");
      setEmail("");

    } catch (err) {
      console.error("Form submit failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mb={4}>
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <Button type="submit" colorScheme="teal">Submit</Button>
    </form>
  );
}

export default Form;
