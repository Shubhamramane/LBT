import './App.css';
import React,{useEffect} from 'react';
import {Navbar,Container,Nav,Button,Row,Col,Form,Card} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import image4 from './image/image 4.svg';
import Tokencoin from './image/Tokencoin.png';
import Union from './image/Union.svg';
import White from './Documents/Law_Block_Whitepaper.pdf';
import Reddit from './image/Ellipse70.svg';
import Discord from './image/Ellipse71.svg';
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

function CommunitySupport(){

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

<Container className="Community-justify">
<h1 className="mt-5 block">Join the Law Blocks Community</h1>
<p className="mt-3">The Law Blocks Community includes lawyers, arbitration chambers, regulators, 
companies, developers, individuals and legal tech enthusiasts.
</p>
<p className="mt-3">Law Blocks community has been developed over time, incorporating scientific, 
technical and legal experts from all around the world. Are you one of us?
</p>
</Container>

<Container>
    <Row className="justify-content-center mt-5">
    <h1 className="block mb-5">Need Community Support?</h1>
        <Col lg={5}>
        <Row className="mb-5">
            <Col lg={2}>
            <img src={Reddit}  className="community-support"></img>
            </Col>
            <Col lg={6} className="com-support">
            <h4>Reddit</h4>
            <p>Join Reddit to get Community Support</p>
            <a href="https://www.reddit.com/u/LawBlocks?utm_medium=android_app&utm_source=share">Join Reddit</a>
            </Col>
        </Row>
        </Col>
        
        <Col lg={5}>
        <Row className="mb-5">
            <Col lg={2}>
            <img src={Discord} className="community-support"></img>
            </Col>
            <Col className="down">
            <h4>Discord</h4>
            <p>Join Discord to get Community Support</p>
            <a href="https://discord.gg/9eRv89bt">Join Discord</a>
            </Col>
        </Row>
        </Col>
    </Row>
</Container>

{/* <Row className="bg mt-5">
        <Col lg={6} className="mt-5">
            <h2 className="form1 fonts ms-4">Get the latest on Law Blocks</h2>
            <p className="form fonts ms-4">Subscribe to the Law Blocks newsletter to get curated content on legal tech,
                 updates on our ecosystem and interesting insights into our products.
            </p>
        </Col>

        <Col lg={5} className="ms-4 mt-5">
            <Form>
                <Form.Label className="form">First Name <span className="star">*</span></Form.Label>
                <Form.Control type="text"/>
                <Form.Label className="form">Last Name <span className="star">*</span></Form.Label>
                <Form.Control type="text"/>
                <Form.Label className="form">Are you <span className="star">*</span></Form.Label>
                <Form.Control type="text"/>
                <Form.Label className="form">Email <span className="star">*</span></Form.Label>
                <Form.Control type="Email"/>

                <p className="mt-3 form fonts">By submitting this form, you confirm that you have read LB's Privacy Policy 
                    and you consent to the processing of your personal data for the purpose of receiving
                     the newsletter periodically.
                </p>
                <Button className="btn1 mt-2 fonts">SUBMIT</Button><br/><br/>
            </Form>
        </Col>

</Row> */}



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

export default CommunitySupport;