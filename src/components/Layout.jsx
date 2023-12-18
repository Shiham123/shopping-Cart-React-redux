import Headers from './headers';
import Products from './Products/products';

import './layout.scss';

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Headers />
        <Products />
        <div className="total-price">
          <h3>Total: ${10}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{' '}
      </div>
    </>
  );
};

export default Layout;
