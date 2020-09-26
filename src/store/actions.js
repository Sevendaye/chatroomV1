export const SEND_MESSAGE = 'SEND MESSAGE';
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const CHANGE_SETTINGS_HIDDEN = 'CHANGE_SETTINGS_HIDDEN';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';

export const EMIT_MESSAGE = 'EMIT_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const POPULATE_MESSAGES = 'POPULATE_MESSAGES';
// Action creators

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export const toggleSettingsHidden = (hidden) => ({
  type: CHANGE_SETTINGS_HIDDEN,
  hidden,
});

export const changeFieldValue = (name, value) => ({
  type: CHANGE_FIELD_VALUE,
  name,
  value,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = ({ pseudo }) => ({
  type: CONNECT_USER,
  pseudo,
});

export const setLoadingState = ({ loading }) => ({
  type: SET_LOADING_STATE,
  loading,
});

export const emitMessage = () => ({
  type: EMIT_MESSAGE,
});

export const receiveMessage = () => ({
  type: RECEIVE_MESSAGE,
});

export const populateMessages = (payload) => ({
  type: POPULATE_MESSAGES,
  payload,
});
