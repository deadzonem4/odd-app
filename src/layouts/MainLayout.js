import React from "react";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const MainLayout = (props) => {
    return (
      <div className="layout-wrapper">
	      <Header menuType="custom-main-menu"/>
	      <main>
	        {props.children}
	      </main>
	      	<Footer text="All rights reserved. Design & development Rosen Georgiev"/>
	    </div>
    );
}

export default MainLayout;