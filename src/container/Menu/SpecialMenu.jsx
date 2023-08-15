import React from 'react';
import './SpecialMenu.css';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding"id="menu" >
      <div className="app__specialMenu-title">
        <SubHeading Title="Menu That Fits You Palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">

        <div className="app__specialMenu-menu_wines flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
               <MenuItem title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
            <img src={images.menu} alt="menu img"/>
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
               <MenuItem title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
          </div>
        </div>

      </div>
      <div style={{marginTop:"15px"}}>
        <button className="custom__button">View More</button>
      </div>

    </div>
  )
}

export default SpecialMenu;
