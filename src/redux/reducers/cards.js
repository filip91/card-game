import * as actionType from "../actions/actionTypes";

const initialState = {
  numberOfPlayers: 0,
  cardsData: [],
  fetching: false,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SELECTED_NUMBER_OF_PLAYERS:
      return { ...state, numberOfPlayers: action.payload };
    case actionType.NUMBER_OF_CARDS_REQUEST:
      return { ...state, fetching: true };
    case actionType.NUMBER_OF_CARDS_SUCCESS:
      return {
        ...state,
        fetching: false,
        cardsData: action.payload.cards,
      };
    case actionType.NUMBER_OF_CARDS_FAILURE:
      return { ...state, fetching: false, err: action.payload };
    default:
      return state;
  }
};
