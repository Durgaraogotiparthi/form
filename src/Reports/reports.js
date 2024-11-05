import React, { useState } from 'react';
import { Box, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react';
import Students from './student'; 
import Teachers from './teachers';
import Employee from './emploee';

const reports = [
  {
    name: 'Students',
    component: <Students />,
  },
  {
    name: 'Teachers',
    component: <Teachers />,
  },
  {
    name: 'Employees',
    component: <Employee />,
  },
];

function ReportCard({ report, onClick }) {
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
        {report.name}
      </Text>
    </Box>
  );
}

function Reports() {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleBackClick = () => {
    setSelectedReport(null);
  };

  return (
    <div>
      <Box background="teal.600" minHeight="100vh" p={10}>
      {!selectedReport && (
          <Heading as="h1" size="2xl" textAlign="center" color="white" mb={10}>
            Reports
          </Heading>
        )}

        {selectedReport ? (
          <Box textAlign="center" p={5} background="white" borderRadius="lg" boxShadow="lg">
            <Heading as="h2" size="xl" color="teal.700" mb={3}>{selectedReport.name}</Heading>
            {selectedReport.component} 
            <Button mt={6} colorScheme="teal" onClick={handleBackClick}>
              Back
            </Button>
          </Box>
        ) : (
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
            {reports.map((report) => (
              <ReportCard key={report.name} report={report} onClick={() => handleReportClick(report)} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </div>
  );
}

export default Reports;
