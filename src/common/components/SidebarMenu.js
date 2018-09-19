import React from 'react';

const SidebarMenu = (props) => {
  const items = props.api.map((filters) =>{
    return(filters.sport_nice);
    
  });

  const unique = [...new Set(items)];
  const sorted = unique.sort() 

  const categories = sorted.map((results) =>{
    
    return(<li key={results} className="category-item">{results}</li>);
    
  });

  return (
    <ul className="categories">
      {categories}
    </ul>
  );
}
export default SidebarMenu;



    



