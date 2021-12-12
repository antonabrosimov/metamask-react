import React from "react";
import { MdAccountBalanceWallet, MdLocalFireDepartment } from "react-icons/md";
import{ SiBlender } from "react-icons/si";
import logo from "../imgs/logo.png";

const NavBar = ({ setConnectWallet, connectWallet }) => {
  const connect = async () => {
    try {
      if (!window.ethereum) {
        return alert("No crypto wallet found. Please, install it.");
      }
      await window.ethereum.enable();
      setConnectWallet("Connected");
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container justify-content-around">
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="logo" className="me-2" />
          <h1 className="m-0">BSCPad</h1>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0  mt-4  m-sm-0" id="main-nav">
          <ul className="navbar-nav justify-content-center flex-wrap flex-row" style={{gap: "5px"}}>
            <li className="nav-item">
              <button className="btn d-flex align-items-center" onClick={connect}>
                <MdAccountBalanceWallet />
                {connectWallet}
              </button>
            </li>
            <li className="nav-item">
              <button className="btn d-flex align-items-center">
                <MdLocalFireDepartment />
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button className="btn d-flex align-items-center">
                <SiBlender />
                Staking
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
