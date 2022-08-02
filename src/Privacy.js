import React,{useEffect} from 'react';
import './App.css';
import {Navbar,Container,Nav,Button,Row,Col,Form} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import order from './icon/order.svg';
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
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Privacy(){

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
<Container>

<Row>
    <Col lg={12} className="privacyimg">
    
    </Col>
</Row>


<h4 className="block">Privacy policy</h4>
<p>The most significant aspect of Law Blocks is to preserve your belief and confidence in us by safeguarding 
    your privacy. You will be provided with complete information about the process of your data being collected, 
    stored/saved and utilized by us. We recommend you to kindly review our Privacy Policy thoroughly. You 
    explicitly permit us to use and reveal your personal details as per the Privacy Policy, by visiting Law 
    Blocks’s Website/WAP Site/Applications. You will forbid using or accessing Law Blocks website, WAP site 
    or mobile applications, if you disagree to any term/terms of this policy. Law Blocks has the authority 
    to alter the terms of this policy without any prior communication. You are requested to keep yourself 
    updated on any such alterations made by Law Blocks by keeping a check regularly. The Privacy Policy must 
    evenly pertain to Law Blocks desktop website, Law Blocks mobile WAP site & Law Blocks mobile/desktop 
    applications.
</p>

<h4 className="block">General</h4>
<p>There will be no selling, sharing or renting of your personal details to any kind of 3rd party. We also 
    prohibit utilizing your email addresses or contact numbers for unwanted emails or/and SMS. Law Blocks will 
    send emails or/and SMS only in relation with the terms of services and the Privacy Policy. Law Blocks will 
    disclose overall survey details taken by 3rd party for statistical purpose. Law Blocks is responsible to 
    disclose your personal details on receiving any kind of legal order or decree stating to disclose the details.
</p>

<h4 className="block">Personal Information</h4>
<p>The personal Information suggests and comprises of all the details which can be connected to a particular 
    individual or/and to ascertain any individual, like name, date of birth, permanent address, email ID, 
    telephone number, mailing address, credit card details like cardholder name, expiry date and any personal 
    details which may have been freely given by the person/user for availing any service/services on Law Blocks. 
    When, as a user, you will browse through the Law Blocks’s site, we shall gather information connected with 
    the domain and the host through which you access the internet, the IP address (or Internet Protocol address) 
    of computer and/or the ISP (Internet Service Provider) you are utilizing, and also, the statistical data of 
    the anonymous site.
</p>

<h4 className="block">Use of Personal Information</h4>
<p>We use personal information to offer you the services you explicitly solicited for, to settle disputes, 
    fix concerns, facilitate safe services, gather money, survey customer interest in all our services, update 
    you on offers, services, products, updates, customize your personal experience, identify & safeguard us 
    against fraud, error, and other kinds of criminal activities, execute our terms & conditions, etc. We may 
    periodically request you to complete some open online surveys. The surveys may request you for contact and 
    demographic details (such as zip code, gender, age etc.). The data collected by Law Blocks is modified and 
    personalized as per your practice and understanding; so that you are provided and shown with a subject of 
    your liking.
</p>

<h4 className="block">Cookies</h4>
<p>Cookies are a very small piece of information that gets stored by the web server running on the web 
    browser and that information can later be referred back from that specific browser. Law Blocks uses 
    cookies & tracking technology based on the types of features offered. The cookies and other tracking 
    technology will not collect any personal; but, if you earlier shared personally identifiable details, 
    the cookies may get attached to such data. Combined cookie & tracking information may/may not be provided 
    to third parties and more.
</p>

<h4 className="block">Links to other websites</h4>
<p>There are other websites showing links to Law Blocks website. When the Law Blocks site links appear on 
    other websites, then such websites shall gather the said personal information associated with you for 
    identification purpose. Law Blocks will not be liable for any such privacy rules or matters of all those 
    linked or connected websites.
</p>

<h4 className="block">Security</h4>
<p>As far as security measures are concerned, Law Blocks’s actions to safeguard the loss, the misuse and the 
    alterations made to any information, are under sever charge. Law Blocks provides a secured server system 
    on every occasion where any changes are made by you by accessing your account details. All the information 
    collected by Law Blocks is under severe security strategies framed by Law Blocks, guarding it against 
    unofficial access.
</p>

<h4 className="block">Consent</h4>
<p>Once you browse the Law Blocks website or provide your details, you agree and consent for the information 
    gathered & use of such information that you have revealed to Law Blocks, in agreement with the Privacy Policy.
</p>
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
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Contact">Contacts</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/PrivacyPolicy">Privacy Policy</Link></p> */}
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
        
        {/* <FaFacebook size={25}/> */}
        
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

export default Privacy;

