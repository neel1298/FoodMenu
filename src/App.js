import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
const allcategories =['all',...new Set(items.map((item)=> item.category))];
console.log(allcategories);

function App() {
  
    const [menuItem, setmenuItem] = useState(items);
    const [categories,setCategories] = useState(allcategories); 
    const [itemdetail,isItemDetail] = useState(false);
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
    //console.log(itemdetail);
    return (
      <main>
        <section className="menu section">
          <div className="title"> 
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Router>
          <Categories categories={categories} filterItem={filterItem}/>
            <Switch>
              
              <Route exact path='/'>
                <Menu items={menuItem}/>  
              </Route>

              <Route path='/menudetail/:id' children={<ItemDetail></ItemDetail>}/>
            </Switch>
          </Router>
        </section>

      </main>
  );
}

export default App;
