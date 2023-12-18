import PropTypes from 'prop-types';
import '../cart.scss';

import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cartSlice';

const CartItem = (props) => {
  const { id, price, name, totalPrice, quantity } = props;
  const dispatch = useDispatch();

  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
        quantity,
      })
    );
  };

  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>per item price : ${price} /-</p>
      <p>Total Price : ${totalPrice}</p>
      <p>Total item : {quantity}</p>
      <FiPlusCircle onClick={incrementCartItem} size={50} />
      <FiMinusCircle onClick={decrementCartItem} size={50} />
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
