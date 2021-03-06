import React, { useRef, useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

import Web3 from "web3";
import worldIcon from "../imgs/world-icon.png";
import twitter from "../imgs/twitter.png";
import meduim from "../imgs/meduim.png";
import message from "../imgs/message.png";
import bg from "../imgs/bg.png";
import { BsFillCircleFill } from "react-icons/bs";
import Card from "./Card";
import Loader from "./Loader";


const Content = ({ connected, setConnectWallet }) => {
  const inputRef = useRef();
  const [clientLogoUrl, setClientLogoUrl] = useState("");
  const [name, setName] = useState("");
  const [ourSiteLink, setOurSiteLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [mediumLink, setMediumLink] = useState("");
  const [contactUsLink, setContactUsLink] = useState("");
  const [text, setText] = useState("");
  const [button, setButton] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [firstNote, setFirstNote] = useState("");
  const [secondNote, setSecondNote] = useState("");
  const [progressTitle, setProgressTitle] = useState("");
  const [progressPercent, setProgressPercent] = useState("");
  const [progressMax, setProgressMax] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const handelBuying = async (address) => {
    try {
      if (!window.ethereum) {
        return alert("No crypto wallet found. Please install it");
      } else if ( inputRef.current.value < minValue || inputRef.current.value.length === 0) {
        return alert(`Contribution value must be greater than or equel to ${minValue}`);
      } else if (inputRef.current.value > maxValue) {
        return alert(`Contribution value must be between ${minValue} and ${maxValue} BNB`);
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

  useEffect(() => {
    const mainSectionRef = ref(db, "users/client1/main_section");
    onValue(mainSectionRef, (snapshot) => {
      const data = snapshot.val();
      setClientLogoUrl(data.logo);
      setName(data.name);
      setOurSiteLink(data.site_link);
      setTwitterLink(data.twitter_link);
      setMediumLink(data.medium_link);
      setContactUsLink(data.contact_us_link);
      setText(data.text);
      setButton(data.button);
      setMinValue(data.min_value);
      setMaxValue(data.max_value);
      setFirstNote(data.first_note);
      setSecondNote(data.second_note);
      setProgressTitle(data.progress_title);
      setProgressPercent(data.progress_percent);
      setProgressMax(data.progress_max);
    });
    const walletAddressRef = ref(db, "users/client1/wallet_address");
    onValue(walletAddressRef, (snapshot) => {
      const address = snapshot.val();
      setWalletAddress(address.wallet_address);
    });
  }, [])

  return (
    <>
      {
        progressMax !== undefined || null ? (
          <main className="content pt-5" style={{background: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundPosition:"bottom right",backgroundSize: "auto 98%"}}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-5 left-section">
                  <div className="icon">
                    <img src={clientLogoUrl} alt="m" />
                  </div>
                  <div>
                    <div>
                      <h2 className="text-light d-flex" style={{gap: "10px"}}>
                        {name}
                        {
                          ourSiteLink ?
                            <a href={ourSiteLink}>
                              <img src={worldIcon} alt="world-icon" width={18} height={18} />
                            </a>
                          :
                          null
                        }
                        {
                          twitterLink ?
                            <a href={twitterLink}>
                              <img src={twitter} alt="twitter" width={18} height={18} />
                            </a>
                            :
                            null
                        }
                        {
                          mediumLink ?
                            <a href={mediumLink}>
                              <img src={meduim} alt="meduim" width={18} height={18} />
                            </a>
                            :
                            null
                        }
                        {
                          contactUsLink ?
                            <a href={contactUsLink}>
                              <img src={message} alt="message" width={18} height={18} />
                            </a>
                          :
                            null
                        }
                      </h2>
                    </div>
                    <div>
                      <span className="open me-1">
                        <BsFillCircleFill className="mb-1 me-1" style={{fontSize: "8px"}}/>
                        Open
                      </span>
                      <span>Binance Smart Chain</span>
                      <div className="text-muted my-2">
                        {text}
                      </div>
                      <input className="bnb_amount" placeholder="Enter amount of BNB" type="number" min="0.2" max="20" step="0.2" ref={inputRef} />
                      <div className="d-flex align-items-center mt-3 btns">
                        <button className="btn buy" onClick={() => handelBuying(walletAddress)}>{button}</button>
                        <button className="btn claim">CLAIM</button>
                      </div>
                      <p className="text-muted mt-4">
                        Min {minValue} BNB - Max {maxValue} BNB
                      </p>
                      <p className="mt-5 mb-0 text-white">
                        {firstNote}
                      </p>
                      <p className="text-muted">
                        {secondNote}
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-7 my-3">
                  <Card progressTitle={progressTitle} progressPercent={progressPercent} progressMax={progressMax}/>
                </div>
              </div>
            </div>
          </main>
        )
        : 
        <Loader />
      }
    </>
)};

export default Content;
