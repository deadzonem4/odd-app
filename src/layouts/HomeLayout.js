import React from "react";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const MainLayout = (props) => {
    return (
      <div className="layout-wrapper">
	      <Header menuType="custom-home-menu"/>
	      <main>
	        {props.children}
	      </main>
	      	<Footer text="home"/>
	    </div>
    );
}

export default MainLayout;