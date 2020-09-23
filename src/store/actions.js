export const SEND_MESSAGE = 'SEND MESSAGE';

// Action creators

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});
