import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";


const Header = () => {

  return (
      <div style={{display:'flex',justifyContent:'right',padding:20}}>
        <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
      </div>
  );
};

export default Header;
