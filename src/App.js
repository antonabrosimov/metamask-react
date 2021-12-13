import React, { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

const App = () => {
  const [connectWallet, setConnectWallet] = useState("Connect Wallet");

  return (
    <>
      <NavBar setConnectWallet={setConnectWallet} connectWallet={connectWallet}/>
      <Content connected={connectWallet} setConnectWallet={setConnectWallet}/>
      <Tabs />
      <Footer />
    </>
  )
}

export default App;
