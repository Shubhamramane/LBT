import './App.css';
import {Navbar,Container,Nav,Button,Row,Col,Card,Form,Carousel} from 'react-bootstrap';
import logo from './icon/Logo.svg';
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import homeicon from './image/homeicon.svg';
import Rectangle from './image/Blockchain_img.gif';
import Chip from './image/chip.svg';
import Security from './image/Security.png';
import blind from './image/Frame61.svg';
import between from './image/Frame60.svg';
import order from './image/Frame62.svg';
import earth from './icon/Vector.svg';
import setting from './icon/Vector2.svg';
import active from './icon/Vector1.svg';
import file from './icon/Vector3.svg';
import pencil from './icon/Frame16.svg';
import pen from './icon/Frame17.svg';
import coma from './icon/coma.svg';
import new1 from "./image/new1.svg";
import new2 from './image/new2.svg';
import new3 from './image/new3.svg';
import Tokencoin from './image/Tokencoin.png';
import React,{useState,useEffect} from 'react';
import White from './Documents/Law_Block_Whitepaper.pdf';
import lbtstrip from './image/lbtdata.svg';
import dcentwallet_logo from './image/dcentwallet_logo.png';
import indsoft_logo from './image/indsoft_logo.png';
import xinfin_logo from './image/xinfin_logo.png';
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
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>

function Home(){

  useEffect(() =>{
    window.scrollTo(0,0)
  },[])


return(
<React.Fragment>
{/* style={{borderBottom:"2px solid #16d5ff"}} */}
<Navbar expand="lg">
  <Container className="navbar-margin">
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
          <Link className="uline l mt-1" to="/Sign_In"><button className="btn2">Login</button></Link>
          
          
         
        {/* <Nav.Link className="uline mt-1" href="/Home">Home</Nav.Link>
        <Nav.Link className="uline mt-1" href="/About">About</Nav.Link>
        <Nav.Link className="uline mt-1" href="/Product">Product</Nav.Link>
        <Nav.Link className="uline mt-1" href="/Our_Team">Our Team</Nav.Link>
        <Nav.Link className="uline mt-1" href="/CommunitySupport">Community</Nav.Link>
        <Nav.Link className="uline mt-1" href="/Sign_In"><button className="btn2">Login</button></Nav.Link> */}
        {/* <Nav.Link className="uline mt-1" href="#">Contacts</Nav.Link> */}             
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br/>

{/* <Container> */}
  <Row className="justify-content-center blockchain_img">
      <Col lg={5}>
        <h1 className="bold" style={{color:"white"}}>Law Blocks</h1>
        <h3 className="bold1" style={{color:"white"}}>A Legal Tech Community</h3>
        <p className="" style={{color:"white"}}>Law Blocks Creates your Smart Legal Contracts using Blockchain Technology.
          Law Block Token (LBT) is a XRC-20 utility token that powers 
          Law Blocks Eco System through <b>XDC Blockchain Network.
          </b >
        </p>
        <Link className="uline mt-1 white fsize1" to="/About"><button className="homebtn mt-5">Learn More</button></Link>
      </Col>

      <Col lg={5}>
      
      <div class="container"><img src={homeicon}className="homeicon ball"></img>
</div>
      </Col>
  </Row>
{/* </Container> */}

{/* <Row className="justify-content-center">
<Col lg={6} sm={6} className="bgimg1">
   <img src={Rectangle} className="Reactangle-gif"></img>
</Col>
    
<Col lg={6} sm={6} className="bgimg1">
<h5 className="homeh5">Law Blocks helps you to Create your Smart Legal Contract using Blockchain Technology</h5>
<img src={Chip} className="chip"></img>
</Col>
</Row>
  */}

{/* <Container className="mt-5"> */}
<Row className="justify-content-center" style={{backgroundColor:"#f6f6f6"}}>
<Col lg={3}></Col>
<Col lg={6}>
<h1 className="feature fonts">Law Blocks</h1>
<p className="feature1 fonts">Law Blocks is a one window blockchain-based ecosystem for creating, keeping records of contracts,
and solving disputes providing unbiased, swift & affordable resolutions through arbitration.
</p>
</Col>
<Col lg={3}></Col>

</Row>
    <Row className="justify-content-center" style={{backgroundColor:"#6CC6C7"}}>        
    <Col sm={5} className="mt-5">
    <h3 className="fonts paddingCenter" style={{color:"white"}}>Easy and Affordable Resolution</h3>
    <p className="fonts Easy paddingCenter" style={{color:"white"}}>If disputes arises, it can be resolved by open layer, 
community layer or court layer, without your physical presence through visual means.
    </p>
    <Button className="btn btnc fonts mb-3" variant="primary"><Link className="uline mt-1 learnmore" to="/About">Learn More</Link></Button>
    </Col>
    <Col className="mt-5" sm={5}>
        <img src={between} className="img4"></img>
    </Col>
    </Row>

    <Row className="justify-content-center" style={{backgroundColor:"#FD9737"}}>
    <Col className="mt-3 order-md-1" sm={4}>
            <img src={blind} className="img5"></img>
        </Col>
    <Col className="mt-5 order-md-2" sm={7}>
            <h3 className="fonts lside " style={{color:"white"}}>Keep away the probability of expensive & slow justice</h3>
            <p className="fonts lside " style={{color:"white"}}>An Opportunity to resolve disputes at a faster pace with a minimal cost and almost within no time.
            </p>
            <Button className="btn btnc fonts mb-3 lside" variant="primary"><Link className="uline mt-1 learnmore" to="/About">Learn More</Link></Button>
        </Col>    
    </Row>

    <Row className="justify-content-center" style={{backgroundColor:"#3EB2AB"}}>        
    <Col sm={5} className="mt-5">
    <h3 className="fonts" style={{color:"white"}}>Create your Legal Contracts</h3>
    <p className="fonts Create" style={{color:"white"}}>Create your legal contracts on the blockchain quickly. Make one from scratch or 
      choose from a list of templates drafted by experts.</p>
    <Button className="btn btnc fonts mb-3 Create" variant="primary"><Link className="uline mt-1 learnmore" to="/About">Learn More</Link></Button>
    </Col>
    <Col className="mt-3" sm={5}>
        <img src={order} className="img6"></img>
    </Col>
    </Row>

    <Row className="justify-content-center" style={{backgroundColor:"#010055"}}>
        {/* <Col className="mt-5 order-md-1" lg={7}>
            <img src={Security} className="img7"></img>
        </Col> */}
        {/* <Col className="mt-5 order-md-2" lg={12}>
            <h3 className="fonts lside" style={{color:"white"}}>A System truly smart truly legal, which protects your 
              privacy, secrecy through a technology you can trust - Blockchain.
            </h3>
            <p className="fonts lside" style={{color:"white"}}>Blockchain is system you can trust. It is an unbetable way to save
            your Privacy through decentralised system. 
            </p>
            <h6 className="color fonts">Download White Paper and understand all the details</h6>
            <a href={White} download className="white"><Button className="btn btncc fonts mb-3" variant="primary">Download</Button></a>
        </Col> */}
    </Row>


    <Row className="justify-content-center  home-features">
    <h1 className="featureh1 fonts">Law Blocks Features</h1>
    <span className="feature11 fonts">Law Blocks creates your smart legal contracts
        In just three steps, Law Blocks solves disputes through arbitration online. 
    </span>
    

    <Row className="justify-content-center block-features">
        <Col lg={4}>
        <h6 className="feature11">Dispute Resolutions</h6>
          <Row>
            <Col lg={3}>
              <img src={earth} className="hover"></img>
              <div className="sline"></div>
            </Col>

            <Col lg={9}>
              <h6 className="feature22">1. CONNECT</h6>
              <p className="feature22">Connect and choose Law Blocks for your dispute resolution.
              </p>
            </Col>
          </Row>

          <Row>
            <Col  lg={3}>
              <img src={active} className="hover"></img>
              <div className="sline"></div>
            </Col>

            <Col lg={8}>
              <h6 className="feature22">2. ACTIVATE</h6>
              <p className="feature22">Open and manage your dispute completely online</p>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <img src={setting} className="hover"></img>
              <div className="sline"></div>
            </Col>

            <Col lg={9}>
              <h6 className="feature22">3. ARBITRATION</h6>
              <p className="feature22">Agree with your Opposite -part to trigger your self-executing contract or 
              resolve your disagreement with arbitraged decision in an easy and affordable way
              </p>
              <button className="features-btn">Learn More</button>
            </Col>
          </Row>
        </Col>

        <Col lg={5}>
        <h6 className="feature11">Smart Legal Contracts</h6>
        <Row>
            <Col lg={3}>
              <img src={file} className="hover"></img>
              <div className="sline"></div>
            </Col>

            <Col lg={9}>
              <h6 className="feature22">1. CREATE</h6>
              <p className="feature22">Choose a customizable template or start composing a unique contract of your
                own from scratch, apart from yourselves accepting the necessary clauses that facilitates 
                the Blockchain Technology and Dispute Resolution mechanism
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <img src={pencil}  className="hover"></img>
              <div className="sline"></div>
            </Col>

            <Col lg={9}>
              <h6 className="feature22">2. COMPOSE</h6>
              <p className="feature22">Insert clauses and send notifications to the other party to 
              agree on individual clauses
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <img src={pen}  className="hover"></img>
              <div className="sline"></div>
            </Col>

            <Col lg={9}>
              <h6 className="feature22">3. DIGITAL SIGNATURE</h6>
              <p className="feature22">Digitally pay and sign with the other party to activate your contract
              </p>
              <button className="features-btn">Learn More</button>
            </Col>
          </Row>
        </Col>
    </Row>
    </Row>

  <img src={lbtstrip} className="lbtstrip"></img>

    <Container>
        <Row className="Ecosystem mt-5">
            <Col lg={6}>
                <h1 className="mt-4">Ecosystem Partner</h1>
                <p>Law Blocks extended ecosystem combines legal technology and business capabilities 
                  through a powerful ecosystem of market leaders and innovators.
                </p>
            </Col>

            <Col lg={6} className="mt-4">
                <img src={xinfin_logo} className="logo"></img>
                <img src={indsoft_logo} className="logo-indsoft"></img>
                <img src={dcentwallet_logo} className="logo"></img>
            </Col>
        
        </Row>
    </Container>

<Container>
<h1 className="blocks mt-5">Type of Legal Contracts</h1>
<button className="legal mt-3"><Link className="uline legal" to="/Documents">Legal Contracts</Link></button>
</Container>



<Row className="justify-content-center mt-5 home-featuress">
<Carousel>
  <Carousel.Item>
  <Row className="justify-content-center">
    <Col lg={6} className="mt-5">
        <img src={coma}></img>
        <p className="feature2"><h4>Benefits Of Using Blockchain</h4>
        Blockchain has the ability to share data in a secure way between people and institutions. No one has to 
        take responsibility to safeguard the data as it is a decentralised system.
        </p>

    </Col> 

    <Col lg={4}> 
        
    </Col>
  </Row>
  </Carousel.Item>

  <Carousel.Item>
  <Row className="justify-content-center">
    <Col lg={6} className="mt-5">
        <img src={coma}></img>
        <p className="feature2"><h4>Value</h4>
        Since the value of cryptocurrencies has soared to new heights, the term 'blockchain' has become 
        a buzzword in the digital world
        </p>

    </Col> 

    <Col lg={4}> 
     
    </Col>
  </Row>
  </Carousel.Item>

  <Carousel.Item>
  <Row className="justify-content-center">
    <Col lg={6} className="mt-5">
        <img src={coma}></img>
        <p className="feature2"><h4>Improved Security</h4>
        Blockchain helps to prevent fraud and unlawful behaviour by producing a record that can't be 
        changed and is encrypted end-to-end
        </p>

    </Col> 

    <Col lg={4}> 
        
    </Col>
  </Row>
  </Carousel.Item>

  <Carousel.Item>
  <Row className="justify-content-center">
    <Col lg={6} className="mt-5">
        <img src={coma}></img>
        <p className="feature2"><h4>Better transparency</h4>
        Participants in a blockchain network with permissioned access see the same information at the 
        same time, ensuring complete transparency
        </p>

    </Col> 

    <Col lg={4}> 
        
    </Col>
  </Row>
  </Carousel.Item>

  <Carousel.Item>
  <Row className="justify-content-center">
    <Col lg={6} className="mt-5">
        <img src={coma}></img>
        <p className="feature2"><h4>Traceability</h4>
        Blockchain builds trust between strangers as the transaction is traceable and not centrally controlled.
        They can do business without knowing each other
        </p>

    </Col> 

    <Col lg={4}> 
        
    </Col>
  </Row>
  </Carousel.Item>

  <Carousel.Item>
  <Row className="justify-content-center">
    <Col lg={6} className="mt-5">
        <img src={coma}></img>
        <p className="feature2"><h4>Automation</h4>
        Blockchain networks can even automate transactions, increasing your efficiency and speeeding up the process
        </p>

    </Col> 

    <Col lg={4}> 
        
    </Col>
  </Row>
  </Carousel.Item>
</Carousel>
</Row>



<h1 className="new mt-5 fonts">LBT News</h1>
<Row className="justify-content-center mt-5">
<Col sm={4} className="mt-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={new3} className="new2"/>
    <Card.Body>
    <Card.Text>
        12 December 2019
    </Card.Text>
    <Card.Title>
        <p  className="font fonts">More about the LBT Scientific Committee: Interview with..</p>
    </Card.Title>
  </Card.Body>
</Card>
</Col>

<Col sm={4} className="mt-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={new2} className="new2" />
    <Card.Body>
    <Card.Text>
        12 December 2019
    </Card.Text>
    <Card.Title>
    <p  className="font fonts">More about the LBT Scientific Committee: Interview with..</p>
    </Card.Title>
  </Card.Body>
</Card>
</Col>

<Col sm={4} className="mt-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={new1} className="new2"/>
    <Card.Body>
    <Card.Text>
        12 December 2019
    </Card.Text>
    <Card.Title>
    <p  className="font fonts">More about the LBT Scientific Committee: Interview with..</p>
    </Card.Title>
  </Card.Body>
</Card>
</Col>
<Button className="btn3 mt-5 fonts">READ MORE</Button>
</Row>

{/* </Container> */}

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
        <div className="footerline footer"></div>
       
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
        <a href="https://twitter.com/LawBlocks"><AiOutlineTwitter  size={25}/></a>
    
        <a href="https://www.linkedin.com/in/law-blocks-365731225/"><TiSocialLinkedin  size={25}/></a>
        
        {/* <FaFacebookF color="grey" size={25}/> */}
        
        <a href=""><FaTelegramPlane  size={25}/></a>
        
        {/* <AiFillYoutube color="grey" size={25}/> */}
        
        <a href="https://medium.com/@lawblocks"><AiOutlineMedium  size={25}/></a>
        
        <a href=""><GoMarkGithub  size={25}/></a>
        
        <a href="https://www.reddit.com/u/LawBlocks?utm_medium=android_app&utm_source=share"><AiOutlineReddit  size={25}/></a>

        <a href="https://discord.gg/9eRv89bt"><BsDiscord  size={25}/></a>
        <br/><br/>
        </Col>
        <span className="form Handintechnology">Designed and Developed by <a href="https://handsintechnology.com/" className="Handintechnology">Hands In Technology</a></span>
        </Row>

</React.Fragment>
);
}

export default Home;

