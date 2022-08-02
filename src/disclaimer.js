import './App.css';
import React,{useEffect} from 'react';
import {Navbar,Container,Nav,Button,Row,Col,Form} from 'react-bootstrap';
import logo from './icon/Logo.svg';
import image4 from './image/image 4.svg';
import Tokencoin from './image/Tokencoin.png';
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
import disclaimer from './image/disclaimer.png';
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'></link>
function Disclaimer(){

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

<Row className="justify-content-center" style={{backgroundColor:"#232c86"}}>
    <Col lg={12} className="Disclaimer-img">
        <h1 className="Disclaimer">Disclaimer and Terms of Use</h1>
    </Col>

    {/* <Col lg={5}>
        <img src={disclaimer}></img>
    </Col> */}
</Row>

<Container>
    <Row className="justify-content-center mt-5">
    <Col lg={10}>
    <p style={{color:"grey"}}>Law Block Tokens (LBT) are intended to facilitate the provision and receipt of legal contracts 
        and related services through LB software application, which serves as a user interface
         and development platform on XDC Network. 
    </p>
    <p style={{color:"grey"}}>The contents of this website provides an overview of the network and are subject to change
         as LB refines its plans. Changes to the network, the LB Tokens, and other information 
         referenced in this post are entirely within the discretion of Law Blocks, and could result from
          commercial, technical or legal issues, among others. We believe that greater transparency
           will contribute to the willingness of users, storage node operators, and other service 
           providers to participate in the network. While we have made every attempt to be accurate,
            it is provided as is, and you should not rely on this report for any decisions 
            regarding the use, acquisition, or disposition of Law Block Tokens (LBT).
    </p>
    </Col>
    </Row>



<h4 className="block">Information Published on the Website</h4>
<p>This website at www.lawblocks.io (hereinafter referred to as the "Website") is published and maintained by 
    LBT Blocks to provide information and material related to the LBT Blocks and associated LBT coin. You are 
    not authorized to, nor should you, rely on the Website for legal advice, business advice, investment advice, 
    technical advice, or advice of any kind whatsoever. You should not place any reliance on the information 
    provided on the Website; you alone bear the full risk of any action taken or refrained from in reliance on 
    the Website or its contents.
</p>

<h4 className="block">Forward-looking statements</h4>
<p>The information on the Website may contain forward-looking statements including, but not limited to, (i) 
    the anticipated or supposed future performance of the LBT coin; (ii) the anticipated development of dApps 
    or other functionality on the LBT Blocks; (iii) completion of projects that are currently underway, in 
    development or otherwise under consideration for implementation on or in conjunction with the LBT Blocks. 
    Forward-looking statements are produced only for the purpose of promoting a decentralized, informed, and 
    robust community and not to enable potential investors to gauge the future viability or profitability of 
    building or investing in relation to the LBT Blocks or the LBT coin.
</p>

<p>Under no circumstances are any statements on the Website intended or otherwise to be construed as guarantees 
    of upcoming performance. No reliance should be placed on any statement or information on the Website. The 
    actual future performance and financial outcomes associated with the LBT Blocks and the LBT coin may and 
    likely will vary materially from any evaluation of future performance or result expressed or implied by 
    any forward-looking statements on the Website.
</p>

<p>No obligation is undertaken by the LBT Blocks or by any member of the community to update any forward-looking 
    statements or to otherwise ensure a likelihood that the statements will ultimately correlate to reality.
</p>

<h4 className="block">Risks related to use of LBT coins</h4>
<p>LBT coins and tokens, powered by LBT Blocks's XDPoS consensus protocol, are private instruments, are not 
    registered with any regulatory agency of any jurisdiction, and are not subject to the same regulatory 
    requirements as exchange traded funds or mutual funds which would be registered with appropriate regulatory 
    authorities (e.g., the Monetary Authority of Singapore or the Securities and Exchange Commission in the 
    United States). Because LBT coins are not registered instruments, periodic and standardized pricing and 
    valuation information is not offered to investors on the Website or otherwise. LBT coin have not been 
    reviewed or approved by federal, state or local regulators of any jurisdiction.
</p>

<h4 className="block">You should carefully note the following:</h4>
<p>To the extent any person would purchase or receive LBT coin for investment purposes, such investment is 
    purely speculative investment and involves a high degree of risk. Any investor can lose all or a considerable 
    portion of his or her investment, but this is particularly true with an investment that is unregulated. 
    Anyone planning to invest must have appropriate sophistication, experience, financial ability, and willingness 
    to bear risks of an investment. No investment in LBT coins should be made in an amount greater than the 
    maximum loss you are willing and able to sustain.
</p>

<p>Fees and expenses associated with transfer of LBT coins (which may be considerable, regardless of any other 
    factors) will offset any trading profits that might be realized through the purchase, sale, and exchange of 
    LBT coin.
</p>

<p>In making statements on the Website, LBT Blocks, its directors, advisors or associates, and community 
    members may rely on trading expertise and experience of third-party advisors, the identity of which may 
    not be disclosed to the public. LBT Blocks, its sponsors, directors, advisors, and agents may have conflicts 
    of interest.
</p>

<p>These few risks described here are not a complete list of risks associated with reliance on the information 
    set forth on the Website. Other disclosures, which would be deemed necessary in order to make a knowing and 
    informed investment, may be available on other websites or from other sources; such sources ought to be 
    carefully reviewed prior to purchasing LBT coins or tokens or otherwise incurring any risk associated 
    therewith.
</p>

<h4 className="block">Investment Risks</h4>
<p>The price of LBT coins and tokens are highly volatile and you should expect prices to have widely ranging 
    fluctuations. Any investment in LBT can lead to loss of money over short or long periods. "Cryptocurrency" 
    trading is not appropriate for all users of the Website. Anyone who is planning to invest in cryptocurrencies 
    should consult a well-qualified, independent, and professional financial advisor. The information published 
    on the Website is not a suitable replacement for such an advisor and cannot guarantee that a purchaser of 
    LBT will not lose money.
</p>

<h4 className="block">No Investment Advice</h4>
<p>The entire body of information given on the Website does not consist of or include investment advice, 
    trading advice, financial advice, technical advice, or any other kind of advice. Under no circumstance 
    should you take any of the Website's content as advice. LBT Blocks never recommends that you buy, sell or 
    hold any LBT coins or tokens. Nothing on the website should be considered as a proposal or recommendation 
    that you buy, sell or hold any LBT coins or tokens. The closest things to advice we can offer you is to 
    emphatically state that you should fully conduct your own due diligence and consult a qualified professional 
    financial advisor before you take any investment decisions.
</p>

<h4 className="block">No warranties</h4>
<p>The Website is provided on an "as is" basis without any warranties of any kind regarding the Website or 
    any content, data, material, information, or services provided on the Website.
</p>

<h4 className="block">Limitation of liability</h4>
<p>In no event shall the LBT Blocks, its Directors, or employees, or any community members be liable for any 
    direct, indirect, special or consequential damages of any kind, including, but not limited to, loss of use, 
    loss of profits, or loss of data arising out of or in any way connected with the use of the Website or LBT 
    coins.
</p>

<h4 className="block">Accuracy of Information</h4>
<p>Given the rapidity with which blockchain is developing, the fact that change is the only constant in the 
    cryptosphere, and the intentional efforts to allow and encourage participation by the community at large, 
    LBT Blocks makes no general or specific assurances of accuracy with respect to the Website or any information 
    on it. LBT Blocks holds no responsibility of any wrong, misleading, outdated, or missing information. By 
    using the Website, you represent that you are utilizing any and all information present on the Website at 
    your own risk.
</p>

<h4 className="block">Modifications to the site</h4>
<p>LBT Blocks reserves the right to change or modify the terms and conditions contained in these terms, 
    any policy or guideline of the Website, and the content of the Website at any time and in its sole discretion. 
    The only notice of such changes will be by posting the revised terms, policy, guideline, or content to the 
    Website. Any changes or modifications will be effective immediately upon posting the revisions to the Website 
    and will apply to all subsequent use of the Website. Your continued use of the Website will confirm your 
    acceptance of such changes or modifications; therefore, you should review the terms and applicable policies 
    whenever you use the Website to understand the terms that apply to such use.
</p>

<h4 className="block">Links to the other sites</h4>
<p>The Website may contain links to other websites which are not managed by LBT Blocks. The features, content 
    and accessibility of those sites are not controlled by LBT Blocks. Any such links included do not imply 
    approval or endorsement of the content included in the linked sites.
</p>

<h4 className="block">Website Downtime & Maintenance</h4>
<p>At various and unpredictable times, the Website will be down for maintenance, updating, or for reasons not 
    yet anticipated. LBT Blocks is not liable to you for damages, difficulties, or inconvenience caused by the 
    unavailability of the Website regardless of the cause of the unavailability.
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

export default Disclaimer;