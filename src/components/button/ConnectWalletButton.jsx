import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { ConnectWallet } from '@thirdweb-dev/react';
import Styles from '../header/Header.module.css';

const ConnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [shortWalletAddress, setShortWalletAddress] = useState('');

    const [openAccountModal, setOpenAccountModal] = useState(true);

    const [openConnectModal, setOpenConnectModal] = useState(false);

    return (
        <>
            <ConnectWallet
                theme="dark"
                btnTitle="Connect Wallet"
                style={{
                    backgroundColor: '#333333',
                    color: 'white',
                    borderRadius: '40px',
                    fontWeight: 'bold',
                    width: 200,
                    height: 54,
                }}
                className={Styles.connect_wallet__button}
            />
        </>
    );
};

export default ConnectWalletButton;
