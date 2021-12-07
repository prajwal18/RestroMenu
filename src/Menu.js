import React from 'react';

const Menu = ({items, menuCategories}) => {

  if(menuCategories === 'all'){
    items.sort( (a,b) => {
      if(a.id < b.id){
        return 1;
      } else if (a.id > b.id){
        return -1;
      }
      return 0;
    });
  }
  else {
    items.sort( (a,b) => {
      if(a.id < b.id){
        return -1;
      } else if (a.id > b.id){
        return 1;
      }
      return 0;
    });
  }

  return (
    <div className='section-center'>
      {items.map( (menuItems) => {
        const {id, title, category, price, desc} = menuItems;
        let descInfo = [''];
        if(desc != null){
          descInfo = desc.split(',,');
        }
        return(
          <article key={id} className='menu-item'>
            <div></div>

            <div className='container'>
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>{price==null? '': `Rs ${price}`}</h4>
                </header>


              
                <div className='item-text'>
                  {descInfo.map((item,id) => <p key={id}>{item}</p>)}
                </div>

                {/*<p className='item-text'>{desc}</p>*/}
              </div>
            </div>
          </article>
        );
      } )}
    </div>
  );
};

export default Menu;
