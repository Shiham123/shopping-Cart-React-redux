import PropTypes from 'prop-types';
import '../cart.scss';

const CartItem = (props) => {
  const { id, price, name, totalPrice, quantity } = props;

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>per item price : ${price} /-</p>
      <p>Total Price : ${totalPrice}</p>
      <p>Total item : {quantity}</p>
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
