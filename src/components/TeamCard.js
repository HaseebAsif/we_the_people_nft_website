import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react';
export default function TeamCard({ image, name, position ="", display }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // w={{ base: '100%', md: '50%', lg: '25%' }}
      maxW="300px"
      mx="auto"
      mr="10px"
      display={display}
    >
      <Flex justifyContent="center" position="relative" maxW="280px">
        <Image src={`${process.env.PUBLIC_URL}/${image}`} />
      </Flex>
      <Heading mt="30px" color="white">
        {name}
      </Heading>
      {position && (
        <Text mb="30px" color="white">
          {position}
        </Text>
      )}
    </Flex>
  );
}
