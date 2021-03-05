import React from 'react';

const Categories = ({filterItem,categories}) => {
  return (
    


    <div className="btn-container">
      {categories.map((category,index)=>{

        return <button type='button' className="filter-btn" key={index} onClick={()=>filterItem(category)}>{category}</button>


      })}
      
      {/* <button className="filter-btn" onClick={()=>filterItem('breakfast')}>Breakfast</button>
      <button className="filter-btn" onClick={()=>filterItem('breakfast')}>Milkshake</button> */}
    </div>


  );
};

export default Categories;
