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
        <Nav />
        <div className="vertical-center">
          <Route exact path='/' component={HomeBody} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/about' component={AboutBody} />
          <Route path='/work' component={WorkBody} /> 
        </div>
    </Router>

  )
  
}
if (module.hot) module.hot.accept()
ReactDOM.render(<App />, document.getElementById("root"))