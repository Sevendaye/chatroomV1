/* eslint-disable indent */
import getHighestId from 'src/selector/utils';
import * as actions from './actions';

const initialState = {
  author: 'Toto',
  currentMessage: '',
  messages: [],
  settings: {
    user_email: '',
    user_password: '',
    display: true,
    loading: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.SEND_MESSAGE:
      return {
        ...state,
        currentMessage: action.message,
        messages: [
          ...state.messages,
          {
            id: getHighestId(state.messages),
            author: state.author,
            body: action.message,
            owner: true,
          },
        ],
      };
    case actions.CHANGE_FIELD_VALUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.name]: action.value,
        },
      };
    case actions.CHANGE_SETTINGS_HIDDEN:
      return {
        ...state,
        settings: {
          ...state.settings,
          display: !state.settings.display,
        },
      };
    case actions.SET_LOADING_STATE:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: action.loading,
        },
      };
    case actions.CONNECT_USER:
      return {
        ...state,
        author: action.pseudo,
        settings: {
          ...state.settings,
          display: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
