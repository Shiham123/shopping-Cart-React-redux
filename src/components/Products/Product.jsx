import PropTypes from 'prop-types';
import './product.scss';

const Product = (props) => {
  const { id, name, imgURL, price } = props;

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button>Add to cart</button>
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
