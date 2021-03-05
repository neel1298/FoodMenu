import React from 'react';
//import items from './data';
const Menu = ({items}) => {
  return (
    <div className="sectio-center">
      {items.map((menuItem)=>{
        const {id,title,img,desc,price} = menuItem;
        return(
          <article key={id} className='menu-item' style={{marginBottom:"25px"}}>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>

        );
      })};

    </div>

  )
};

export default Menu;
