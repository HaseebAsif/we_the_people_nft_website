import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

export default function About() {
  return (
    <Flex
      maxW="1200px"
      mx="auto"
      flexDirection="column"
      alignItems="center"
      py="30px"
      id="team"
      px={{ base: '20px', md: 0 }}
    >
      <Heading
        color="button"
        fontSize={{ base: '4xl', md: '6xl' }}
        // fontWeight="bold"
        mt={{ base: '50px', md: '220px' }}
        mb={{ base: '30px', md: '100px' }}
      >
        THE TEAM
      </Heading>

      <Flex
        mb="50px"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box position="relative" maxW="420px">
          <Image src={`${process.env.PUBLIC_URL}/2.png`} />
          <Flex justifyContent="space-between" alignItems="center" mt="30px">
            <Text
              fontSize={{ base: '14px', md: '20px' }}
              color="white"
              opacity="0.7"
            >
              CRYPTO AND NFT EXPERT, FOUNDER
            </Text>
            <Flex alignItems="center">
              <Box as="button" mr="20px">
                <BsFillArrowLeftCircleFill color="white" size="30" />
              </Box>
              <Box as="button">
                <BsFillArrowRightCircleFill color="white" size="30" />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box ml={{ base: 0, md: '50px' }} mt={{ base: '30px', md: 0 }}>
          <Heading
            color="white"
            mb="20px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            DONALD TRUNK
          </Heading>
          <Text
            mb="10px"
            maxW="500px"
            minW="300px"
            mx="auto"
            textAlign="justify"
            px={{ base: '20px', md: 0 }}
            color="white"
            fontSize="18px"
          >
            Donald Trunk’s superpower is crypto. After achieving an incredible
            rate of return on his own investments, Mr. Trunk offers his
            expertise in many different ways to the community. He was an
            integral part in forming the economic model within our roadmap, and
            without him, We The People NFT would not be possible.
          </Text>
          <Text
            maxW="500px"
            minW="300px"
            mx="auto"
            textAlign="justify"
            px={{ base: '20px', md: 0 }}
            color="white"
            fontSize="18px"
          >
            As we expand, he will continue to use his knowledge of the market to
            help grow the wealth of the entire We The People community. This
            elite understanding of crypto, economics, and community building
            will fuel the project for years to come.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
