import './App.css';
import React,{useEffect} from 'react';
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import Team from './image/Ellipse72.svg';
import Linkedin from './image/Linkedin.svg';
import Twitter from './image/Twitter.svg';
import {Navbar,Container,Nav,Button,Row,Col,Form,Card} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import image4 from './image/image 4.svg';
import Union from './image/Union.svg';
import Tokencoin from './image/Tokencoin.png';
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function AboutTeam(){

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
    {/* <h1>About Team</h1>
    <h4>A Team of Business and Technology Pioneers.</h4>
    <p>Guided by our values, StorX Network was founded to solve the Data Protection challenges 
        caused by the use of Centralized Cloud Storage. We've firmly believed that your private
         data should not be governed by any private interest. That's the reason why we deploy 
         the power of Open Source Technology + Censorship Free Decentralized Storage to engineer
          a better future.
    </p>

    <p>We’re proud to embrace the same values for Free Exchange of Ideas, with which internet 
        was conceptualized.
    </p> */}

    <h1 style={{textAlign:"center"}}>Our Team</h1>
    <Row className="justify-content-center mt-5 About-Card">
        <Col lg={5} className="text-center mb-5">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Team} style={{height:"100px"}} className="mt-5" />
            <Card.Body>
            <Card.Title>Handy Barot</Card.Title>
            <Card.Text>
            <p>Handy has overall responsibility to shape the strategy to be in line with its
                 purpose, values, and mission. He has over 15 years of international business 
                 experience and before StorX, has served in multiples roles in leadership positions.
            </p>
            </Card.Text>
                <img src={Twitter}></img> <img src={Linkedin} className="ms-4"></img> 
            </Card.Body>
        </Card>
        </Col>

        <Col lg={5}  className="text-center">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Team} style={{height:"100px"}} className="mt-5"/>
            <Card.Body>
            <Card.Title>Handy Barot</Card.Title>
            <Card.Text>
            <p>Handy has overall responsibility to shape the strategy to be in line with its
                 purpose, values, and mission. He has over 15 years of international business
                  experience and before StorX, has served in multiples roles in leadership positions.
            </p>
            </Card.Text>
            <img src={Twitter}></img> <img src={Linkedin} className="ms-4"></img> 
            </Card.Body>
        </Card>
        </Col>
        <h1 style={{textAlign:"center"}} className="mt-5">Our Advisors</h1>
        <Col lg={5}  className="text-center mt-5">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Team} style={{height:"100px"}} className="mt-5"/>
            <Card.Body>
            <Card.Title>Handy Barot</Card.Title>
            <Card.Text>
            <img src={Twitter}></img> <img src={Linkedin} className="ms-4"></img> 
            </Card.Text>
            
            </Card.Body>
        </Card>
        </Col>

        <Col lg={5}  className="text-center mt-5">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Team} style={{height:"100px"}} className="mt-5"/>
            <Card.Body>
            <Card.Title>Handy Barot</Card.Title>
            <Card.Text>
            <img src={Twitter}></img> <img src={Linkedin} className="ms-4"></img> 
            </Card.Text>
            
            </Card.Body>
        </Card>
        </Col>
    </Row>
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
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 foooterlink" to="/AboutTeam">About Team</Link></p>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize">Resource</p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Exchange">Exchange</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 foooterlink" to="/WalletSupport">Wallet Support</Link></p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/RoadMap">Road Map</Link></p> */}
            <p className="form fonts fsize1"><a href={White} download className="white fsize1 whitepaper-color FAQ">White paper</a></p>
        </Col>
        <Col lg={2} sm={2} className="ms-3 mt-4">
            <p className="form fonts fsize">Other Link</p>
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/Contact">Contacts</Link></p> */}
            {/* <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1" to="/PrivacyPolicy">Privacy Policy</Link></p> */}
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 foooterlink" to="/FAQ">FAQ</Link></p>
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

export default AboutTeam;