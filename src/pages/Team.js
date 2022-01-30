import React, { useRef, useState } from 'react';
import { Flex, Text, Box, Heading, Link } from '@chakra-ui/react';
import TeamCard from '../components/TeamCard';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function About() {
  const slider = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    pauseOnHover: false,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handlePrev = () => {
    if(activeIndex > 1)setActiveIndex(activeIndex - 1);
  };
  const handleNext = () => {
    if (activeIndex < 5) setActiveIndex(activeIndex + 1);
  };
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      py="30px"
      id="about"
      px={{ base: '20px', md: 0 }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          maxW="1300px"
          w="100%"
          mx="auto"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="button"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            my="50px"
            textAlign="center"
          >
            Our Mission
          </Heading>
          <Text
            fontSize="20px"
            mb="56px"
            maxW="790px"
            textAlign="center"
            color="white"
          >
            “We The People NFT has developed a foundation built on commitment to
            unity, which will help nurture a strong society built to stand the
            test of time. This revolutionary project will not only be a
            lucrative investment, but an opportunity for the People to come
            together outside of political affiliations and boundaries, and
            create a more perfect union.”
          </Text>
          <Heading mb="84px" color="white" fontSize="20px">
            - The Founders
          </Heading>
          <Link
            bg="button"
            w="266px"
            mb="112px"
            h="70px"
            isExternal
            href="https://m.youtube.com/watch?v=OXFBUA63bME&t=21s"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Heading color="white" fontSize="20px">
              HOW TO MINT
            </Heading>
          </Link>
        </Flex>
        <Box maxW="1200px" mx="auto" display={{ base: 'block', lg: 'none' }}>
          <TeamCard
            image="1.png"
            display={activeIndex === 1 ? 'flex' : 'none'}
          />
          <TeamCard
            image="3.png"
            display={activeIndex === 2 ? 'flex' : 'none'}
          />
          <TeamCard
            image="4.png"
            display={activeIndex === 3 ? 'flex' : 'none'}
          />
          <TeamCard
            image="5.png"
            display={activeIndex === 4 ? 'flex' : 'none'}
          />
          <TeamCard
            image="6.png"
            display={activeIndex === 5 ? 'flex' : 'none'}
          />
          <TeamCard
            image="7.png"
            display={activeIndex === 6 ? 'flex' : 'none'}
          />
          <TeamCard
            image="8.png"
            display={activeIndex === 7 ? 'flex' : 'none'}
          />
        </Box>
        <Box maxW="1200px" mx="auto" display={{ base: 'none', lg: 'block' }}>
          <Slider ref={slider} {...settings}>
            <TeamCard image="1.png" />
            <TeamCard image="3.png" />
            <TeamCard image="4.png" />
            <TeamCard image="5.png" />
            <TeamCard image="6.png" />
            <TeamCard image="7.png" />
            <TeamCard image="8.png" />
          </Slider>
        </Box>
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          w="100%"
          display={{ base: 'flex', lg: 'none' }}
        >
          <Flex
            as="button"
            w="50px"
            h="50px"
            justifyContent="center"
            alignItems="center"
            bg="button"
            mr="30px"
            onClick={handlePrev}
            disable={activeIndex === 1}
            opacity={activeIndex === 1 ? 0.2 : 1}
          >
            <BiChevronLeft color="white" size="30" />
          </Flex>
          <Flex
            as="button"
            w="50px"
            h="50px"
            justifyContent="center"
            alignItems="center"
            bg="button"
            onClick={handleNext}
            disable={activeIndex === 5}
            opacity={activeIndex === 5 ? 0.2 : 1}
          >
            <BiChevronRight color="white" size="30" />
          </Flex>
        </Flex>
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          w="100%"
          display={{ base: 'none', lg: 'flex' }}
        >
          <Flex
            as="button"
            w="50px"
            h="50px"
            justifyContent="center"
            alignItems="center"
            bg="button"
            mr="30px"
            onClick={() => {
              slider?.current?.slickPrev();
            }}
          >
            <BiChevronLeft color="white" size="30" />
          </Flex>
          <Flex
            as="button"
            w="50px"
            h="50px"
            justifyContent="center"
            alignItems="center"
            bg="button"
            onClick={() => {
              slider?.current?.slickNext();
            }}
          >
            <BiChevronRight color="white" size="30" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
