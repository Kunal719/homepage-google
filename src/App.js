import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./components/HomePage";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gmail from './pages/Gmail';
import Images from './pages/Images';
import styled from 'styled-components';
import About from "./pages/About";
import Advertising from "./pages/Advertising";
import Business from "./pages/Business";
import Settings from "./pages/Settings";
import SearchWorks from "./pages/SearchWorks";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const GoogleHomepage = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`

function App() {
  return (
    <GoogleHomepage>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/gmail">
          <Gmail />
        </Route>
        <Route exact path="/images">
          <Images />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/advertising">
          <Advertising />
        </Route>
        <Route exact path="/business">
          <Business />
        </Route>
        <Route exact path="/searchWorks">
          <SearchWorks />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </GoogleHomepage>
  );
}

export default App;
