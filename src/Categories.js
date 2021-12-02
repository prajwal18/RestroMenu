import React, { useState } from 'react';

const Categories = ({filterItems, filterFurtherItems, categories, subCategories}) => {

  const [clickedCategory, setClickedCategory] = useState('all');


  return(
    <>
      <div className='btn-container'>
        {categories.map( (category, index) => {
          return (<button key={index} onClick={() => {
            filterItems(category);
            setClickedCategory(category);
          }} className={(category == clickedCategory)? `filter-btn on`: `filter-btn`}>{category}</button>);
        } )}
      </div>


      <div className='selectAndSearch'>
        <select className='selectCategory'>
          {
            subCategories.map( (subCategory, index) => {
              return (
                <option key={index} value={subCategory} >{subCategory}</option>
              );
            } )
          }
        </select>

        <button onClick={() => {
          var mmo = document.querySelector('.selectCategory').value;
          filterFurtherItems(mmo, clickedCategory);
        }}>Search</button>
      </div>
   </>
  );
};

export default Categories;