import './App.css';
import React from 'react';
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Contact(){
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
<br/><br/><br/><br/>

<Container>
{/* <h1 claasName="mt-5">Contact Us</h1>
<h6>If you have any suggestions, concerns or questions or need support from the team, 
    please get in touch with us.<br/>
If you are interested in becoming a partner please consult the partnership page</h6> */}

{/* <Form className="formT mt-5 formbox">
    <h4 className="us">Get in touch with us</h4>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label className="us">Name</Form.Label>
    <Form.Control type="Name"/>
    <Form.Label className="us">Email Id</Form.Label>
    <Form.Control type="email"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label className="us">Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button className="send">Send</Button>
</Form> */}
</Container>
{/* <Row className="bg mt-5">
        <Col lg={6} className="mt-5">
            <h2 className="form1 fonts ms-4">Get the latest on LBT</h2>
            <p className="form fonts ms-4">Subscribe to the LBT newsletter to get curated content on legal tech,
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

                <p className="mt-3 form fonts">By submitting this form, you confirm that you have read LBT's Privacy Policy 
                    and you consent to the processing of your personal data for the purpose of receiving
                     the newsletter periodically.
                </p>
                <Button className="btn1 mt-2 fonts">SUBMIT</Button><br/><br/>
            </Form>
        </Col>

    </Row> */}



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

export default Contact;