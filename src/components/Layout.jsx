import Headers from './headers';
import Products from './Products/products';

import './layout.scss';
import CartItems from './Cart/CartItems';
import { useSelector } from 'react-redux';

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <>
      <div className="layout">
        <Headers />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${10}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{' '}
      </div>
    </>
  );
};

export default Layout;
