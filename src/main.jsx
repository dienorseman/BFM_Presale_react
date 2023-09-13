import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
} from "@thirdweb-dev/react";
import { createTheme } from "@mui/material/styles";
import { BinanceTestnet } from "@thirdweb-dev/chains";
import ThemeStyles from "./assets/styles/ThemeStyles.jsx";
import GlobalStyles from "./assets/styles/GlobalStyles.jsx";
const theme = createTheme(ThemeStyles);
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[metamaskWallet(), coinbaseWallet()]}
      activeChain={"binance"}
      clientId="809b2c588a04312ead2eab0c92d1d81c"
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
