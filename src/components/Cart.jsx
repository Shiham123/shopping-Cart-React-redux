import { useSelector } from 'react-redux';
import './cart.scss';

const Cart = () => {
  const stateQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="cartIcon">
      <h3>Cart: {stateQuantity} Items</h3>
    </div>
  );
};

export default Cart;
