import { useDispatch, useSelector } from 'react-redux';
import './cart.scss';
import { cartActions } from '../Store/cartSlice';

const Cart = () => {
  const stateQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {stateQuantity} Items</h3>
    </div>
  );
};

export default Cart;
