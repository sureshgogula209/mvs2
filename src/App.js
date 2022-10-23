import Home from './components/home';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Aboutus from './components/about';
import Contactus from './components/contactus';
import Services from './components/services';
import Projects from './components/projects';
import './components/appstyles.scss';
import logo from './images/bg-logo2.png';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Sidebar
          background='black'
            breakPoint="768"
            content={[<SidebarItem>
              <div class="logo">
                {/* <h1><Link to="/">MVS<h6>constructons</h6></Link></h1> */}
                <Link><img src={logo} /></Link>
            </div>
               <ul className='nav-ul'>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/"><li>Home </li></NavLink>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/services"><li>Services</li></NavLink>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/about"><li>About us</li></NavLink>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/projects"> <li> projects</li></NavLink>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/contactus"> <li>contact us</li></NavLink>
            </ul></SidebarItem>]}
          >

            <Routes>
              <Route path="/" exact strict element={<Home />} />
              <Route path="/about" strict element={<Aboutus />} />
              <Route path="/contactus" strict element={<Contactus />} />
              <Route path="/services" strict element={<Services />} />
              <Route path="/projects" strict element={<Projects />} />
            </Routes>

          </Sidebar>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
