import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
 
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:20}}>
        <img src={Logo} alt="" style={{width:'160px',height:40}} />
        <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
      </div>
  );
};

export default Header;
