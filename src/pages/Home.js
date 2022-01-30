import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Heading, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import Countdown from 'react-countdown';
import { Parallax } from 'react-scroll-parallax';

import { CountCard } from '../components';
import { Header } from '../components';

export default function Home({ data, onConnect, address, onMint }) {
  const [count, setCount] = useState(1);
  const { maxSupply, totalSupply, maxMintAmount, cost, loading } = data;

  // Render a completed state
  return (
    <>
      <Flex
        backgroundImage={`${process.env.PUBLIC_URL}/HOMEBG.png`}
        backgroundPosition="center"
        backgroundSize="cover"
        w="100%"
        mb="50px"
        position="relative"
        h="100vh"
      >
        <Box maxW="1350px" mx="auto" w="100%">
          <Header onConnect={onConnect} address={address} />
          <Parallax scale={[1.25, 0.75]} speed={-10} easing="easeInQuad">
            <Image
              position="absolute"
              className="home-img"
              maxW={{ base: '300px', md: '547px' }}
              // h='100%'
              src={`${process.env.PUBLIC_URL}/HOME.png`}
            />
          </Parallax>
        </Box>
      </Flex>
    </>
  );
}
