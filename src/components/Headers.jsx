import { useDispatch } from 'react-redux';
import Cart from './Cart';
import './headers.scss';
import { authActions } from '../Store/AuthSlice';

const Headers = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: 'monospace', fontSize: '30px' }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <button onClick={logoutHandler} className="logout-btn">
            logout
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
