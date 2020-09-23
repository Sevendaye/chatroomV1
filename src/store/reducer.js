/* eslint-disable indent */
import * as actions from './actions';

const initialState = [];

let id = 0;
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.SEND_MESSAGE:
      // eslint-disable-next-line no-plusplus
      id = ++id;
      return [
        ...state,
        {
          id: id,
          body: action.message,
        },
      ];
    default:
      return state;
  }
};

export default reducer;
