export const SEND_MESSAGE = 'SEND MESSAGE';

export const INPUT_EMAIL_CHANGE = 'INPUT_EMAIL_CHANGE';
export const INPUT_PASSWORD_CHANGE = 'INPUT_PASSWORD_CHANGE';

// Action creators

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export const inputEmailChange = (email) => ({
  type: INPUT_EMAIL_CHANGE,
  email,
});

export const inputPasswordChange = (password) => ({
  type: INPUT_PASSWORD_CHANGE,
  password,
});
