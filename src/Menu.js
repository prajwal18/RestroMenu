import React from 'react';

const Menu = ({items}) => {


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


              
                <p className='item-text'>
                  {descInfo.map((item,id) => <p key={id}>{item}</p>)}
                </p>

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
