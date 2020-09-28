/* eslint-disable indent */
import {
  CONNECT_WEBSOCKET,
  SEND_MESSAGE,
} from 'src/store/actions';

let socket = null;
const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET:
      {
        console.debug('Connexion au serveur socket', action);
        socket = window.io('http://localhost:3001');
        next(action);
        break;
      }
    case SEND_MESSAGE:
      {
        const { author, currentMessage } = store.getState();
        const newMessage = {
          author,
          message: currentMessage,
        };
        socket.emit('send_message_from_client', newMessage);
        next(action);
        break;
      }
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
