import React from 'react';
import './SideBar.css';
import Catagory from './Catagory/Catagory';
import Price from './Price/Price';
import Color from './Color/Color';
const SideBar = ({handleChange}) => {
  console.log(handleChange);
    return (
      <>
        <section className="sidebar">
          <div className="logo-container">
            <h1>🛒</h1>
          </div>
          <Catagory handleChange={handleChange}/>
          <Price handleChange={handleChange}/>
          <Color handleChange={handleChange}/>
          
        </section>
      </>
    );
  };
  
  export default SideBar;