import './App.css';
import {Navbar,Container,Nav,Button,Row,Col,Accordion} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import Tokencoin from './image/Tokencoin.png';
import Union from './image/Union.svg';
import React,{useEffect} from 'react';
import lbtstrip from './image/lbtdata.svg';
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
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>

function FAQ(){

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
          <Link className="uline mt-1" to="/Sign_Up"><button className="btn2">Login</button></Link>
          

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
    <h1 className="mt-5">FAQs</h1>
    <h6>Frequently Asked Questions</h6>

    <h1 className="mt-5 block">About Law Blocks Network/Law Block Token</h1>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><ul><li><p className="FAQ">What is Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Law Blocks is a user-friendly and community-driven smart contract-based platform for 
creating legal documents (on the blockchain) such as Agreements, Power of Attorney, 
Business Contracts, Declarations, Affidavits, and Memorandum of Understanding, etc. as per 
prevalent laws in the country while making the process of those documents time-saving
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header><ul><li><p className="FAQ">What is the Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Law Blocks is an instrument for using services of Law Blocks Platform. You can buy Law Blocks by any currency in the
      world and also convert it back in other currencies from the exchange by paying a nominal fee all the payments 
      on Law Blocks Platform would be accepted in the form Law Block Token.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header><ul><li><p className="FAQ">How Law Blocks would work?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    <img src={lbtstrip} className="lbtstrip"></img>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><ul><li><p className="FAQ">On which Blockchain is Law Blocks based?</p></li></ul></Accordion.Header>
    <Accordion.Body>
      LBT is based on Xinfin Network.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><ul><li><p className="FAQ">On which websites can I find Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Law Block Token is the featured currency for Law Blocks Platform for all legal services provided by this platform. 
     https://www.lawblocks.io/ and https://www.lawblocks.org/ are main websites for Law Blocks.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<h1 className="mt-3 block">Getting Started</h1>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><ul><li><p className="FAQ">Where can I buy Law Block Tokens(LBT)?</p></li></ul></Accordion.Header>
    <Accordion.Body>
      You can visit https://www.lawblocks.io/ and https://www.lawblocks.org/ to buy the Law Block Tokens.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><ul><li><p className="FAQ">Does Law Blocks offer any bounty programs?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    LBT has a variety of bounty programs available for the community ranging from bug testing to the 
    creation of content on video and article bounties. You can check the bounty page <Link className="uline mt-1 white fsize1" to="/CommunityBound">here</Link> 
    that is constantly updated with new bounty programs.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header><ul><li><p className="FAQ">Does Law Blocks have support?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Law Blocks support is community-driven, If you have any queries regarding Law Blocks, you can reach 
    out via the community support mediums <Link className="uline mt-1 white fsize1" to="/CommunitySupport">here</Link>.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><ul><li><p className="FAQ">Can I join the Law Blocks team as a community member?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Those interested in offering their services as a community member can register their interest on this form.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header><ul><li><p className="FAQ">Does Law Blocks have a Beta Testing Bug Bounty Program?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Details of Law Blocks Bounty programs are available on the Law Blocks Community Bounty Page. The community can participate 
    and offer their opinions and Law Blocks will also be offering Law Blocks tokens to its testers for free as part of its 
    referral program. Fill this form(coming soon) if you are interested in taking part in the program.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header><ul><li><p className="FAQ">When will Law Blocks be launched?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Law Blocks Network's flagship Law Blocks drive will launch by the first week of June, to know more about our key 
    milestones visit our social media channel or roadmap(coming soon) Section on website.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="7">
    <Accordion.Header><ul><li><p className="FAQ">Does Law Blocks have a mobile application?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Currently no, you can access LBT drive through the web browser on your mobile but a Law Blocks mobile 
    application for AppStore and PlayStore will be launched soon. Please keep a tab on our social media 
    channels to know more about our developments.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="8">
    <Accordion.Header><ul><li><p className="FAQ">On which OS will Law Blocks have a desktop App/Client?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Currently, Law Blocks Desktop App is available only for Windows. Desktop App for Mac OS and Linux will be launching soon.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="9">
    <Accordion.Header><ul><li><p className="FAQ">Is the pricing plan for Law Blocks fixed?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    No, since the platform uses its native Law Blocks token for transactions, the pricing depends directly on the 
    value of the token and is subject to change according to the fluctuations as per market conditions.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="15">
    <Accordion.Header><ul><li><p className="FAQ">Is Law Blocks open-source?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Law Blocks is completely open-source and supports open standards as much as possible. Users aren't locked into 
    proprietary formats and can export and import everything.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<h1 className="mt-3 block">How to Use Law Blocks Drive</h1>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><ul><li><p className="FAQ">How to upload files and folders on Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    To upload a file on LBT, click on the "Upload File" tab and select the file(s) that you want to upload. 
    You can also upload files and folders by dragging and dropping them from the selection wizard onto the dashboard.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header><ul><li><p className="FAQ">How do I download/retrieve files on Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    To retrieve a file on Law Blocks, double-click on it twice to download it on your device.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header><ul><li><p className="FAQ">How to delete files and folders on Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    To delete a file or a folder on Law Blocks, click on it once to highlight it and click on the "Delete" tab to 
    confirm and delete it permanently. You can also highlight multiple files and folders to be deleted at once. 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header><ul><li><p className="FAQ">How do I share a file or folder on Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    To share a file or a folder on LBT, click on the file or folder once to highlight it and click on the 
    "Share" icon. An auto-generated link will be created that can be shared with others so that they can access 
    the file. The link can also be modified so that it has a limited number of uses.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header><ul><li><p className="FAQ">How do I create a new folder on Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    To create a folder on Law Blocks, click on the "New Folder" tab and enter the name of the folder that you want 
    to create and confirm it. 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header><ul><li><p className="FAQ">How do I refer friends on Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    To refer your friends on Law Blocks, click on the referrals tab. You can either share the auto-generated 
    link by inviting your friends via email or by sharing it on social media. If your friend registers 
    using the referral link, both of you will be rewarded with 10 LBT tokens each for free. This offer 
    is limited to the first 1000 users only and is subject to terms and conditions. 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
    <Accordion.Header><ul><li><p className="FAQ">Does Law Blocks have two-factor authentication for security?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    Law Blocks features two-factor authentication to add another layer of security to your account. Click on the 
    "Enable 2FA tab" in settings and follow the four steps to enable 2FA.
  <ul className="deci">
    <li>Download Authy or Google Authenticator or a similar app on your device.</li>
    <li>Scan the auto-generated code using one of the apps mentioned earlier.</li>
    <li>Use the auto-generated backup key. This is in case you lose your device.</li>
    <li>Use the backup key and 2FA code to enable two-factor authentication.</li>
  </ul>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="7">
    <Accordion.Header><ul><li><p className="FAQ">How do I set the optimum resolution on Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    You can set the screen resolution to the recommended resolution of 1024x768 and above.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="8">
    <Accordion.Header><ul><li><p className="FAQ">Why does file upload seem so slow on Law Blocks?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    When you upload files on Law Blocks Drive, what seems like a simple upload is actually a series of complex 
    functionalities carried out in the background. The system performs a series of complicated tasks such 
    as encryption of data, splitting of data, distribution of multiple copies of such data across nodes worldwide.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="9">
    <Accordion.Header><ul><li><p className="FAQ">Is a host responsible for a user storing illegal content on their storage nodes?</p></li></ul></Accordion.Header>
    <Accordion.Body>
    In the European Union, the Directive 2000/31/EC protects hosts if they meet certain conditions set by the 
    European Parliament and the council of the European Union.

    In the United States of America, section 512 of the Digital Millenium Copyright Act protects hosts from 
    content submitted by the user. Websites, Internet Service Providers (ISPs), and storage providers are 
    considered secure under section 230 (c)(1) of the Communication Decency Act. It is a part of internet 
    legislation that provides immunity from third-party content. This section has never been tried in a court 
    of law specifically accusing websites.

    If you want to learn more about the laws and consequences associated with hosting a node, we recommend 
    that you contact your legal representative for further legal advice.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="10">
    <Accordion.Header><ul><li><p className="FAQ">What happens to the contracts between a host and Law Blocks </p></li></ul></Accordion.Header>
    <Accordion.Body>
    Agreements between the host and the renter are settled at the rate the host sets and the renter agrees 
    upon at the beginning of the contract. If the price of the Law Blocks token fluctuates significantly during 
    the contract, the host will still receive the same amount of Law Blocks tokens that was agreed in the contract 
    but there is no guarantee that the price of the token remains the same when converted to fiat at the time. 
    This scenario does not have any effect on the renter as they obtained Law Blocks and exhausted them at 
    the beginning of the contract to lease storage before the value of the token fluctuated. As a host, you 
    can mitigate the changes in the price of the token by adjusting your hosting prices accordingly to maintain 
    the same margin of profit.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

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

  export default FAQ;