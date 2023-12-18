import { useSelector } from 'react-redux';
import '../cart.scss';
import CartItem from './CartItem';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Your cart</h2>
      <ul>
        {cartItems.map((item) => {
          const { id, price, totalPrice, name, quantity } = item;
          return (
            <li key={id}>
              <CartItem
                id={id}
                price={price}
                totalPrice={totalPrice}
                name={name}
                quantity={quantity}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
