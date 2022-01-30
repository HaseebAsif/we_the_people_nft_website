import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Heading,
} from '@chakra-ui/react';
import { SiDiscord, SiTwitter } from 'react-icons/si';
import { HiMenu } from 'react-icons/hi';

import { shortenAddress } from '../candy-machine';
import Whitepaper from '../assets/Whitepaper.pdf';

export default function Header({ address, onConnect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState('right');

  return (
    <>
      <Box p="15px" w="100%">
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Link href="/" className="link">
            <Image
              ml="20px"
              src={`${process.env.PUBLIC_URL}/logo.png`}
              w="120px"
            />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
            <Link ml="30px" href="#about" className="link" color="white">
              HOW TO MINT
            </Link>
            <Box ml="30px" href="#roadmap" className="link" color="white">
              <a href={Whitepaper} target="_blank" rel="noopener noreferrer">
                WHITEPAPER
              </a>
            </Box>
            {/* <Link href="#gallery" className="link" mr="15px" color="white">
            Gallery
            </Link> */}

            <Link ml="30px" href="#team" className="link" color="white">
              THE SOCIAL SHOWCASE
            </Link>
            <Flex>
              <Link
                href="https://discord.gg/hnT8uZmfjq"
                className="link"
                isExternal
                ml="30px"
                color="bgLight"
              >
                <SiDiscord size="30" />
              </Link>
              <Link
                href="https://twitter.com/wethepeoplenft_?s=21"
                className="link"
                isExternal
                ml="30px"
                color="bgLight"
              >
                <SiTwitter size="30" />
              </Link>
            </Flex>
            <Link
              href="https://opensea.io/login"
              as="button"
              bg="transparent"
              borderWidth="1px"
              borderColor="button"
              width="200px"
              h="40px"
              ml="30px"
              color="white"
              // borderRadius="5px"
              justifyContent="center"
              alignItems="center"
              className="desktop-btn"
              display={{ base: 'none', lg: 'flex' }}
              onClick={onConnect}
            >
              <Text fontSize="11px">BUY ON OPENSEA</Text>
            </Link>
            {!address ? (
              <Flex
                as="button"
                bg="button"
                ml="20px"
                width="200px"
                h="40px"
                color="white"
                justifyContent="center"
                alignItems="center"
                className="desktop-btn"
                display={{ base: 'none', lg: 'flex' }}
                onClick={onConnect}
                fontSize="11px"
              >
                Connect Wallet
              </Flex>
            ) : (
              <Box
                bg="button"
                ml="20px"
                width="200px"
                h="40px"
                color="white"
                justifyContent="center"
                alignItems="center"
                display={{ base: 'none', lg: 'flex' }}
                fontSize="11px"
              >
                <Text color="white">{shortenAddress(address || '')}</Text>
              </Box>
            )}
          </Flex>

          <Box
            as="button"
            p="2"
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
            color="button"
          >
            <HiMenu size="40" />
          </Box>
        </Flex>
      </Box>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        display={{ base: 'block', md: 'none' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Link
              href="#about"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              HOW TO MINT
            </Link>
            <Link
              href="#roadmap"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              WHITEPAPER
            </Link>
            <Link
              href="#gallery"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              Gallery
            </Link>

            <Link
              href="#team"
              display="block"
              className="link"
              color="black"
              fontSize="18px"
              py="15px"
            >
              THE SOCIAL SHOWCASE
            </Link>

            <Link
              href="https://opensea.io/login"
              as="button"
              bg="transparent"
              borderWidth="1px"
              borderColor="button"
              width="200px"
              h="40px"
              color="button"
              my="15px"
              // borderRadius="5px"
              justifyContent="center"
              alignItems="center"
              onClick={onConnect}
            >
              <Text fontSize="11px">BUY ON OPENSEA</Text>
            </Link>
            {!address ? (
              <Flex
                as="button"
                bg="button"
                width="200px"
                h="40px"
                color="white"
                justifyContent="center"
                alignItems="center"
                onClick={onConnect}
                fontSize="11px"
                my="15px"
              >
                Connect Wallet
              </Flex>
            ) : (
              <Flex
                bg="button"
                width="200px"
                h="40px"
                color="white"
                justifyContent="center"
                alignItems="center"
                fontSize="11px"
                my="15px"
              >
                <Text color="white">{shortenAddress(address || '')}</Text>
              </Flex>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
