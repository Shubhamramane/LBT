import './App.css';
import {Navbar,Container,Nav,Button,Row,Col,Card,Form,Carousel} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import Union from './image/Union.svg';
import Tokencoin from './image/Tokencoin.png';
import React,{useEffect} from 'react';
import White from './Documents/Law_Block_Whitepaper.pdf';
import hardwarewallet from './image/hardwarewallet.png';
import Appstore from './image/Appstore.png';
import PlayStore from './image/playstore.webp';
import Desktopwallet from './image/desktopwallet.png';
import Mobilewallet from './image/mobilewallet.png';
import Webwallet from './image/webwallet.png';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialLinkedin } from 'react-icons/ti';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineMedium } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineReddit } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import rotate from './image/rotate.png';
import guarda from './image/guarda-wallet.png';
import ellipal from './image/ellipal-wallet.png';
import dcentwallet_logo from './image/dcentwallet_logo.png';
import wallets from './image/wallets.png';
import style, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
{/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet"></link> */}

const Bounce = style.div`animation: 9s ${keyframes `${bounce}`} infinite`;   

function WalletSupport(){

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
<br/>


{/* <img src={{logo}} class="rotate" width="100" height="100" /> */}

<Row className="justify-content-center wallets">
    <Col lg={5} sm={5}>
        <h1 className="wallet-color mt-5 wallet-font">Wallets</h1>
        <h5 className="wallet-color">Wallets Supporting LBT</h5>
    </Col>

    <Col lg={5} sm={5}>
    <Bounce><img src={wallets} className="wallet-img"></img></Bounce>
    </Col>
</Row>
<Container>
<h1 className="mt-5" style={{color:"#254a81"}}>Wallets</h1>
<p>Your Favourite LBT wallet is now supported by following Crypto Wallets.</p>
</Container>

<Row>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={dcentwallet_logo} />
  <Card.Body>
    <Card.Title>D'CENT Wallet</Card.Title>
    <Card.Text>
     D'Cent Mobile Wallet - Works on IOS and Android.
    </Card.Text>
    <a href="https://apps.apple.com/kr/app/dcent-hardware-wallet/id1447206611"><img src={Appstore} style={{height:"60px"}}></img></a>App Store
    {/* <Button variant="primary"><a href="https://apps.apple.com/kr/app/dcent-hardware-wallet/id1447206611" style={{color:"white", textDecoration:"none"}}>App Store</a></Button><br/><br/> */}
    {/* <Button className="Wallet-btn" variant="primary"><a href="https://play.google.com/store/apps/details?id=com.kr.iotrust.dcent.wallet&utm_source=dcentwallet&utm_campaign=mobileapp" style={{textDecoration:"none"}}>Google Play</a></Button> */}
    <a href="https://play.google.com/store/apps/details?id=com.kr.iotrust.dcent.wallet&utm_source=dcentwallet&utm_campaign=mobileapp"><img src={PlayStore} style={{height:"90px"}}></img></a>Google Play
  </Card.Body>
</Card>
</Col>
<Col>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={guarda} className="guard-center" style={{height:"180px",width:"180px"}}/>
  <Card.Body>
    <Card.Title className="mt-5">Guarda Wallet</Card.Title>
    <Card.Text>
    Available on Windows, macos, Linux, Chrome, IOS and Android.
    </Card.Text>
    <a href="https://guarda.com/web-wallet/"><img src={Webwallet} style={{height:"80px"}}></img></a>Web Wallet
    {/* <Button  variant="primary"><a href="https://guarda.com/web-wallet/" style={{color:"white", textDecoration:"none"}}>Web Wallet</a></Button><br/><br/> */}
    <a href="https://guarda.com/desktop/"><img src={Desktopwallet} style={{height:"70px"}}></img></a>Desktop Wallet
    {/* <Button className="Wallet-btn" variant="primary"><a href="https://guarda.com/desktop/" style={{textDecoration:"none"}}>Desktop Wallet</a></Button> */}
  </Card.Body>
</Card>
</Col>

<Col>
<Card style={{ width: '18rem' }} className="card-center">
  <Card.Img variant="top" src={ellipal} className="ellipal-center" style={{height:"180px",width:"180px"}}/>
  <Card.Body>
    <Card.Title className="mt-4">Ellipat Wallet</Card.Title>
    <Card.Text>
     Available on secured offline hardware wallet and Android wallet.
    </Card.Text>
    <a href="https://www.ellipal.com/pages/coldwallet"><img src={hardwarewallet} style={{height:"80px"}}></img></a>Hardware Wallet
    {/* <Button variant="primary"><a href="ellipal.com/pages/coldwallet" style={{color:"white", textDecoration:"none"}}>Hardware Wallet</a></Button><br/><br/> */}
    <a href="https://www.ellipal.com/pages/ellipal-wallet-app"><img src={Mobilewallet} style={{height:"80px"}}></img></a>Mobile Wallet
    {/* <Button className="Wallet-btn" variant="primary"><a href="https://www.ellipal.com/pages/ellipal-wallet-app" style={{textDecoration:"none"}}>Mobile Wallet</a></Button> */}
  </Card.Body>
</Card>
</Col>

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
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/CommunityBound"> Community Bound</Link></p>
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
        <Col lg={6} >
        </Col>
        <Col lg={6} className="box mt-3 text-center symbol">
        <a href="https://twitter.com/LawBlocks"><AiOutlineTwitter  size={25}/></a>
    
        <a href="https://www.linkedin.com/in/law-blocks-365731225/"><TiSocialLinkedin  size={25}/></a>
        
        {/* <FaFacebookF size={25}/> */}
        
        <a href=""><FaTelegramPlane size={25}/></a>
        
        {/* <AiFillYoutube size={25}/> */}
        
        <a href="https://medium.com/@lawblocks"><AiOutlineMedium  size={25}/></a>
        
        <a href=""><GoMarkGithub size={25}/></a>
        
        <a href="https://www.reddit.com/u/LawBlocks?utm_medium=android_app&utm_source=share"><AiOutlineReddit size={25}/></a>

        <a href="https://discord.gg/9eRv89bt"><BsDiscord size={25}/></a>
        <br/><br/>
        </Col>
        <span className="form Handintechnology">Designed and Developed by <a href="https://handsintechnology.com/" className="Handintechnology">Hands In Technology</a></span>
        </Row>

</React.Fragment>
);
}

export default WalletSupport;
