/* eslint-disable indent */
import { EMIT_MESSAGE, RECEIVE_MESSAGE, populateMessages } from 'src/store/actions';
import socket from '../socket';

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case EMIT_MESSAGE:
      {
        // On envoie le store mise à jour via socket.io
        // aux autres clients connectés
        socket.emit('addMessage', store.getState().messages);
        next(action);
        break;
      }
    case RECEIVE_MESSAGE:
      {
        socket.on('sendAllMessages', (data) => {
          // Lorsqu'on reçoit de nouveaux messages
          // On met à jour le store
          store.dispatch(populateMessages(data));
        });
        next(action);
        break;
      }
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
