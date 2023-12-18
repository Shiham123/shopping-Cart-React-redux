import PropTypes from 'prop-types';
import './product.scss';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cartSlice';

const Product = (props) => {
  const { id, name, imgURL, price } = props;

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
