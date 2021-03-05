import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allcategories =['all',...new Set(items.map((item)=> item.category))];
console.log(allcategories);

function App() {
  
    const [menuItem, setmenuItem] = useState(items);
    const [categories,setCategories] = useState(allcategories); 
    //setCategories(allcategories);
    const filterItem = (category) =>{
      if (category==='all'){
        setmenuItem(items);
        return;
      }
      const newItems = items.filter((item)=>
        item.category === category

      )
      setmenuItem(newItems);

    }
    return (
      <main>
        <section className="menu section">
          <div className="title"> 
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItem={filterItem}/>
          <Menu items={menuItem}/>
        </section>

      </main>
  );
}

export default App;
