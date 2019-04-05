import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  } from 'reactstrap';

const styles = {};

styles.fill = {
  background: '#23345c',
  borderBottom: 'solid 1px #98a3b7'
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
  componentWillUnmount(){

console.log("here");

  }
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
        <Navbar color="custom-header" expand="md"  style={{...styles.fill}}>
          <div className="container">
            <Link className="navbar-brand" to="odd-app">
              <p>Logo</p>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/odd-app">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/odd-app">Menu</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/odd-app">Menu</Link>
                </NavItem>
                <NavItem onClick={this.menuChange}>
                  <Link className="nav-link" to="/odd-app">Menu</Link>
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





            