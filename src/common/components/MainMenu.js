import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from "../../images/winbet-logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

const styles = {};

styles.fill = {
  background: '#222325',
  borderBottom: 'solid 2px #141a1a',
};


// const homePage = window.location.href;

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isHome: false
    };
  }
  // shouldComponentUpdate(){
    
  //   if(homePage === "http://localhost:3000/odd-app/news"){
  //     this.setState({
  //       isHome: true
  //     });
  //   }
  //     else{
  //             this.setState({
  //       isHome: false
  //     });
  //     }
  // }
//   componentWillUnmount(){

// console.log("here");

//   }
  //   shouldComponentUpdate(){

  //   if(homePage === "http://localhost:3000/odd-app/news"){
  //     this.setState({
  //       isHome: !this.state.isHome
  //     });
  //   }

  // }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    
    return (
      <div className={this.props.menuType}>
        <Navbar color="custom-header" expand="lg"  style={{...styles.fill}}>
          <div className="container">
            <Link className="navbar-brand" to="odd-app">
              <img src={logo}  alt="winbet"/>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" activeClassName="active" to="/odd-app">Начало</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link" activeClassName="active" to="/odd-app/casinos">Игрални зали</NavLink>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/odd-app">Онлайн казино</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/odd-app">Спортни барове</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/odd-app">За нас</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/odd-app">Контакти</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default MainMenu;





            