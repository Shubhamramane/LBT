import './App.css';
import Home from './home';
import About from './about';
import Product from './product';
import Our_Team from './our_team';
import Community  from './community';
import Contact from './contact';
import Tokenomics from './Tokenomics';
import Sign_In from './sign_in';
import Sign_Up from './sign_up';
import CommunityBound from './Community_bound';
import CommunitySupport from './Community_Support';
import AboutTeam from './About_Team';
import FAQ from './FAQ';
import Disclaimer from './disclaimer';
import RoadMap from './RoadMap';
import Exchange from './Exchange';
import WalletSupport from './WalletSupport';
import Documents from './files';
import Privacy from './Privacy';
import Login from './login';
import Google from './google';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      {/* <Google/> */}
    <Switch>
          
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Product">
            <Product/>
          </Route>
          <Route path="/Our_Team">
            <Our_Team/>
          </Route>
          <Route path="/Community">
            <Community/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/Tokenomics">
            <Tokenomics/>
          </Route>
          <Route path="/CommunitySupport">
            <CommunitySupport/>
          </Route>
          <Route path="/CommunityBound">
            <CommunityBound/>
          </Route>
          <Route path="/AboutTeam">
            <AboutTeam/>
          </Route>
          <Route path="/Sign_In">
            <Sign_In/>
          </Route>
          <Route path="/Sign_Up">
            <Sign_Up/>
          </Route>
          <Route path="/FAQ">
            <FAQ/>
          </Route>
          <Route path="/Disclaimer">
            <Disclaimer/>
          </Route>
          <Route path="/RoadMap">
            <RoadMap/>
          </Route>
          <Route path="/Exchange">
            <Exchange/>
          </Route>
          <Route path="/WalletSupport">
            <WalletSupport/>
          </Route>
          <Route path="/Documents">
            <Documents/>
          </Route>
          <Route path="/Privacy">
            <Privacy/>
          </Route>
          <Route path="/Login">
          <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  
    
  );
}

export default App;
