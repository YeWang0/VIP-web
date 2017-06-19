import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
    BrowserRouter as Router,
    Route,
    Link

} from 'react-router-dom';


import Announcement from './component/Announcement';
import DropDown from './component/DropDown';

import Footer from './component/Footer';
import Header from './component/Header';
import ProjectList from './component/projects/ProjectList';


import './style/App.css';

injectTapEventPlugin();

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)
class App extends Component {

  constructor(){
    super();
  }
  componentDidMount(){

  }

  render() {
    return (
      <Router>
        <div>
          <Header />
            <div className="App">
              <Route exact path="/" component={Home}/>
              <Route path="/announcement" component={Announcement}/>
              <Route path="/projects" component={ProjectList}/>
              <Route path="/contact" component={Contact}/>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
