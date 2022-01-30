import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  extendTheme,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Fonts from './Fonts';
import "@fontsource/roboto/400.css";
import { Home, Gallery, Roadmap, About,FAQ, Team } from './pages';
import {  Footer } from './components';
import { fetchData } from './redux/data/dataActions';
import { connect } from './redux/blockchain/blockchainActions';

const extendedTheme = extendTheme({
  ...theme,
  fonts: {
    // heading: 'Pixel-Western Regular',
    body: 'Roboto',
  },
  colors: {
    ...theme.colors,
    bg: '#151017',
    bgLight: '#efeee8',
    bgDark: '#e8e7df',
    lightBlack: '#181817',
    lightOrange: '#feb64d',
    button:'#BF0B30',
    BLUE:'#133FC3'
  },
});

const {REACT_APP_CONTRACT_ADDRESS} = process.env

function App() {
   const blockchain = useSelector(state => state.blockchain);
   const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  
  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const handleConnect = () => {
    dispatch(connect());
    getData();
  };

  useEffect(() => {
    if (!blockchain.account && !blockchain.smartContract) {
      handleConnect();
    } else {
      getData();
    }
  }, [blockchain.account]);

  useEffect(() => {
    if (blockchain.errorMsg) {
      toast.error(blockchain.errorMsg);
    }
    if (data.errorMsg) {
      toast.error(data.errorMsg);
    }
  }, [blockchain.errorMsg, data.errorMsg]);

  const claimNFTs = (count) => {
    if (count <= 0) {
      return;
    }

    toast.info('Preparing your NFT...');
    const value = blockchain.web3.utils.toWei((data.cost * count).toString(), 'ether');
    blockchain.smartContract.methods
      .mint(count)
      .send({
        gasLimit: '4712388',
        to: REACT_APP_CONTRACT_ADDRESS,
        from: blockchain.account,
        value,
      })
      .once('error', (err) => {
        console.log(err);
        toast.error('It seems the transaction was cancelled.');
      })
      .then((receipt) => {
        toast.success(
          'Woohoo! NFT minted successfully!'
        );
        dispatch(fetchData(blockchain.account));
      });
  };

  return (
    <ChakraProvider theme={extendedTheme}>
      <Fonts />
      <Box
        minH="100vh"
        bg="bg"
      >
      
        <Box>
          <Home
            onConnect={handleConnect}
            address={blockchain.account}
            data={data}
            onMint={claimNFTs}
            loading={blockchain.loading}
          />
          <Team />
          <Roadmap />
          <About />
          <FAQ />
          {/* <Gallery /> */}
          
          
        </Box>
        <Footer />
        <ToastContainer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
