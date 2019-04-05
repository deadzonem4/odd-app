import React from "react";
import MainMenu from '../common/components/MainMenu';

const Header = (props) => {
    
    return (
      <div>
        <MainMenu menuType={props.menuType}/>
      </div>
    );
}

export default Header;
