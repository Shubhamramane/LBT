import React from 'react';
import './App.css';
import {Navbar,Container,Nav,Button,Row,Col,Form} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import image4 from './image/image 4.svg';
import Union from './image/Union.svg';
import White from './Documents/whitepaper.pdf';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialLinkedin } from 'react-icons/ti';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineMedium } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineReddit } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import Circel from './image/Group21.svg';
import GCircel1 from './image/Ellipse61.svg';
import GCircel2 from './image/Ellipse62.svg';
import GCircel3 from './image/Ellipse63.svg';
import GCircel4 from './image/Ellipse64.svg';
import GCircel5 from './image/Ellipse65.svg';
import GCircel6 from './image/Ellipse66.svg';
import GCircel7 from './image/Ellipse67.svg';
import GCircel8 from './image/Ellipse68.svg';
import GCircel9 from './image/Ellipse69.svg';
import image11 from './image/image11.svg';
import GSquare1 from './image/Rectangle76.svg';
import GSquare2 from './image/Rectangle77.svg';
import GSquare3 from './image/Rectangle78.svg';
import GSquare4 from './image/Rectangle79.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Exchange(){
return(
<React.Fragment>
<Navbar expand="lg">
  <Container>
  <Link className="uline mt-1" to="/Home"><img src={logo} style={{height:"30px"}} className="mt-3"></img></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mt-3">
          <Link className="uline mt-1" to="/Home">Home</Link>
          <Link className="uline mt-1" to="/About">About</Link>
          <Link className="uline mt-1" to="/Product">Product</Link>
          <Link className="uline mt-1" to="/Our_Team">Our Team</Link>
          <Link className="uline mt-1" to="/CommunitySupport">Community</Link>
          {/* <Link className="uline mt-1" to="/Contact">Contact</Link> */}
          <Link className="uline mt-1" to="/Sign_In"><button className="btn2">Login</button></Link>
          {/* <Link className="uline mt-1" to="/Sign_Up"><button className="btn2">Sign Up</button></Link> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br/><br/>

<Container>

<h5>Project Name: Law Block Token</h5>

<h5>Project website: https://lawblocks.io/</h5>

<h5>Token Name: LBT</h5>

<h5>Token Symbol: LBT</h5>

<h5>Block Finality: </h5>

<h5>LBT SDK: </h5>

<h5>Blockchain endpoint:</h5>

<h5>LBT Blockchain endpoint: </h5>

<h5>Testnet Blockchain endpoint: </h5>

<h5>Devnet Blockchain endpoint:</h5>

<h5>Github: </h5>

<h5>Technical White Paper: </h5>

<h5>Business White Paper: </h5>

<h5>Telegram: </h5>

<h5>Youtube: </h5>

<h5>Twitter:</h5>

<h5>Reddit: </h5>

<h5>Slack: </h5>

<h5>LBT Logo: </h5>



<h5>Pair Reference : </h5>

<h5>Preference to run bounty plan : </h5>



<h5>Test Network/Sandbox call as Apothem Network</h5>

<h5>1. Need to provide test currency advice to prepare financial process in advance</h5>

<h5>2. Also send us an LBT wallet Address (email id ) to transfer real LBT coins to do transactions under the Live network environment.</h5>

<h5>How to create account in LBT Blockchain?</h5>

<h5>1. Using Keystore
   (Keys)</h5>

<h5>Parameters</h5>
<h5>password - String: The password to encrypt this account with.</h5>

<h5>Returns
Promise returns String: The address of the newly created account.</h5>


<h5>Example
(keys)</h5>

<h5>2. Using Private key (Generates an account object with private key and public key.)
    (keys)</h5>


<h5>Parameters
entropy - String (optional): A random string to increase entropy. If given it should be at least 32 characters. If none is given a random string will be generated using random hex.</h5>


<h5>Returns
Object - The account object with the following structure:</h5>


<h5>address - string : The account address.</h5>

<h5>privateKey - string : The accounts private key. This should never be shared or stored unencrypted in localstorage! Also make sure to null the memory after usage.</h5>

<h5>signTransaction(tx [, callback]) - Function : </h5>

<h5>sign(data) - Function : </h5>

<h5>Example</h5>

<h5>(Keysss)</h5>


<h5>How to deposit LBT?</h5>

<h5>1. New Block Notification</h5>

<h5>2. getTransactionFromBlock</h5>

<h5>(Keys) </h5>

<h5>Returns a transaction based on a block hash or number and the transactions index position.</h5>

<h5>Parameters</h5>
<h5>string
Number
Function</h5>
<h5>sign(data) - Function</h5>

<h5>Returns
Promise returns Object - A transaction object.</h5>

<h5>Example

(Keyss)</h5>



<h5>How to withdraw LBT?</h5>

<h5>1.sendTransaction</h5>
<h5>Keys</h5>

<h5>Sends a transaction to the network.</h5>

<h5>Parameters</h5>

<h5>1. Object - The transaction object to send:</h5>

<h5>from - String|Number</h5>

<h5>to - String</h5>

<h5>value - Number|String|BN|BigNumber</h5>

<h5>gas - Number</h5>

<h5>gasPrice - Number|String|BN|BigNumber</h5>

<h5>data - String</h5>

<h5>nonce - Number </h5>

<h5>callback - Function</h5>

</Container>
<Row className="justify-content-center footer">
        <Col lg={2} sm={2} className="ms-3 mt-5">
            <img src={Union}></img><br/>
            <button className="form fonts mt-3 wpaper" style={{backgroundColor:"#292A33"}}><a href={White} download className="white">Whitepaper</a></button>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize"><b>LBT</b></p>
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/About">About Us</Link></p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/JusticePlatform">Open Justice Platform</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/LBTEditor">LBT Editor</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/LBTToken">LBT Token</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Tokenomics">Tokenomics</Link></p>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize">Community</p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Community">Community</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/CommunitySupport">Community Support</Link></p>
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/CommunityBound">Community Bounty</Link></p>
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Our_Team">About Team</Link></p>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize">Resource</p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Exchange">Exchange</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/WalletSupport">Wallet Support</Link></p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/RoadMap">Road Map</Link></p> */}
            <p className="form fonts fsize1"><a href={White} download className="white fsize1">White paper</a></p>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize">Other Link</p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Contact">Contacts</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/PrivacyPolicy">Privacy Policy</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/FAQ">FAQ</Link></p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Services">Terms Of Services</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Disclaimer">Disclaimer</Link></p> */}
        </Col>
    </Row>
        <div className="footerline  footer"></div>
        <Row className="justify-content-center footer">
        <Row>
        <Col lg={9} >
          <p className="form fonts fsize mt-3"></p>
        </Col>
        <Col lg={3} className="mt-3">
          <span className="form fonts fsize mt-3"><Link className="uline mt-1 white fsize1" to="/Privacy" style={{color:"white"}}>Privacy</Link></span>
          <span className="form fonts fsize mt-3 ms-5"><Link className="uline mt-1 white fsize1" to="/Disclaimer" style={{color:"white"}}>Disclaimer</Link></span>
        </Col>
        </Row>
        <Col lg={6}>
        </Col>
        <Col lg={6} className="box mt-5 text-center">
        <a href="https://twitter.com/LawBlocks"><AiOutlineTwitter color="grey" size={25}/></a>
    
        <a href="https://www.linkedin.com/in/law-blocks-365731225/"><TiSocialLinkedin color="grey" size={25}/></a>
        
        {/* <FaFacebookF color="grey" size={25}/> */}
        
        <a href=""><FaTelegramPlane color="grey" size={25}/></a>
        
        {/* <AiFillYoutube color="grey" size={25}/> */}
        
        <a href="https://medium.com/@lawblocks"><AiOutlineMedium color="grey" size={25}/></a>
        
        <a href=""><GoMarkGithub color="grey" size={25}/></a>
        
        <a href="https://www.reddit.com/u/LawBlocks?utm_medium=android_app&utm_source=share"><AiOutlineReddit color="grey" size={25}/></a>

        <a href="https://discord.gg/9eRv89bt"><BsDiscord color="grey" size={25}/></a>
        <br/><br/>
        </Col>
        <p className="form Handintechnology">Designed and Developed by <a href="https://handsintechnology.com/" className="Handintechnology">Hands In Technology</a></p>
        </Row>
</React.Fragment>
)
}

export default Exchange;