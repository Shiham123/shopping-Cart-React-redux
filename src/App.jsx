import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useEffect } from 'react';

function App() {
  const cart = useSelector((state) => state.cart);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://redux-shopping-54619-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      console.log(data);
    };
    sendRequest();
  }, [cart]);

  return (
    <div>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
