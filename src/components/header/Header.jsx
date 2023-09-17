import { useState } from 'react';

import { HiMenuAlt3 } from 'react-icons/hi';

import Logo from '../../assets/images/logo.png';
import Telegram from '../../assets/images/icons/telegram.svg';
import Discord from '../../assets/images/icons/discord.svg';
import Twitter from '../../assets/images/icons/twitter.svg';
import Facebook from '../../assets/images/icons/facebook.svg';
import Instagram from '../../assets/images/icons/instagram.svg';

// import MobileMenu from "../mobileMenu/MobileMenu";
import ConnectWalletButton from '../button/ConnectWalletButton';

import Styles from  './Header.module.css'

const Header = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);



    const socials = [
        // telegram, twitter, instagram, discord, facebook
        {
            icon: Telegram,
            link: 'https://t.me/BenefitMine',
        },
        {
            icon: Twitter,
            link: 'https://twitter.com/benefitmine',
        },
        {
            icon: Instagram,
            link: 'https://www.instagram.com/benefitmine_official/',
        },
        {
            icon: Discord,
            link: 'https://discord.com/invite/BenefitMine',
        },
        {
            icon: Facebook,
            link: 'https://www.facebook.com/BenefitMine.OfficialPage/',
        }
            
    ]

    const handleMobileMenu = () => {
        setIsMobileMenu(!isMobileMenu);
    };

    return (
        <>
            <nav
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    
                }}
            >
                <div
                    onClick={() =>{
                        window.location.href = 'https://benefitmine.io/'
                    }}
                >
                    <img src={Logo} alt="logo" className={Styles.header__logo} />
                </div>
                <ul
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // border: '1px solid #fff',
                        width: '700px',
                        marginRight: '170px'
                    }}
                >
                    <li>
                        <a href="https://benefitmine.io/" className={Styles.header__link}>Official Website</a>
                    </li>
                    {
                        socials.map((social, index) => (
                            <li key={index}>
                                <a href={social.link} target="_blank" rel="noreferrer">
                                    <img src={social.icon} alt="social" className={Styles.header__icon} />
                                </a>
                            </li>
                        ))
                    }
                    
                    <li>
                        <ConnectWalletButton />
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
