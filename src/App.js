import React from 'react';
import ReactDOM from 'react-dom';
// import { Body } from './components/Body';
import { Nav } from './components/Nav';
import styles from './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HomeBody } from './components/pages/home/HomeBody';
import { AboutBody } from './components/pages/about/AboutBody';
import { ContactPage } from './components/pages/contact/ContactPage';
import { WorkBody } from './components/pages/work/WorkBody';

const App = () => {
  return (
    <Router>
      {/* <div className="container"> */}
        <Nav />
        {/* <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>Topics</Link></li>
        </ul> */}
        {/* <Switch> */}
        {/* <hr /> */}
        <div className="vertical-center">
          <Route exact path='/' component={HomeBody} />
          <Route path='/contact' component={ContactPage} />
        
          <Route path='/about' component={AboutBody} />
          <Route path='/work' component={WorkBody} />
          
          
        </div>
          {/* <Route path='/about'> <AboutBody /> </Route>
          <Route exact path='/'> <HomeBody /> </Route> */}

        {/* </Switch> */}
      {/* </div> */}
    </Router>
  )
  
}
ReactDOM.render(<App />, document.getElementById("root"))