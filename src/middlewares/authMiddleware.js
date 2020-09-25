/* eslint-disable indent */
import axios from 'axios';
import { SUBMIT_LOGIN, connectUser, setLoadingState } from 'src/store/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      {
        const { settings: { user_email, user_password } } = store.getState();
        store.dispatch(setLoadingState(true));
        axios.post('http://localhost:3001/login', { email: user_email, password: user_password })
          .then((response) => {
            store.dispatch(connectUser(response.data));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            store.dispatch(setLoadingState(false));
          });

        next(action);
        break;
      }
    default:
      next(action);
      break;
  }
};

export default auth;
