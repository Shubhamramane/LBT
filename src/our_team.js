import './App.css';
import React,{useEffect} from 'react';
import {Navbar,Container,Nav,Button,Row,Col,Card} from 'react-bootstrap';
import logo from './icon/Logo.svg';
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import Tokencoin from './image/Tokencoin.png';
import image4 from './image/image 4.svg';
import Union from './image/Union.svg';
import White from './Documents/Law_Block_Whitepaper.pdf';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialLinkedin } from 'react-icons/ti';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineMedium } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineReddit } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Team1 from './image/Team1.png';
import Team2 from './image/Team2.jpg';
import Ellipse53 from './image/Ellipse53.svg';
import Ellipse54 from './image/Ellipse54.svg';
import Ellipse55 from './image/Ellipse55.svg';
import Ellipse56 from './image/Ellipse56.svg';

function Our_Team(){

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
          <Link className="uline mt-1" to="/Our_Team">Our Team</Link>
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

<Container className="Our-team-justify">
<h1 className="our-team">About Team</h1> 
<h3 className="mt-5 block">Law Blocks Team</h3>
<p>The Law Blocks Team is the beating heart of the Law Blocks ecosystem. Comprised of 
the core team, Advisors, and Scientific Committee, they dedicate all their energy to 
making the dream of a decentralized legal ecosystem possible.
</p>
    
<h3 className="mt-5 block">Meet the Law Blocks Team</h3>
<p>From the very beginning, Law Blocks has been working with experts in the field of 
legal and information technology. Here we present the team of passionate 
visionaries that are helping us to change the legal tech world.
</p>
<p>
Our Scientific Committee and our Advisory Board are working tightly with the core 
team to make our dream of guaranteed trust and accessible justice for all come true.
</p>


<h3 className="platform me-5 mt-5 block">Law Blocks Community</h3>
<p className="platform">The Law Blocks Community includes volunteers from many backgrounds that are 
helping to build a better legal framework for the world. They actively participate with 
the initiatives and support in managing the community and offline events and 
provide more general support simply by holding Law Block Tokens (LBT).
</p>

<h3 className="block mt-5">A Team of Business and Technology Pioneers.</h3>
    <p>Guided by our values, Law Blocks Platform was founded to solve the legal challenges 
        caused by the use of Centralized system. We've firmly believed that your legal data 
        should not be governed by any private interest. That's the reason why we deploy the 
        power of Open Source Technology + Censorship Free Decentralized platform to 
        engineer a better future.
    </p>

    <p>We’re proud to embrace the same values for Free Exchange of Ideas, with which internet was conceptualized.
    </p>

<Row className="text-center mt-5">
<h1 className="mb-4">Our Core Team</h1>
    <Col lg={3}>
    <Card>
    <Card.Img variant="top" src={Team1}/>
    <Card.Body>
    <Card.Title>Hitomi Ikeda</Card.Title>
    </Card.Body>
    </Card>
    </Col>
    
    <Col lg={3}>
    <Card>
    <Card.Img variant="top" src={Team2} style={{height:"241px"}}/>
    <Card.Body>
    <Card.Title>Rikku Yamaguchi.B</Card.Title>
    </Card.Body>
    </Card>
    </Col>

    <Col lg={3}>
    <Card>
    <Card.Img variant="top" src={Ellipse55}/>
    <Card.Body>
    <Card.Title>Brooklyn Simmons</Card.Title>
    </Card.Body>
    </Card>
    </Col>

    <Col lg={3}>
    <Card>
    <Card.Img variant="top" src={Ellipse56}/>
    <Card.Body>
    <Card.Title>Brooklyn Simmons</Card.Title>
    </Card.Body>
    </Card>
    </Col>

    <Col lg={3} className="mt-3">
    <Card>
    <Card.Img variant="top" src={Ellipse53}/>
    <Card.Body>
    <Card.Title>Brooklyn Simmons</Card.Title>
    </Card.Body>
    </Card>
    </Col>

    <Col lg={3} className="mt-3">
    <Card>
    <Card.Img variant="top" src={Ellipse54}/>
    <Card.Body>
    <Card.Title>Brooklyn Simmons</Card.Title>
    </Card.Body>
    </Card>
    </Col>

    <Col lg={3} className="mt-3">
    <Card>
    <Card.Img variant="top" src={Ellipse55}/>
    <Card.Body>
    <Card.Title>Brooklyn Simmons</Card.Title>
    </Card.Body>
    </Card>
    </Col>

    <Col lg={3} className="mt-3">
    <Card>
    <Card.Img variant="top" src={Ellipse56}/>
    <Card.Body>
    <Card.Title>Brooklyn Simmons</Card.Title>
    </Card.Body>
    </Card>
    </Col>

</Row>
</Container>

<Row className="bg mt-5 text-center">
<h3 className=" mt-5 new fonts join">JOIN US</h3>
<h5 className=" mb-5 new fonts ">Do you think you have the right talent to be part of our team, join our community.</h5>
    {/* <Col lg={12}>
        <h3 className=" mt-5 new fonts join">JOIN US</h3>
        <h5 className=" mb-5 new fonts ">Do you think you have the right talent to be part of our team?</h5>
    </Col> */}
    {/* <Col lg={4}>
        <button className="btn4 mt-5 mb-5 fonts">LEARN MORE</button>
    </Col> */}
</Row>

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
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Contact">Contacts</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 " to="/PrivacyPolicy">Privacy Policy</Link></p> */}
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

export default Our_Team;