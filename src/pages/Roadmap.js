import { Box, Text,Image,Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Roadmap() {
  const arrowStyle = {
    borderRightColor: 'transparent',
  };
  const contentStyle = {
    background: 'transparent',
    boxShadow: 'none',
  };
  const iconStyle = {
    background: '#BF0B30',
    width: 40,
    height: 40,
    marginLeft: -18,
    boxShadow: 'none',
    top: 18,
  };
  return (
    <>
      <Box maxW="1024px" mx="auto" py="30px" id="roadmap">
        <Heading
          color="button"
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="bold"
          my="50px"
          textAlign="center"
        >
          THE ROADMAP
        </Heading>
        <VerticalTimeline className="timeline">
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading" color="BLUE">
              Community treasury
            </Heading>
            <Text color="white">
              At 25% sold, 5 ETH will be added into the Community Treasury. This
              will fund the revolution, and pave the way for the{' '}
              <Box display="inline" fontWeight="bold">
                United States of A-Metaverse.
              </Box>
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading">Rarity checker</Heading>
            <Text color="white">
              At 50% sold, a rarity checker will be added to our website. The
              identity of the{' '}
              <Box display="inline" fontWeight="bold">
                Elite Legislators
              </Box>{' '}
              will be released, who along with the{' '}
              <Box display="inline" fontWeight="bold">
                Eagle Collection
              </Box>
              , will grant{' '}
              <Box display="inline" fontWeight="bold">
                HODL
              </Box>
              ers a{' '}
              <Box display="inline" fontWeight="bold">
                2% royalty of trading volume for all We The People Collections.
              </Box>
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading">Community Treasury</Heading>
            <Text color="white">
              At 75% sold, we will add an additional 5 ETH to the Community
              Treasury totaling{' '}
              <Box display="inline" fontWeight="bold">
                10 ETH….
              </Box>{' '}
              but here is when things start to get interesting!
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading">
              The United States of A-Metaverse
            </Heading>
            <Text color="white">
              At 100% minted $200,000 worth of land will be purchased in the
              Sandbox.{' '}
              <Box display="inline" fontWeight="bold">
                The community will create the Constitution, laws, and vote on
                future jobs, games, and events.{' '}
              </Box>
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading">The Eagle.</Heading>
            <Text color="white">
              HODLers of both{' '}
              <Box display="inline" fontWeight="bold">
                Donkeys
              </Box>{' '}
              and{' '}
              <Box display="inline" fontWeight="bold">
                Elephants
              </Box>{' '}
              will receive an{' '}
              <Box display="inline" fontWeight="bold">
                Eagle
              </Box>{' '}
              via airdrop and the royalty associated with it.{' '}
              <Box display="inline" fontWeight="bold">
                The Eagle
              </Box>{' '}
              is the FINAL release of{' '}
              <Box display="inline" fontWeight="bold">
                Legislators
              </Box>
              …forever.
            </Text>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading">
              The Citizens Collection
            </Heading>
            <Text color="white">
              The Citizens will perform very specific roles within the
              Community. Compensation will be determined by the tier of their
              job, and funds will be distributed from the community treasury.
            </Text>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading">Growth</Heading>
            <Text color="white">
              As our community EXPANDS, we will{' '}
              <Box display="inline" fontWeight="bold">
                purchase another MASSIVE portion of land
              </Box>
              . This will ensure wealth and prosperity for our members. To be
              able to support our ever-growing community, our Roadmap will
              continue to progress. We are creating a community and economy that
              will span the course of{' '}
              <Box display="inline" fontWeight="bold">
                decades
              </Box>
              . To form a more perfect union, by the People for the People.
            </Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>

      <Flex
        w="100%"
        mt={{ base: '50px', md: '300px' }}
        h={{ base: '100%', md: '514px' }}
        py={{ base: '20px', md: 0 }}
        position="relative"
        bg="blue"
        justifyContent="space-around"
        alignItems="center"
        flexDirection={{ base: 'column-reverse', md: 'row' }}
      >
        <Image
          maxW={{ base: '300px', md: '570px' }}
          alignSelf={{ base: 'center', md: 'flex-end' }}
          src={`${process.env.PUBLIC_URL}/donkey.png`}
        />
        <Text
          textAlign={{ base: 'center', md: 'justify' }}
          mr={{ base: 0, md: '30px' }}
          mt={{ base: '30px', md: '0px' }}
          px={{ base: '20px', md: 0 }}
          maxW="600px"
          color="white"
          fontSize={{ base: '18px', md: '25px' }}
        >
          As time progresses, as will our ROADMAP. We plan on creating a
          community and economy that spans the course of decades. To form a more
          perfect union, by the People for the People.
        </Text>
      </Flex>
    </>
  );
}
