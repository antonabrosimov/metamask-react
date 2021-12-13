import React, { useRef } from "react";
import Web3 from "web3";
import m from "../imgs/m.png";
import worldIcon from "../imgs/world-icon.png";
import twitter from "../imgs/twitter.png";
import meduim from "../imgs/meduim.png";
import message from "../imgs/message.png";
import bg from "../imgs/bg.png";
import { BsFillCircleFill } from "react-icons/bs";
import Card from "./Card";

const Content = ({ connected, setConnectWallet }) => {
  const inputRef = useRef();

  const handelBuying = async (address) => {
    try {
      if ( inputRef.current.value < 0.2 || inputRef.current.value.length === 0) {
        return alert("Contribution value must be greater than or equel to 0.2");
      } else if (inputRef.current.value > 20) {
        return alert("Contribution value must be between 0.2 and 20 BNB");
      }
      if (connected !== "Connected") {
        await window.ethereum.enable();
        setConnectWallet("Connected");
      }
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      await web3.eth.sendTransaction({
        from: accounts[0],
        to: address,
        value: web3.utils.toWei(inputRef.current.value),
        gas: 39000
      });
    } catch (err) {
      alert(err.message);
    }
  }
  return (
  <main className="content pt-5" style={{background: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundPosition:"bottom right",backgroundSize: "auto 98%"}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-5 left-section">
          <div className="icon">
            <img src={m} alt="m" />
          </div>
          <div>
            <div>
              <h2 className="text-light d-flex" style={{gap: "10px"}}>
                MetaVPade
                <a href="/">
                  <img src={worldIcon} alt="world-icon" width={18} height={18} />
                </a>
                <a href="/">
                  <img src={twitter} alt="twitter" width={18} height={18} />
                </a>
                <a href="/">
                  <img src={meduim} alt="meduim" width={18} height={18} />
                </a>
                <a href="/">
                  <img src={message} alt="message" width={18} height={18} />
                </a>
              </h2>
            </div>
            <div>
              <span className="open me-1">
                <BsFillCircleFill className="mb-1 me-1" style={{fontSize: "8px"}}/>
                Open
              </span>
              <span>Binance Smart Chain</span>
              <div className="text-muted my-2">
                Building the Metaverse, One block at a time.
              </div>
              <input className="bnb_amount" placeholder="Enter amount of BNB" type="number" min="0.2" max="20" step="0.2" ref={inputRef} />
              <div className="d-flex align-items-center mt-3 btns">
                <button className="btn buy" onClick={() => handelBuying(process.env.REACT_APP_METAMASK_ADDRESS)}>BUY TOKEN</button>
                <button className="btn claim">CLAIM</button>
              </div>
              <p className="text-muted mt-4">
                min: 0.2 BNB - max: 20 BNB
              </p>
              <p className="mt-5 mb-0 text-white">
                If you use metamask browser double click on buy the buy button
              </p>
              <p className="text-muted">
                Claim button becomes active within 30 seconds after purchasing.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-7 my-3">
          <Card />
        </div>
      </div>
    </div>
  </main>
)};

export default Content;
