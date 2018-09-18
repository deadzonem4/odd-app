import React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = (props) => {

    return (
      <ul className="categories">
        <li className="category-item"><Link to="/odd-app">Soccer</Link></li>
        <li className="category-item"><Link to="/odd-app">Soccer</Link></li>
        <li className="category-item"><Link to="/odd-app">Soccer</Link></li>
        <li className="category-item"><Link to="/odd-app">Soccer</Link></li>
        <li className="category-item"><Link to="/odd-app">Soccer</Link></li>
        <li className="category-item"><Link to="/odd-app">Soccer</Link></li>
        <li className="category-item"><Link to="/odd-app">Soccer</Link></li>
      </ul>
    );
}
export default SidebarMenu;

