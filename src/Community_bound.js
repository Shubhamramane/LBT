import './App.css';
import React,{useEffect} from 'react';
import {Navbar,Container,Nav,Button,Row,Col,Form,Card} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import image4 from './image/image 4.svg';
import Tokencoin from './image/Tokencoin.png';
import Union from './image/Union.svg';
import White from './Documents/Law_Block_Whitepaper.pdf';
import clock from './image/clock.svg';
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

function CommunityBound(){
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

<Container  className="Community-Bounty-justify">
<h1 className="community-bounty">Community Bounty</h1>
<h6>Contribute to the LB Ecosystem and earn rewards!</h6>

<p className="mt-5">Law Blocks has launched series of bounty reward program where participants will 
have an opportunity to earn Law Blocks Token (LBT) every month. The participants 
will be required to complete various bounty tasks to receive Law Block Token (LBT)
on approval post evaluation. The more tasks completed, the more Law Block Token 
(LBT) you can earn.
</p>
<p>Simply submit proof of work through a Google form and it will be reviewed by our 
Bounty Manager and the Bounty allocation would be made to selected program at 
the end of each month.
 </p>

<Row className="justify-content-center">
<Col lg={4}>
 <Card className="mt-5" style={{width: '18rem' }}>
  <Card.Body>
    <Card.Title>Bug Bounty Program for Law Block Token (LBT)</Card.Title>
    <Card.Text>
     <p>Up to 5000 USD worth Law Block Token (LBT) for Critical bugs</p>
     <p>Law Blocks Token (LBT) is happy to release the Bug Bounty Program for testing the law Blocks Platform.</p><br/>
     <p className="clock"><img src={clock}></img><b className="ms-1">Status</b><span className="run-right">COMING SOON</span></p>
    </Card.Text>
    <Button variant="primary">Apply</Button>
    <Button variant="primary" className="ms-4">Detailed Rules</Button>
  </Card.Body>
</Card>
</Col>

<Col lg={4}>
 <Card className="mt-5" style={{width: '18rem' }}>
  <Card.Body>
    <Card.Title>Exchange Integration Fees Bounty</Card.Title>
    <Card.Text>
     <p>Up to 140% of the Exchange Technical Integration Fees</p>
     <p className="mb-5">Want to see Law Block Token (LBT) listed on your favourite Digital Asset Exchange? 
        If you are willing to pay for technical integration...</p>
      <p className="clock"><img src={clock}></img><b className="ms-1">Status</b><span className="run-right">COMING SOON</span></p>
    </Card.Text>
    <Button variant="primary">Apply</Button>
    <Button variant="primary" className="ms-4">Detailed Rules</Button>
  </Card.Body>
</Card>
</Col>

<Col lg={4}>
 <Card className="mt-5" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Crypto Custodian Integration Fees Bounty</Card.Title>
    <Card.Text>
     <p>Up to 140% of the crypto custodian Technical Integration Fees</p>
     <p>Want to see Law Block Token (LBT) listed on your favourite Cryptocurrency asset 
        custodian? If you are willing to pay for technical integration...</p>
      <p className="clock"><img src={clock}></img><b className="ms-1">Status</b><span className="run-right">COMING SOON</span></p>
    </Card.Text>
    <Button variant="primary">Apply</Button>
    <Button variant="primary" className="ms-4">Detailed Rules</Button>
  </Card.Body>
</Card>
</Col>

<Col lg={4}>
 <Card className="mt-5" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Hardware/Software Wallet Integration Fees Bounty</Card.Title>
    <Card.Text>
     <p>Up to 140% of the hardware/software wallet Technical Integration Fees</p>
     <p>Want to see Law Block Token (LBT) listed on your favourite hardware/software wallet? If you are willing 
        to pay for technical integration...
    </p>
    <p className="clock"><img src={clock}></img><b className="ms-1">Status</b><span className="run-right">COMING SOON</span></p>
    </Card.Text>
    <Button variant="primary">Apply</Button>
    <Button variant="primary" className="ms-4">Detailed Rules</Button>
  </Card.Body>
</Card>
</Col>

<Col lg={4}>
 <Card className="mt-5" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Exchange Integration Fees Bounty</Card.Title>
    <Card.Text>
     <p className="mb-4">Up to 500 USD worth LBT</p>
     <p className="mb-5">LBT invites developers to create API for Migration of data from AWS, Google Cloud,
          Azure or such platform to LBT...</p><br/><br/>
          <p className="clock"><img src={clock}></img><b className="ms-1">Status</b><span className="run-right">COMING SOON</span></p>
    </Card.Text>
    <Button variant="primary">Apply</Button>
    <Button variant="primary" className="ms-4">Detailed Rules</Button>
  </Card.Body>
</Card>
</Col>

<Col lg={4}>
 <Card className="mt-5" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Crypto Custodian Integration Fees Bounty</Card.Title>
    <Card.Text>
     <p className="mb-4">UP to 100 USD worth LBT</p>
     <p className="mb-5">Write an article about the latest news, probable case studies, and the advantages of LBT.</p><br/><br/><br/>
     <p className="clock"><img src={clock}></img><b className="ms-1">Status</b><span className="run-right">COMING SOON</span></p>
    </Card.Text>
    <Button variant="primary">Apply</Button>
    <Button variant="primary" className="ms-4">Detailed Rules</Button>
  </Card.Body>
</Card>
</Col>
</Row>
<Row>
<Col lg={4}>
 <Card className="mt-5" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Video Bounty</Card.Title>
    <Card.Text>
     <p>UP to 100 USD worth LBT</p>
     <p>Create a video about the latest news and projects on LBT Ecosystem and post it on YouTube.</p><br/><br/>
     <p className="clock"><img src={clock}></img><b className="ms-1">Status</b><span className="run-right">COMING SOON</span></p>
    </Card.Text>
    <Button variant="primary">Apply</Button>
    <Button variant="primary" className="ms-4">Detailed Rules</Button>
  </Card.Body>
</Card>
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

                <p className="mt-3 form fonts">By submitting this form, you confirm that you have read LBT's Privacy Policy 
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

export default CommunityBound;