import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/Nav";
import ActiveList from "../component/portfolio-activate-list";
import { useState } from "react";
import WrapList from "../component/portfolio-wrap-list";
import { useGlobalVariables } from "../hooks";
import { useBetween } from 'use-between';

const useSharedGlobalVariables = () => useBetween(useGlobalVariables);
const Portfolio = () => {
  const {activeId, setActivate} = useSharedGlobalVariables();

  const ulList = [
    {
      index: 1,
      filter: "*",
      name: "All",
    },
    {
      index: 2,
      filter: ".filter-Web",
      name: "Web",
    },
    {
      index: 3,
      filter: ".filter-Mobile-App",
      name: "Mobile App",
    },
    {
      index: 4,
      filter: ".filter-Blockchain",
      name: "Blockchain",
    },
    {
      index: 5,
      filter: ".filter-UXUI",
      name: "UX/UI desing",
    }
  ];
  const wrList = [
    {
      urlIndex: 6,
      title:"Upbots Crypto Trading Bots"
    },
    {
      urlIndex: 2,
      title:"Wagerr sportsbook"
    },
    {
      urlIndex: 4,
      title:"FTI Ticketshop"
    },
    {
      urlIndex: 3,
      title:"PaulWagner Life & Business Coach"
    },
    {
      urlIndex: 1,
      title:"China Mobile International Limited (CMI)"
    },
    {
      urlIndex: 7,
      title:"UX/UI Design"
    },
    {
      urlIndex: 8,
      title:"Cybur AI Web page builder"
    },
    {
      urlIndex: 9,
      title:"IWIN CRYPTO CASINO"
    },
    {
      urlIndex: 11,
      title:"Tina Maids House Cleaning Services"
    },
    {
      urlIndex: 12,
      title:"Penny Watchers"
    },
    {
      urlIndex: 13,
      title:"Tripshop Hotel Booking platform"
    }
  ];
  return (
    <div className="profile">
      <div className="container">
        <div className="fix-top">
          <h1>
            <a id="title" href="/">
              SongJuanJuan {activeId} 
            </a>
          <button onClick={console.log(activeId)}>asdf</button>
          </h1>
          <NavBar />
        </div>
      </div>
      {/* Service container */}
      <div className="section">
        <Container>
          <div className="portfolio-container">
            <div className="section-title">
              <h2>PORTFOLIO</h2>
              <p>MY WORKS</p>
            </div>
            <ActiveList list = {ulList}/>
            <WrapList list = {wrList}/>
          </div>
          
        </Container>
      </div>
    </div>
  );
};
export default Portfolio;
