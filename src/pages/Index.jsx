import { Box, Flex, Input, Button, Text, VStack, HStack, Tag, IconButton } from '@chakra-ui/react';
import { FaSearch, FaEnvelope } from 'react-icons/fa';

const developers = [
  { name: "John Doe", location: "New York, USA", technologies: ["React", "Node"] },
  { name: "Jane Smith", location: "Berlin, Germany", technologies: ["Go", ".NET"] },
  { name: "Carlos Ruiz", location: "Madrid, Spain", technologies: ["JavaScript", "React"] },
];

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" mb={5}>
        <Text fontSize="2xl" fontWeight="bold">Particles Marketplace</Text>
        <Input placeholder="Search developers" width="300px" />
        <Button leftIcon={<FaSearch />} colorScheme="blue">Search</Button>
      </Flex>
      <VStack align="stretch" spacing={4}>
        {developers.map(dev => (
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <HStack justifyContent="space-between">
              <VStack align="left">
                <Text fontWeight="bold">{dev.name}</Text>
                <Text>{dev.location}</Text>
                <HStack>
                  {dev.technologies.map(tech => (
                    <Tag>{tech}</Tag>
                  ))}
                </HStack>
              </VStack>
              <IconButton aria-label="Send message" icon={<FaEnvelope />} />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;