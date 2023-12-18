import { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetch('/public/data.json')
      .then((response) => response.json())
      .then((data) => setCartData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul className="products-container">
        {cartData.map((product, index) => {
          const { id, name, imgURL, price } = product;
          return (
            <li key={index}>
              <Product id={id} name={name} imgURL={imgURL} price={price} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
