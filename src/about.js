import React,{useEffect} from 'react';
import './App.css';
import './table.css';
import {Navbar,Container,Nav,Button,Row,Col,Table} from 'react-bootstrap';
import logo from './icon/Logo.svg';
// import LBT from './icon/coin.jpeg';
import LBT from './icon/LBT.png';
import Tokencoin from './image/Tokencoin.png';
import image4 from './image/image 4.svg';
import Union from './image/Union.svg';
import White from './Documents/Law_Block_Whitepaper.pdf';
import Bitcoin from './icon/bitcoin.png';
import Ethereum from './icon/ethereum.png';
import XCD from './icon/xdc.png';
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




function About(){

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
          <Link className="uline mt-1" to="/Product" >Product</Link>
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

<Container className="mt-5 Aboutss">
<h1 className="fonts"><b>About</b></h1>
<h5 className="mt-4 fonts block">
<b>What is “Law Blocks”?</b></h5>
<p>Law Block is a user-friendly, time saving and community-driven truly smart truly legal 
contract-based platform for creating legal documents (on blockchain technology) 
such as Agreements, Power of Attorney, Business Contracts, Declarations, Affidavits, 
Memorandum of Understanding, etc. subject to yourselves following the prevalent 
laws in the country in which it has to be acted upon and subject to yourselves 
following the process of ensuring the validity of those documents in accordance with 
law, which is cryptographically signed by each party thereby acknowledging their 
covenents.</p><br/>

<h5 className="mt-4 fonts block">
<b>How does “Law Blocks” work?</b></h5>
<p>We’re formulating the platform to facilitate the making of template-based contracts, 
painless, effective, and cost-efficient across the globe. Law Blocks makes it easy to 
create legal binding contracts and storing such contracts that is driven by Law Blocks 
eco system supported by XRC-20 utility token.
We’re putting the contracts for our clients at the centre of our process, an experience 
that is transparent and reliable, while maintaining privacy and confidentiality in an 
automated contract, as at times there are future obligations in a smart contract,
where the contract has to sustain over a period of time, payments have to be 
delivered, trade obligations have to be fulfilled, funds has to be delivered, along with 
interest payments done in future, which is time bound and more and further 
obligations to be complied with and managed. The law blocks technology using 
blockchain and smart contracts based automation is the solution.
</p><br/>

<h5 className="mt-4 fonts block">
<b>What is a smart contract?</b></h5>
<p>A smart contract is simplest form of decentralized automation, and is most easily and 
accurately defined as: A smart contract is a mechanism involving digital assets and 
two or more parties, where some or all of the parties put assets in, and assets are 
automatically redistributed among those parties according to a formula based on 
certain data and depending on compliances by either party/parties, that which is not 
known at the time the contract is initiated.
</p>

<h5 className="mt-4 fonts block">
<b>Law Blocks maps real-world contracts with smart contracts using Public/ hybrid blockchain network.</b></h5>
<p>Law Blocks removes barriers from making contracts with an easy-to-use platform 
designed by lawyers/law firms for lawyers as well as for individuals and corporate. 
Law Blocks unites you with legal teams, parties, and arbitrators in an end-to-end & 
easy-to-use digital arbitration platform. It helps you to cut all the unnecessary steps 
that make common contracts and agreements, making procedures long and 
expensive.
</p>

<h5 className="mt-4 fonts block">
<b>How it reduces time & fees with a completely digitized Procedure.</b></h5>
<ul className="deci">
<li><p>Wrap smart contracts in legal agreements in minutes using our web based tools.</p></li>
<li><p>Sign using a private key and seamlessly interact with smart contracts.</p></li>
<li><p>Simple setup and integration with your day-to-day tools.</p></li>
<li><p>Easy to use open Application Programing Interface (API)</p></li>
<li><p>Contracts or digital assets can be stored as Non Fungible Token (NFT) and possible 
to transfer ownership by digital signature.</p></li>
<li><p>Use Law Block Token - LBT as a medium of exchange within the entire ecosystem. 
LBT is an XRC20 token utility that powers the Law Blocks Eco System which is 
standard built on XinFin XDC Network.</p></li>
</ul>
<Row>
<Col lg={5}>
<h5 className="mt-4 fonts block">
<b>Why are we using XDC Blockchain Network</b></h5>
<ul className="deci">
<li><p>XDC has near zero GAS fees compared to other available blockchain networks.</p></li>
<li><p>The XDC Network is an enterprise-friendly, open source, hybrid blockchain
protocol specializing in tokenization for real world use cases like decentralized 
finance, tokenized trade assets and stable backed assets.</p></li>
<li><p>XDC Network already has third party Wallet like DCent, bitfi, Ellipal, freewallets, 
Guarda etc. Decentralized wallet will never manage accounts with sensitive 
information such as passwords, private keys, or email addresses.
</p></li>
<li><p>Proven and tested energy-efficiency consensus mechanism known as XinFin 
delegated-proof-of-stake (XDPoS). This leverages a decentralized network of 
validators to securely finalize transactions and defend against potential attacks.</p></li>
<li><p>The massive acceleration of blockchain performance is one of the most important 
key features of XinFin. With the XDPoS consensus protocol, XinFin provides:
</p></li>
</ul>
<ul>
<li><p>At least 2,000 TPS while still enhancing security through Double Validation</p></li>
<li><p>2-second block-time and transaction confirmed within 4 seconds</p></li>
</ul>
</Col>

<Col lg={7} className="mt-5">
<div class="compare_btc_eth_xdc" >
<table>
<thead>
<tr>
<th class="tl tl2"></th>
<th class="first"><span>1ST</span> GENERATION</th>
<th class="second"><span>2ND</span> GENERATION</th>
<th class="third"><span>3RD</span> GENERATION</th>
</tr>
<tr>
<th class="criteria-head">COMPARISON CRITERIA</th>
<th class="criteria-info">
<div class="criteria-logo"><img src={Bitcoin}></img></div>
<div class="criteria-logo_desc"><span class="hide-mobile">Bitcoin</span> BTC</div>
</th>
<th class="criteria-info">
<div class="criteria-logo"><img src={Ethereum}></img></div>
<div class="criteria-logo_desc"><span class="hide-mobile">Ethereum</span> ETH</div>
</th>
<th class="criteria-info bg_xdc">
<div class="criteria-logo"><img src={XCD}></img></div>
<div class="criteria-logo_desc"><span class="hide-mobile">XinFin</span> XDC</div>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td class="description-head" colspan="3">TRANSACTIONS PER SECOND</td>
</tr>
<tr class="compare-row">
<td class="description-head">TRANSACTIONS PER SECOND</td>
<td><span class="description-details"><strong>3-6</strong> TPS</span></td>
<td><span class="description-details"><strong>12-16</strong> TPS</span></td>
<td class="bg_xdc"><span class="description-details"><strong>2000+</strong> TPS</span></td>
</tr>
<tr>
<td>&nbsp;</td>
<td class="description-head" colspan="3">AVERAGE FEE</td>
</tr>
<tr class="compare-row">
<td class="description-head">AVERAGE FEE</td>
<td><span class="description-details"><strong>$15</strong> USD</span></td>
<td><span class="description-details"><strong>$10</strong> USD</span></td>
<td class="bg_xdc"><span class="description-details"><strong>$0.00001</strong> USD</span></td>
</tr>
<tr>
<td>&nbsp;</td>
<td class="description-head" colspan="3">TRANSACTION CONFIRMATION</td>
</tr>
<tr class="compare-row">
<td class="description-head">TRANSACTION CONFIRMATION</td>
<td><span class="description-details"><strong>10-60</strong> MINUTES</span></td>
<td><span class="description-details"><strong>10-20</strong> SECONDS</span></td>
<td class="bg_xdc"><span class="description-details"><strong>2</strong> SECONDS (w/finality)</span></td>
</tr>
<tr>
<td>&nbsp;</td>
<td class="description-head" colspan="3">SMART CONTRACT SUPPORT</td>
</tr>
<tr class="compare-row">
<td class="description-head">SMART CONTRACT SUPPORT</td>
<td><span class="description-details"><strong>NO</strong></span></td>
<td><span class="description-details"><strong>YES</strong></span></td>
<td class="bg_xdc"><span class="description-details"><strong>YES</strong></span></td>
</tr>
<tr>
<td>&nbsp;</td>
<td class="description-head" colspan="3">ENERGY CONSUMPTION</td>
</tr>
<tr class="compare-row">
<td class="description-head">ENERGY CONSUMPTION</td>
<td><span class="description-details"><strong>71.12</strong> TWh</span></td>
<td><span class="description-details"><strong>20.61</strong> TWh</span></td>
<td class="bg_xdc"><span class="description-details"><strong>0.0000074</strong> TWh</span></td>
</tr>
</tbody>
</table>
</div>

</Col>
</Row>
<h5 className="mt-4 fonts block">
<b>100% paperless with support for e-signatures</b></h5>
<p>Digital trails for agreements and contracts to accelerate outcomes while improving 
transparency</p>

<h5 className="mt-4 fonts block">
<b>Automated record keeping</b></h5>
<p>Gain confidence in digital due process and awards with a certifiable audit trail 
accompanying every procedure. Intelligent, automated timetables and scheduling. 
Work smarter not harder with digital scheduling that does the coordinating for you.</p>

<h5 className="mt-4 fonts block">
<b>Intelligent Timetable Scheduling</b></h5>
<p style={{fontSize:"16px"}}>Works with Google, Outlook, and Office 365 for assembling timetables without
 back and forth emails and phone calls.</p>

<h5 className="mt-4 fonts block">
<b>Become your own Lawyer</b></h5>
<p>Ledger systems powered by blockchain technology can help you draft and create 
your own contracts as needed in the upcoming digital world.</p>

<p><b>Law Blocks technology protects clients confidentiality :</b> Providing an immutable, 
theoretically unhackable data management solution for attorneys so as to gain more 
appointments, develop your network, Create your own models of contracts for your 
clients or create your own templates for agreements and contracts, maintain 
accounts and records, and track your progress on our platform.</p>

<p><b>Advocates/ Solicitors/Law Firms/Attorneys:</b> Advocates/ Solicitors/Law 
Firms/Attorneys/Lawyers from different countries can join, create their own reusable 
templates for their clients, create their own community, and be a part of Law Blocks.</p>

<p><b>Here is the deal :</b>70 to 90% of the fee amount generated by Advocates/ 
Solicitors/Law Firms/Attorneys by giving their online services on our platform will be 
your share.
</p>

<h5 className="mt-4 fonts block">
<b>Painless Procedure</b></h5>
<p>High fees, long waiting times, long discussions, slow processes and repetition of 
visits in courts are really very painful for an individual, and community at large.</p>
<b>So we are crafting a solution for those</b>
<p>● Who are basic computer educated and understand his/her legal requirements, can
get his legal documentation done by themselves using our platform.</p>

<h5 className="mt-4 fonts block">
<b>Why Blockchain Technology in Legal Sector</b></h5>
<p>Blockchain technology is able to maintain the records of contractual transactions and 
is capable of holding any information with the same benefits. The term blockchain 
comes from the way information is stored on a "block" of data and each block's code 
refers back to the preceding chunk of information. Thereby creating a chain. Acting 
as a register of deeds. Blockchain is cryptographically secure information both 
transparent and globally accessible, so can be helpful in keeping and sharing any 
document using Public Key Infrastructure (PKI), Hence Finance Industry/Crypto 
Industry is the first to successfully adopt it. So we can find that this Distributed 
Ledger Technology (DLT) is reliable, verifiable smart contracts and Legal Sector will 
be another application of Blockchain in the near coming future.
</p>

<h5 className="mt-4 fonts block">
<b>Overview</b></h5>
<p>The Law and Legal Sector has been slow in giving results to its clients. Enterprise XDC 
network cutting edge hybrid blockchain technology alleviates labour-intensive
manual processes while providing increased accessibility, transparency, cost savings, 
speed, efficiency and data integrity to the legal industry.</p>

<h5 className="mt-4 fonts block">
<b>Why Blockchain a Solution in the Legal Industry?</b></h5>
<ul className="deci">
<li>Cost effective</li>
<li>Accessibility</li>
<li>Transparency</li>
<li>Automation</li>
<li>Digital signature with peer to peer payments</li>
<li>Time Saving (speedy disposal)</li>
<li>Storage for lifetime</li>
<li>Tokenization</li>
<li>Eco friendly</li>
<li>Decentralized Autonomous Organisation (DAO)</li>
<li>Limited liability Autonomous Organisation (LAO)</li>
<li>Etc. etc</li>
</ul>

<h5 className="mt-4 fonts block">
<b>Blockchain technology and Decentralized Autonomous Organisations (DAO)</b></h5>
<p>A DAO is a Decentralized Autonomous Organization whose decisions are made 
electronically through code or the vote of the supporting members. DAO create 
scalable, borderless online cooperation and have been used to coordinate grants and 
to fund public goods. Having the proper legal wrapping for DAO is critical.
</p>

<h5 className="mt-4 fonts block">
<b>Limited liability autonomous organizations (LAO)</b></h5>
<p>Lao are for-profit limited liability decentralized organizations. It enables its members 
to invest in early-stage XDC network or other blockchain ventures and share in the 
profits. Way Forward Law sector is already in practice at online documentation 
however still fragmented. First point for this is “Client Documents Management”. 
Blockchain will be the lawyer’s office. These legal documents through data system 
will be secured on blockchain infrastructure XDC network smart contracts through 
software connecting API's from PC 💻 Cross Devices, Laptops, Tabs, Mobile, I pads, 
IoT or any future devices etc. This will help in creating a Legal data sharing ecosystem 
which can then be in real time. This will create an ability to assess the availability of 
unoccupied idle Legal Centres, Lawyers, Clients or Legal services seekers can pay, 
transact, or redeem fees, charges through secure blockchain based payments Law 
Block Token (LBT), which is the native token of the Law Blocks. In exchange of LBT 
tokens, users will be able to use the network to charge, pay, store, save, and to 
execute legal specific smart contracts. LBT token will be the best payment system to 
support this revolutionary infrastructure for efficient operation globally.
</p>

<h1 className="h1a mt-5 fonts"><b>How we solve the Justice problem</b></h1>
<h5 className="mt-4 fonts block"><b>Law Blocks Arbitration</b></h5>
<p className="mt-4 fonts mb-5">LB Arbitration is the new standard of digital arbitration that aims to make dispute 
resolution painless, efficient, and cost-effective across the globe. It is a tech-enabled 
arbitration procedure, compliant with the Model Law, created to improve existing 
arbitration procedures and provide unprecedented support for businesses and 
arbitrators alike. Law Blocks innovative combination of a digitized platform with 
leading technologies enhances transparency across parties while ensuring neutrality. 
The waitlist to experience the product is now open for both businesses and 
arbitrators.
</p>

<h5 className="mt-4 fonts block"><b>Open Justice Platform</b></h5>
<p className="mt-4 fonts mb-5">Resolve disputes online and save 100% of the time and 99% of the costs of the 
conventional dispute resolution. If you are a professional or a small and medium 
enterprise, the Open Justice Platform is the answer for resolving conflicts and 
settling disputes efficiently from the convenience of your laptop. Our platform allows 
for a completely online procedure that delivers a legal resolution. Try out 
our Justice Card to get an idea of the impact of our mission.
</p>

<h5 className="mt-4 fonts block"><b>Micro Justice - R&D</b></h5>
<p className="mt-4 fonts">We are committed to resolving the Justice problem at any level of disputes, even 
micro claims that currently do not have a proper resolution method. With our Open 
Layer and Community Layer, we are researching, testing and validating feasible 
ways in which micro claims (less than 500 USD) can be resolved. We are currently 
testing the Open Layer with our partner universally and you can access a public data
here. Please keep in mind that these solutions are some of the most advanced 
research in the field. They are work in progress and should be treated as such.

</p>
</Container>
<Row className="bg mt-5 text-center">
    <Col lg={12}>
        <h5 className=" mt-5 mb-5 new fonts">Experience the new standard of modern digital arbitration for businesses & arbitrators</h5>
    </Col>
    {/* <Col lg={4}>
        <button className="btn4 mt-5 mb-5 fonts">LEARN MORE</button>
    </Col> */}
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
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/CommunityBound">Community Bounty</Link></p>
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/AboutTeam">About Team</Link></p>
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
            <p className="form fonts fsize1"><Link className="uline mt-1 white fsize1 footerlink" to="/Disclaimer">Disclaimer</Link></p>
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

export default About;