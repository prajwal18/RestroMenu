import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ['all',...new Set(items.map( (item) => item.category ))];
const allSubCategories = ['all',...new Set(items.map( (item) => item.subCategory ))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [subCategories, setSubCategories] = useState(allSubCategories);
  const [menuCategories, setMenuCategories] = useState('all');


  const filterItems = (category) => {
    if(category === 'all'){
      setMenuCategories('all');
      setMenuItems(items);
      setSubCategories(allSubCategories);
      return;
    }
    setMenuCategories(category);
    const newItem = items.filter( (item) => item.category === category);
    const newSubCategories = ['all',...new Set(newItem.map( (item) => item.subCategory ))];
    setMenuItems(newItem);
    setSubCategories(newSubCategories);
  };

  const filterFurtherItems = (subCategory, category) => {
    if(subCategory === 'all'){
      filterItems(category);
      return;
    }
    const newItem2 = items.filter( (item) => item.subCategory === subCategory);
    setMenuItems(newItem2);
  };

  
  return (
    <main>
      <section className='menu section'>
        <nav>
          <div className='title'>
            <img className='logo' src='./images/menuLogo.svg'  />
            <h1>Menu <span>Islington College</span></h1>
          </div>
          <Categories filterItems={filterItems} filterFurtherItems={filterFurtherItems} 
          categories={categories} subCategories={subCategories}/>
        </nav>

        <Menu items={menuItems} menuCategories={menuCategories} />
      </section>
    </main>
  );
}

export default App;
