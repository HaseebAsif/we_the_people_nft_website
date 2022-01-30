import { Box,Image, Flex, Link, Text } from '@chakra-ui/react';

import { FiTwitter,  } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <Box bg="bg" py="20px" px="20px">
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        maxW="1200px"
        w="100%"
        mx="auto"
      >
        <Image src={`${process.env.PUBLIC_URL}/logo.png`} maxW="120px" />
        <Flex
          flexDirection="column"
          alignItems={{ base: 'center', md: 'flex-start' }}
          ml={{ base: '0px', md: '30px' }}
          mt={{ base: '30px', md: '0' }}
        >
          <Text
            mb="20px"
            fontSize="20px"
            color="#FFFFFF"
            textAlign={{ base: 'center', md: 'left' }}
          >
            &copy; {new Date().getFullYear()} We the people NFT, ALL RIGHTS
            RESERVED.
          </Text>
          <Flex>
            <Link
              href="https://discord.gg/hnT8uZmfjq"
              className="link"
              isExternal
              color="bgLight"
            >
              <SiDiscord size="30" />
            </Link>
            <Link
              href="https://twitter.com/wethepeoplenft_?s=21"
              className="link"
              isExternal
              color="bgLight"
              ml="15px"
            >
              <FiTwitter size="30" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
