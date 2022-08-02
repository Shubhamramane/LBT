import React,{useEffect} from 'react';
import './App.css';
import {Navbar,Container,Nav,Button,Row,Col,Form} from 'react-bootstrap';
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

function Product(){

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

<Container className="Product-Justify">

<h1 className=" fonts mt-5 Productmt"><b>Solution, the Law Blocks Services</b></h1>
<h5 className="fonts block mt-5"><b>The Law Blocks Services include:</b></h5>
<p>The <b>“Law Blocks Platform”</b>,a platform for the creation and sale of “Smart Legal 
Contracts”, which are fully customizable contracts. With Law Blocks easy-to-use 
interface, the user can select and assemble contract elements that contain both the 
necessary computer code and accompanying legal language. Hence, the resulting 
technological product is a truly “smart” and truly “legal” contract.
</p>

<h5 className="fonts block mt-5"><b>The Law Blocks Platform consists of:</b></h5>
<ol type="a">
<li>The <b>“Law Blocks Editor”</b> allows users to create Smart Legal Contracts either 
starting from a blank document or using templates made available by other experts;</li>


<li>The <b>“Law Blocks Marketplace”</b>, facilitates the sale
of smart legal contract templates created by Advocates/ Solicitors/Law Firms/Attorneys/Lawyers
of this platform;</li>
</ol>

<h5 className="fonts block mt-5"><b>Three innovative dispute resolution mechanisms
graduated in complexity according to the value of
the disputes, which aim to create real jurisdictions
on the blockchain, namely:</b></h5>

<ol type="a">
<li>The <b>“Open Layer”</b>, an online dispute resolution mechanism where the 
decision-making process is open to all participants through game theoretic 
principles, mostly suited for low-value disputes;</li>


<li>The <b>“Community Layer”</b>, an online dispute resolution mechanism where 
only experts who are members of the community selected by the parties 
can participate in the decision making process, designed for medium value 
disputes.</li>

<li>The <b>“Court Layer”</b>, digitized commercial arbitration
which renders arbitration awards that are binding and
fully recognisable and enforceable under the New York
Convention, designed for high-value disputes;</li>
</ol>

<h5 className="fonts block mt-5"><b>
Smart Legal Contracts-Law Blocks</b></h5>
Law Blocks believes that there should be a decentralized system that allows the 
construction of easily customizable smart contracts for a multitude of cases, available 
to billions of individuals and companies. Law Blocks also believes that it is imperative 
to allow anyone to make deals safely, pay for services and goods, integrate escrow in 
a simple way, and, when necessary, have a reliable dispute resolution mechanism. 
This is where the Law Blocks Platform comes in this infrastructure aims to offer a 
wide choice of scalable Smart Legal Contract templates that can be customized with 
the Law Blocks Editor, while the Law Blocks marketplace provides the opportunity to 
share such templates with a potentially unlimited number of users who, in turn, will 
be able to make further customizations induced by the concrete case to which the 
template is applied.

<h5 className="fonts block mt-5"><b>
Each of these Services would require Law Block Token (LBT) for using them. </b></h5>
{/* <b>Professionals who - through the various methods described in the following 
paragraphs - can contribute with their expertise to the functioning of the Law Blocks ecosystem
and for the same they stand to be rewarded.</b> 
 Law Blocks commitment extends even further, with the strategic decision of including 
a scientific committee that includes some of the influential law professors from the 
important countries in the world. Law Blocks Advisory Board, moreover, includes 
experts in the field of blockchain and crypto market. Last but not least, Law Blocks
spontaneous community has developed over time, and has grown to include 
scientific, technical and legal experts all around the world. Law Blocks can thus 
leverage a solid interest that arises from professionals’ needs for practical solutions 
to the above stated problems. In conclusion, just as Bitcoin has created a global 
uncensorable system for transactions that does not rely on any government or 
national law, Law Blocks creates an ecosystem for creating and enforcing contracts 
that is also global, resistant to corruption, and potentially usable without recourse to 
national judicial bodies, with the exception of the enforcement of arbitral awards. */}
LBT as a medium of exchange within the entire ecosystem. LBT is an XRC20 
token utility that powers the Law Blocks Eco System which is standard built on XinFin XDC Network.


<h5 className="fonts block mt-5"><b>
Overall, the Law Blocks Platform and the Smart Legal Contracts are designed to achieve the 
following six goals:</b></h5>
<ul className="deci">
<li>Creation of highly customizable smart contracts, with milestones (i.e. the 
implementation of steps for the progressive release of the amounts deposited in 
escrow);</li>
<li>Payments in either Law Block Token (LBT), XDC or stable coins.</li>
<li>Law Block Token (LBT) as a utility token allows users to create and buy Smart 
Legal Contracts, as well as to act as arbitrator, voter or contractual party/user on each 
integrated dispute resolution Layer.</li>
<li>Setting of duration and other complex variables (i.e. the implementation in the 
contract of terms, conditions and events that shift the evolution of the contractual 
relationship in one direction rather than the other or that simply trigger subsequent 
rights and obligations)</li>
<li>Self-triggering clauses linked to external elements (i.e. clauses depending on 
external APIs provided by third parties that are trusted by both the counterparties, 
for example, to approve an insurance claim if there was a heavy rain in the area 
object of the agreement)</li>
<li>A marketplace on which developers can create third party extensions that can be 
plugged in any Smart Legal Contract offering a way to automate a transaction based 
on the actions on those external platforms, for example when an internet domain 
name is actually transferred from party A to party B, unlock funds in escrow. For 
those aspects of the contractual relationship that cannot be automated, the dispute 
resolution mechanisms designed by Law Blocks fill such gaps.</li>
</ul>
<button className="legal mt-3"><Link className="uline legal" to="/Documents">Legal Contracts</Link></button> 
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

export default Product;