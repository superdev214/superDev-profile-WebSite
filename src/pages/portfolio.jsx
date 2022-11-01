import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/Nav";
import ActiveList from "../component/portfolio-activate-list";
import { useState } from "react";
import WrapList from "../component/portfolio-wrap-list";
import { useGlobalVariables } from "../hooks";
import { useBetween } from "use-between";
import { useCallback } from "react";

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
      urlIndex: 6,
      title: "Upbots Crypto Trading Bots",
      filter: ["filter-Web", "filter-Blockchain"],
    },
    {
      urlIndex: 2,
      title: "Wagerr sportsbook",
      filter: ["filter-Web", "filter-Blockchain"],
    },
    {
      urlIndex: 4,
      title: "FTI Ticketshop",
      filter: ["filter-Web"],
    },
    {
      urlIndex: 3,
      title: "PaulWagner Life & Business Coach",
      filter: ["filter-Web", "filter-Mobile-App"],
    },
    {
      urlIndex: 1,
      title: "China Mobile International Limited (CMI)",
      filter: ["filter-Web"],
    },
    {
      urlIndex: 7,
      title: "UX/UI Design",
      filter: ["filter-UXUI"],
    },
    {
      urlIndex: 8,
      title: "Cybur AI Web page builder",
      filter: ["filter-Web"],
    },
    {
      urlIndex: 9,
      title: "IWIN CRYPTO CASINO",
      filter: ["filter-Web", "filter-Blockchain"],
    },
    {
      urlIndex: 11,
      title: "Tina Maids House Cleaning Services",
      filter: ["filter-Mobile-App"],
    },
    {
      urlIndex: 12,
      title: "Penny Watchers",
      filter: ["filter-Mobile-App"],
    },
    {
      urlIndex: 13,
      title: "Tripshop Hotel Booking platform",
      filter: ["filter-Web"],
    },
  ];
  const filterArray = useCallback(() => {
    console.log(activeFilter);
    return activeFilter === "*" ?  wrList : wrList.filter((item) =>item.filter.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="profile">
      <div className="container">
        <div className="fix-top">
          <h1>
            <a id="title" href="/">
              SongJuanJuan
            </a>
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
            <ActiveList list={ulList} />
            <WrapList
              list={  filterArray()}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Portfolio;
