/* eslint-disable indent */
import * as actions from './actions';

const initialState = {
  author: null,
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
    case actions.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: action.id,
            author: action.author,
            message: action.message,
            owner: state.author === action.author,
          },
        ],
      };
    case actions.SEND_MESSAGE:
      return {
        ...state,
        currentMessage: '',
      };
    case actions.CHANGE_MESSAGE:
      return {
        ...state,
        currentMessage: action.message,
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
