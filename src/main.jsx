import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material/styles';
import {
    ThirdwebProvider,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
} from '@thirdweb-dev/react';
import { createTheme } from '@mui/material/styles';
import ThemeStyles from './assets/styles/ThemeStyles.jsx';
const theme = createTheme(ThemeStyles);
import './index.css';
import { GlobalStyles } from '@mui/material';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';

const { publicClient, chains } = configureChains([bsc], [publicProvider()]);

const { connectors } = getDefaultWallets({
    appName: 'rexx_presale_app',
    projectId: 'bb584e1ceffc1bf58f8ec61540791bc6',
    chains,
});

const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThirdwebProvider
            supportedWallets={[
                metamaskWallet(),
                coinbaseWallet(),
                walletConnect(),
            ]}
            activeChain={'binance'}
            clientId="809b2c588a04312ead2eab0c92d1d81c"
        >
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </ThirdwebProvider>
    </React.StrictMode>
);
