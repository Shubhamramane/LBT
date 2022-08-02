import React,{useEffect} from 'react';
import './App.css';
import {Navbar,Container,Nav,Button,Row,Col,Form} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import image4 from './image/image 4.svg';
import Union from './image/Union.svg';
import White from './Documents/Law_Block_Whitepaper.pdf';
import Tokencoin from './image/Tokencoin.png';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialLinkedin } from 'react-icons/ti';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineMedium } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineReddit } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import Circel from './icon/graph.png';
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
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Tokenomics(){

  useEffect(() =>{
    window.scrollTo(0,0)
  },[])

return(
<React.Fragment>
<Navbar expand="lg">
  <Container>
  <Link className="uline mt-1" to="/Home"><img src={LBT} style={{height:"68px"}}></img></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mt-3">
          <Link className="uline mt-1" to="/Home">Home</Link>
          <Link className="uline mt-1" to="/About">About</Link>
          <Link className="uline mt-1" to="/Product">Product</Link>
          <Link className="uline mt-1" to="/Our_Team" refresh="true">Our Team</Link>
          <Link className="uline mt-1" to="/CommunitySupport">Community</Link>
          {/* <Link className="uline mt-1" to="/Contact">Contact</Link> */}
          <Link className="uline mt-1" to="/Sign_In"><button className="btn2">Login</button></Link>

        {/* <Nav.Link className="uline mt-1" href="/Home">Home</Nav.Link>
        <Nav.Link className="uline mt-1" href="/About">About</Nav.Link>
        <Nav.Link className="uline mt-1" href="/Product">Product</Nav.Link>
        <Nav.Link className="uline mt-1" href="/Our_Team">Our Team</Nav.Link>
        <Nav.Link className="uline mt-1" href="/CommunitySupport">Community</Nav.Link>
        <Nav.Link className="uline mt-1" href="/Sign_In"><button className="btn2">Login</button></Nav.Link> */}
          
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br/><br/>

<Container>
<Row>

    <h1 className="mt-5 me-4">Tokenomics</h1>
    <p className="mb-5">An essential utility for our services.</p>

</Row>
</Container>
<Container>
<h4 className="Tokenomic-justify">Law Blocks community has been developed over time, incorporating scientific, 
technical and legal experts from all around the world. Are you one of us?
</h4>

<Row className="justify-content-center mt-5">
    <Col lg={3} className="mt-2 mb-2 ms-2 shadow">
        <h4  className="Tokenomic-justify">Our legal tech eco system services can be paid with Law Block Token (LBT)</h4>
    </Col>
    <Col lg={3} className="mt-2 mb-2 ms-2 shadow">
        <h4  className="Tokenomic-justify">Legal Community get paid with Law Block Token (LBT)</h4>
    </Col>
    <Col lg={3} className="mt-2 mb-2 ms-2 shadow">
        <h4 className="Tokenomic-justify">Community service provider are incentivized into Law Block Token (LBT) </h4>
    </Col>
</Row>

<Row className="justify-content-center mt-5">
  <Col lg={6} className="shadow">
  <h1>Token supply : 1 Billion</h1>
  </Col>
</Row>
<Row className="mt-5 justify-content-center">
  <Col lg={6}>
    <img src={Circel}className="text-center graph1"></img>
  </Col>
  <Col lg={5} className="mt-4">
  <img src={GCircel1} className="me-2"></img><span><b style={{color:"grey"}}>Ecosystem 40%</b></span><br/>
  <img src={GCircel2} className="me-2"></img><span><b style={{color:"grey"}}>Founders 20%</b></span><br/>
  <img src={GCircel4} className="me-2"></img><span><b style={{color:"grey"}}>Core Team 2%</b></span><br/>
  <img src={GCircel5} className="me-2"></img><span><b style={{color:"grey"}}>Contingency 10%</b></span><br/>
  <img src={GCircel6} className="me-2"></img><span><b style={{color:"grey"}}>Exchange listing and MM 18%</b></span><br/>
  <img src={GCircel7} className="me-2"></img><span><b style={{color:"grey"}}>Private sale 10%</b></span><br/>
  {/* <img src={GCircel8} className="me-2"></img><br/> */}
  {/* <img src={GCircel9} className="me-2"></img><br/> */}
  {/* <img src={GCircel3} className="me-2"></img><span><b style={{color:"grey"}}></b></span><br/> */}
  </Col>
</Row>

<Row className="justify-content-center mt-5">
  <Col lg={6} className="shadow">
    <h1>Token Vesting Schedule</h1>
  </Col>
</Row>

<Row className="text-center mt-5">
  <Container>
  <Col lg={10} className="text-center">
    <img src={image11} className="text-center graph"></img>
  </Col>
  </Container>
</Row>

<Row className="justify-content-center mt-5">
  <Col lg={5}>
  <img src={GSquare1} className="me-2"></img>Private Placement, Seed Round, Community Placement<br/><br/>
  <img src={GSquare2} className="me-2"></img>Technology Ops, Partnership<br/><br/>
  </Col>
  <Col lg={5}>
  <img src={GSquare3} className="me-2"></img>Core Team, Ecosystems Adoption Rewards, Contingency<br/><br/>
  <img src={GSquare4} className="me-2"></img>Data Farming Reward
  </Col>
</Row>

<h1 className="mt-5">Exchange Listing Resource</h1>
<p className="Tokenomic-justify">Details require to list LBT token with exchange. LBT is a utility token deployed on XinFin Network.
</p>
<p className="Tokenomic-justify">LBT token build on XinFin Network</p>
<p>Smart Contract Address:<a href="https://explorer.xinfin.network/tokens/xdc05940b2df33d6371201e7ae099ced4c363855dfe">xdc05940b2df33d6371201e7ae099ced4c363855dfe</a></p>
<p className="Tokenomic-justify">(Please cross check the LBT Address before any transfers are made. Tokens should never
   be sent to Smart Contract Address, Any tokens sent to smart contract cannot be retrieved.)</p><br/><br/>


{/* <p>Github:<a href=" https://github.com">https://github.com</a></p> */}

<p>Whitepaper:<a href={White} download className="white fsize1">Whitepaper</a></p>

{/* <p>Telegram:<a href=" https://">https://</a></p> */}

{/* <p>YouTube:<a href=" https://www.youtube.com/channel/">https://www.youtube.com/channel/</a></p> */}

<p>Twitter:<a href="https://twitter.com/LawBlocks">https://twitter.com/LawBlocks</a></p>

<p>LinkedIn:<a href=" https://www.linkedin.com/in/law-blocks-365731225">https://www.linkedin.com/in/law-blocks-365731225</a></p>

{/* <p>Facebook:<a href=" https://www.facebook.com/">https://www.facebook.com/</a></p> */}

<p>Medium: <a href="https://medium.com/@lawblocks">https://medium.com/@lawblocks</a></p>

<p>Reddit:<a href="https://www.reddit.com/u/LawBlocks?utm_medium=android_app&utm_source=share">https://www.reddit.com/u/LawBlocks?utm_medium=android_app&utm_source=share</a></p>

<p>Discord:<a href="https://discord.gg/9eRv89bt">https://discord.gg/9eRv89bt</a></p>

<p>LBT Logo:<a href={Tokencoin} download >Download LBT Logo in png formats.</a></p>

</Container>

<Row className="justify-content-center footer">
        <Col lg={2} sm={2} className="ms-3 mt-2">
        <img src={LBT} style={{height:"80px"}}></img><br/>
            {/* <button className="form fonts mt-3 wpaper" style={{backgroundColor:"#292A33"}}><a href={White} download className="white">Whitepaper</a></button> */}
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize"><b>LBT</b></p>
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/About">About Us</Link></p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/JusticePlatform">Open Justice Platform</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/LBTEditor">LBT Editor</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/LBTToken">LBT Token</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/Tokenomics">Tokenomics</Link></p>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize">Community</p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Community">Community</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/CommunitySupport">Community Support</Link></p>
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/CommunityBound">Community Bounty</Link></p>
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/Our_Team">About Team</Link></p>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize">Resource</p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Exchange">Exchange</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/WalletSupport">Wallet Support</Link></p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/RoadMap">Road Map</Link></p> */}
            <p className="form fonts fsize1"><a href={White} download className="white fsize1 whitepaper-color">White paper</a></p>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize">Other Link</p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/Contact">Contacts</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/PrivacyPolicy">Privacy Policy</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/FAQ">FAQ</Link></p>
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
        <Col lg={6} className="box mt-3 text-center symbol">
        <a href="https://twitter.com/LawBlocks"><AiOutlineTwitter size={25}/></a>
    
        <a href="https://www.linkedin.com/in/law-blocks-365731225/"><TiSocialLinkedin size={25}/></a>
        
        {/* <FaFacebookF size={25}/> */}
        
        <a href=""><FaTelegramPlane size={25}/></a>
        
        {/* <AiFillYoutube size={25}/> */}
        
        <a href="https://medium.com/@lawblocks"><AiOutlineMedium size={25}/></a>
        
        <a href=""><GoMarkGithub size={25}/></a>
        
        <a href="https://www.reddit.com/u/LawBlocks?utm_medium=android_app&utm_source=share"><AiOutlineReddit size={25}/></a>

        <a href="https://discord.gg/9eRv89bt"><BsDiscord size={25}/></a>
        <br/><br/>
        </Col>
        <span className="form Handintechnology">Designed and Developed by <a href="https://handsintechnology.com/" className="Handintechnology">Hands In Technology</a></span>
        </Row>
</React.Fragment>
    )
}

export default Tokenomics;