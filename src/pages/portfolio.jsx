import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/Nav";
import ActiveList from "../component/portfolio-activate-list";
import { useState } from "react";
import WrapList from "../component/portfolio-wrap-list";
import { useGlobalVariables } from "../hooks";
import { useBetween } from "use-between";
import { useCallback } from "react";
import ControlledCarousel from "../component/ControlledCarousel";

const useSharedGlobalVariables = () => useBetween(useGlobalVariables);
const Portfolio = () => {
  const { activeFilter, setActivate } = useSharedGlobalVariables();

  const ulList = [
    {
      index: 1,
      filter: "*",
      name: "All",
    },
    {
      index: 2,
      filter: "filter-Web",
      name: "Web",
    },
    {
      index: 3,
      filter: "filter-Mobile-App",
      name: "Mobile App",
    },
    {
      index: 4,
      filter: "filter-Blockchain",
      name: "Blockchain",
    },
    {
      index: 5,
      filter: "filter-UXUI",
      name: "UX/UI desing",
    },
  ];
  const wrList = [
    {
      index:1,
      urlIndex: 6,
      title: "Upbots Crypto Trading Bots",
      filter: ["filter-Web", "filter-Blockchain"],
    },
    {
      index:2,
      urlIndex: 2,
      title: "Wagerr sportsbook",
      filter: ["filter-Web", "filter-Blockchain"],
    },
    {
      index:3,
      urlIndex: 4,
      title: "FTI Ticketshop",
      filter: ["filter-Web"],
    },
    {
      index:4,
      urlIndex: 3,
      title: "PaulWagner Life & Business Coach",
      filter: ["filter-Web", "filter-Mobile-App"],
    },
    {
      index:5,
      urlIndex: 1,
      title: "China Mobile International Limited (CMI)",
      filter: ["filter-Web"],
    },
    {
      index:6,
      urlIndex: 7,
      title: "UX/UI Design",
      filter: ["filter-UXUI"],
    },
    {
      index:7,
      urlIndex: 8,
      title: "Cybur AI Web page builder",
      filter: ["filter-Web"],
    },
    {
      index:8,
      urlIndex: 9,
      title: "IWIN CRYPTO CASINO",
      filter: ["filter-Web", "filter-Blockchain"],
    },
    {
      index:9,
      urlIndex: 11,
      title: "Tina Maids House Cleaning Services",
      filter: ["filter-Mobile-App"],
    },
    {
      index:10,
      urlIndex: 12,
      title: "Penny Watchers",
      filter: ["filter-Mobile-App"],
    },
    {
      index:11,
      urlIndex: 13,
      title: "Tripshop Hotel Booking platform",
      filter: ["filter-Web"],
    },
  ];
  const filterArray = useCallback(() => {
  
    return activeFilter === "*"
      ? wrList
      : wrList.filter((item) => item.filter.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="profile">
      <div className="fix-top">
        <Container className="fix-top">
          {" "}
          <h1>
            <a id="title" href="/">
              SongJuanJuan
            </a>
          </h1>
          <NavBar />
        </Container>
      </div>
      {/* Service container */}
      <div className="section">
        <Container>
          <div className="portfolio-container">
            <div className="section-title">
              <h2>PORTFOLIO</h2>
              <p>MY WORKS</p>
            </div>
         
            <ActiveList list={ulList} />
            <WrapList list={filterArray()} />
   
          </div>
        </Container>
       
      </div>
      <ControlledCarousel urllist={filterArray()}/>
    </div>
  );
};
export default Portfolio;
