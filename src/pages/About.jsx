import React from "react";
import NavBar from "../component/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import my from "../images/me.jpg";
import Counter from "../component/Counter";
import ProgressBar from "react-animated-progress-bar";
import Skill from "../component/skill";
function About() {
  return (
    <div className="about">
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
      <div className="section">
        <Container>
          <div className="about-me-container">
            {/* About me Container*/}
            <div className="section-title">
              <h2>About</h2>
              <p>Learn More About Me</p>
            </div>
            <div>
              <div className="section-container">
                <Row>
                  <Col sm={4}>
                    <img src={my} alt="asdf" />
                  </Col>
                  <Col sm={8}>
                    <h2>Blockchain Specialist & Full Stack Expert</h2>
                    <Row>
                      <Col sm={6}>
                        <ul>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Birthday:</strong> 20 Jan 1991
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Website:</strong>{" "}
                            https://github.com/jeydev310
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Phone:</strong> +86 182 4255 0239
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>City:</strong> City : Shenyang, LiaoNing,
                            China
                          </li>
                        </ul>
                      </Col>
                      <Col sm={6}>
                        <ul>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Age:</strong> 31
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Degree:</strong> Bachelor
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Email:</strong> juanjs120@outlook.com
                          </li>
                          <li>
                            <i className="icofont-rounded-right"></i>{" "}
                            <strong>Full time job:</strong> Available
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <p>
                      I have worked on many DeFi and Dapps based on several
                      Blockchain platform and I have extensive 5+ years of
                      experience in developing and writing Smart Contracts for
                      Ethereum, Binance smart chain, Polygon, Solana, Avalanche,
                      Fantom Blockchain.
                      <br />
                      I have also used Web3 to integrate several Smart contracts
                      of different blockchain to frontend designs. I have 3+
                      years of experience using web3 With several blockchain
                      networks I have developed several Defi and Dapps and
                      written 30+ smart contracts including NFT and deployed it
                      in blockchain networks.
                      <br />
                      I am expert in Uniswap, Sushiswap, Pancakeswap, Swapping
                      tokens, Staking, Bridge, Yield Farming, Lottery Smart
                      Contracts etc.
                      <br />
                      I have worked on multiple coding and business start-up
                      projects related to blockchains and crypto assets/coins,
                      gaining experience covering blockchain, consensus
                      algorithms, Hyperledger, bitcoind, geth, ethminer, ethash,
                      ERC20 tokens, JSON RPC, transactions, testnets, on-chain
                      atomic swaps, cryptocurrency mining, coin trading,
                      exchanges (both centralized and decentralized), and
                      'crypto ecosystem' modelling. I run my own full nodes for
                      BTC, ETH and ETC. I have contributed to multiple
                      whitepapers, and been involved in several completed ICOs.
                      <br />
                      I have developed 20+ Crypto Exchange and ICO Platform and
                      helped several clients raise and earn million of dollars
                      worth of Crypto.
                      <br />
                      I have worked with all the popular blockchains like EOS,
                      Stellar, Waves, Ripple, Bitcoin, NEO, Ethereum and Steem
                      etc
                      <br />
                      <strong>PROFESSIONAL SUMMARY</strong>
                      <br />
                      ● 10+ years of software development experience in all
                      phases of SDLC including Planning, Requirement Analysis,
                      Design, Development, Testing, and Deployment
                      <br />
                      ● 10+ years of experience in front end development using
                      HTML/HTML5, XHTML, CSS2/CSS3, JavaScript/Typescript,
                      Bootstrap, jQuery, Ajax, JSON, and XML and IDE tools like
                      VSCode, WebStorm, Sublime text, and Eclipse
                      <br />
                      ● 5 years of experience in back end development in
                      PHP/Laravel and Dot Net (C#)
                      <br />
                      ● 5 years of experience in React, Redux, Redux-Thunk, and
                      Redux-Saga
                      <br />
                      ● 5 years of experience in Vue.js, VueX, Vuetify.js,
                      Nuxt.js, and Element UI Library
                      <br />
                      ● 5 years of experience in back end development in
                      Node.js/Express/Nest
                      <br />● 5 years of experience in developing Restful Web
                      Services and Micro Services using Node/Golang
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            {/* End about Me!!! */}
            <div className="counts-container">
              {/* Count Container */}
              <Row>
                <Col sm={3}>
                  <div className="count-box">
                    <i className="icofont-simple-smile"></i>
                    <Counter ed="23" index={1}></Counter>
                    <p>Happy Client</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="count-box">
                    <i className="icofont-document-folder"></i>
                    <Counter ed="42" index={2}></Counter>
                    <p>Projects</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="count-box">
                    <i className="icofont-live-support"></i>
                    <Counter ed="1463" index={3}></Counter>
                    <p>Hours of Support</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="count-box">
                    <i className="icofont-users-alt-5"></i>
                    <Counter ed="3" index={4} />
                    <p>Hard Workers</p>
                  </div>
                </Col>
              </Row>
            </div>
            {/* End Counts Container */}
            <div className="skill-container">
              <div className="section-title">
                <h2>SKILLS</h2>
              </div>
              <Row>
                <Col sm={6}>
                  <Skill title="REACT JS" target="100" />
                  <Skill title="VUE JS" target="100" />
                  <Skill title="ANGULAR" target="95" />
                  <Skill title="NODE JS" target="100" />
                  <Skill title="PHP" target="100" />
                  <Skill title="lARAVEL" target="100" />
                  <Skill title="GOLANG" target="90" />
                  <Skill title="AWS" target="90" />
                  <Skill title="FIGMA" target="100" />
                </Col>
                <Col sm={6}>
                  <Skill title="REACT NATIVE" target="100" />
                  <Skill title="JAVA/KOTLIN" target="80" />
                  <Skill title="SWIFT" target="80" />
                  <Skill title="C#" target="80" />
                  <Skill title="QT" target="80" />
                  <Skill title="MONGODB" target="100" />
                  <Skill title="MYSQL" target="90" />
                  <Skill title="DOCKER" target="90" />
                  <Skill title="ADOBE XD" target="100" />
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default About;
