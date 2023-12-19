import { useDispatch, useSelector } from 'react-redux';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useEffect } from 'react';
import Notification from './components/Notification/Notification';
import { interfaceActions } from './Store/interfaceSlice';

let isFirstRenderNotification = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.interface.notification);

  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isFirstRenderNotification) {
      isFirstRenderNotification = false;
      return;
    }

    const sendRequest = async () => {
      dispatch(
        interfaceActions.showNotification({
          open: true,
          message: 'Sending request',
          type: 'warning',
        })
      );

      const response = await fetch(
        'https://redux-shopping-54619-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch(
        interfaceActions.showNotification({
          open: true,
          message: 'send request to database successfully',
          type: 'success',
        })
      );
    };
    sendRequest().catch((error) => {
      console.log(error);
      dispatch(
        interfaceActions.showNotification({
          open: true,
          message: 'cannot get data from database',
          type: 'error',
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <div>
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
