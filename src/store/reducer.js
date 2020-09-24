/* eslint-disable indent */
import getHighestId from 'src/selector/utils';
import * as actions from './actions';

const initialState = {
  user: {
    email: '',
    password: '',
  },
  author: 'Toto',
  messages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.SEND_MESSAGE:
      return {
        ...state,
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
    case actions.INPUT_EMAIL_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };
    case actions.INPUT_PASSWORD_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };
    default:
      return state;
  }
};

export default reducer;
