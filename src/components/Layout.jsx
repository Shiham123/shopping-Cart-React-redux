import Headers from './headers';
import Products from './Products/products';

import './layout.scss';
import CartItems from './Cart/CartItems';
import { useSelector } from 'react-redux';

const Layout = () => {
  let total = 0;
  const showCart = useSelector((state) => state.cart.showCart);
  const itemsList = useSelector((state) => state.cart.itemsList);

  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <div className="layout">
        <Headers />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{' '}
      </div>
    </>
  );
};

export default Layout;
