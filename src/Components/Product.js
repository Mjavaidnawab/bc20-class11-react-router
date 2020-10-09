import React from 'react';
import Shoes from './../shoes.json';
import { Link } from 'react-router-dom';


function Product() {
  console.log(Shoes)
  //console.log(Object.keys(Shoes))

  return (
    <div >
      <h1> Welcome to Product Page </h1>
      <div className="productContainer">
        {Object.keys(Shoes).map(keyName => {
          const shoe = Shoes[keyName];
          console.log(Object.keys)
          return (
            <Link key={keyName}
              className="link"
              to={`/product/${keyName}`}>
              <h4>{shoe.name}</h4>
              <img src={shoe.img} height={150} alt="shoe" />
            </Link>)
        })}
      </div>
    </div>
  );
}

export default Product;
