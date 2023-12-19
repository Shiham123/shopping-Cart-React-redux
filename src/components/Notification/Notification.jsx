// import PropTypes from 'prop-types';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { interfaceActions } from '../../Store/interfaceSlice';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.interface.notification);
  const { type, message, open } = notification || {};

  const closeNotification = () => {
    dispatch(
      interfaceActions.showNotification({
        open: false,
      })
    );
  };

  return (
    <div>
      {open && (
        <Alert onClose={closeNotification} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

// Notification.propTypes = {
//   type: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
// };

export default Notification;
