import {
  Box,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
  Link,
} from '@chakra-ui/react';
import Faq from 'react-faq-component';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const data =  [
    {
      title: 'How much will it cost to mint an NFT?',
      content:
        'A: Minting price will be 80 MATIC. This is the exclusive price to our WHITELIST MEMBERS. (2 MAX) Those who are not on the WHITELIST will be charged 100 MATIC. (10 MAX) *MATIC also known as Polygon is traded as of 1/3/22 at $2.40',
    },
    {
      title: 'Where will I be able to mint?',
      content: 'Each Frontier Legend will cost 0.33 SOL to mint.',
    },
    {
      title: 'When is the Presale/Public launch.',
      content: 'We will launch January 1st!',
    },
    {
      title: 'How do I get on the Whitelist?',
      content:
        'The team is composed of a group of friends from around the globe who share a passion for cryptocurrency, defi, and NFTs!',
    },
  ];

const config = {
  animate: true,
};

export default function FAQ() {
  const styles = {
    bgColor: 'transparent',
    rowTitleColor: '#fff',
    rowContentColor: '#fff',
    rowTitleTextSize: 'large',
  };
  return (
    <Flex
      minH="100vh"
      py="30"
      bg="bg"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      id="faq"
    >
      <Heading
        color="button"
        textTransform="uppercase"
        mb={{ base: '30px', md: '120px' }}
        fontSize={{ base: '4xl', md: '6xl' }}
        textAlign="center"
      >
        FREQUENTLY ASKED QUESTIONS
      </Heading>
      <Box maxW="1200px" px={{ base: '20px', md: 0 }} w="100%">
        <Accordion allowMultiple allowToggle w="100%" borderBottomWidth="0">
          {data.map((faq, i) => (
            <AccordionItem
              borderTopWidth="0"
              borderBottomWidth="1"
              mb="30px"
              key={i}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton px="0" pb="30px">
                      <Box
                        flex="1"
                        textAlign="left"
                        color="white"
                        fontSize="24px"
                      >
                        {faq.title}
                      </Box>
                      {isExpanded ? (
                        <AiOutlineMinus color="white" size="20" />
                      ) : (
                        <AiOutlinePlus color="white" size="20" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel px="0" color="white" opacity="0.7">
                    {faq.content}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      <Flex
        w="100%"
        mt={{ base: '50px', md: '150px' }}
        h={{ base: '600px', md: '495px' }}
        position="relative"
        bg="#7FB5D9"
        backgroundImage={{ base: '', md: `${process.env.PUBLIC_URL}/faq.png` }}
        backgroundPosition="center"
        backgroundSize="110%"
        backgroundRepeat="no-repeat"
        px="25px"
        justifyContent={{ base: 'flex-start', md: 'center' }}
        pt={{ base: '50px', md: 0 }}
        // alignItems="center"
        flexDirection="column"
      >
        <Box color="white" maxW="600px">
          <Heading mb="25px" fontSize={{ base: '24px', md: '50px' }}>
            JOIN THE COMMUNITY
          </Heading>
          <Text mb="20px" fontSize={{ base: '16px', md: '20px' }} maxW="700px">
            We are excited to announce upcoming news and strategic partnerships
            as time progresses. At 10k discord members we will be holding a
            giveaway for 5 members of our community to win a Legislator. Access
            to this give away with a chance to join our whitelist is only
            available through our discord. Join our discord before it’s too
            late!
          </Text>
          <Link
            href="https://discord.gg/hnT8uZmfjq"
            isExternal
            w="250px"
            h="60px"
            bg="button"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Heading fontSize="15px">JOIN DISCORD</Heading>
          </Link>
          <Image
            src={`${process.env.PUBLIC_URL}/comunity.png`}
            className="community-img"
            display={{ base: 'block', md: 'none' }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
