/* eslint-disable indent */
import {
  CONNECT_WEBSOCKET,
  SEND_MESSAGE,
  CONNECT_USER,
  addMessage,
} from 'src/store/actions';

let socket = null;
const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET:
      {
        socket = window.io('http://localhost:3001');
        next(action);
        break;
      }
    case CONNECT_USER:
      {
        if (store.getState().author === null) {
          socket.on('send_message_to_client', ({ id, author, message }) => {
            store.dispatch(addMessage(id, author, message));
          });
        }
        next(action);
        break;
      }
    case SEND_MESSAGE:
      {
        const { author, currentMessage } = store.getState();

        if (author === null) {
          return null;
        }
        const newMessage = {
          author,
          message: currentMessage,
        };
        socket.emit('send_message_to_server', newMessage);
        next(action);
        break;
      }
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
