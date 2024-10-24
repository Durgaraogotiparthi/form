import React, { useState } from 'react';
import { Box, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react';
import './App.css';

const teams = [
  {
    name: 'Bengal Warriors',
    details: 'The Bengal Warriors are a professional Kabaddi team based in Kolkata, West Bengal.'
  },
  {
    name: 'Bengaluru Bulls',
    details: 'Bengaluru Bulls is a franchise based in Bengaluru, Karnataka, and one of the strongest teams in the Pro Kabaddi League.'
  },
  {
    name: 'Dabang Delhi KC',
    details: 'Dabang Delhi KC is a Delhi-based Kabaddi team that has made a strong impact in the league.'
  },
  {
    name: 'Gujarat Giants',
    details: 'Gujarat Giants are known for their strong defense and teamwork in the Pro Kabaddi League.'
  },
  {
    name: 'Haryana Steelers',
    details: 'Haryana Steelers represent the state of Haryana and are known for their aggressive raiders.'
  },
  {
    name: 'Jaipur Pink Panthers',
    details: 'Owned by Bollywood star Abhishek Bachchan, the Jaipur Pink Panthers are one of the original teams of the league.'
  },
  {
    name: 'Patna Pirates',
    details: 'Patna Pirates are the most successful team in Pro Kabaddi League history with multiple championships.'
  },
  {
    name: 'Puneri Paltan',
    details: 'Puneri Paltan is a Pune-based team known for their resilience and competitive spirit.'
  },
  {
    name: 'Tamil Thalaivas',
    details: 'Tamil Thalaivas represent Tamil Nadu and are famous for their never-give-up attitude.'
  },
  {
    name: 'U Mumba',
    details: 'U Mumba is a Mumbai-based franchise and one of the most popular teams in the Pro Kabaddi League.'
  },
  {
    name:"Telugu Titans",
    details:"It is a Hyderabsd Team and one of the best Team..",
    image:"https://www.gettyimages.in/detail/news-photo/the-indian-team-celebrate-winning-the-gold-medal-by-news-photo/72743478"
  }

];

function TeamCard({ name, onClick }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      textAlign="center"
      boxShadow="lg"
      background="white"
      _hover={{ background: 'teal.100', transform: 'scale(1.05)', transition: '0.3s' }}
      onClick={onClick}
      cursor="pointer"
    >
      <Text fontSize="xl" fontWeight="bold" color="teal.700">
        {name}
      </Text>
    </Box>
  );
}



function TeamDetails({ team, onBack }) {
  return (
    <Box textAlign="center" p={5} background="white" borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size="xl" color="teal.700">
        {team.name}
      </Heading>
      <Text fontSize="lg" mt={4} color="gray.600">
        {team.details}
      </Text>
      <Text fontSize="lg" mt={4} color="gray.600">
      </Text>
      <Button mt={6} colorScheme="teal" onClick={onBack}>
        Back
      </Button>
    </Box>
  );
}

function Kabaddi() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  const handleBackClick = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="team">
      <Box background="teal.600" minHeight="100vh" p={10}>
        <Heading as="h1" size="2xl" textAlign="center" color="white" mb={10}>
          Kabaddi Teams
        </Heading>

        {selectedTeam ? (
          <TeamDetails team={selectedTeam} onBack={handleBackClick} />
        ) : (
          <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10}>
            {teams.map((team) => (
              <TeamCard key={team.name} name={team.name} onClick={() => handleTeamClick(team)} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </div>
    
  );
}

export default Kabaddi;
