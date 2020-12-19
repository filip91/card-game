import * as actionType from "./actionTypes";
import API from "../../api";

export const numberOfCardsRequest = () => ({
  type: actionType.NUMBER_OF_CARDS_REQUEST,
});

export const numberOfCardsSuccess = (data) => ({
  type: actionType.NUMBER_OF_CARDS_SUCCESS,
  payload: data,
});

export const numberOfCardsFailure = (err) => ({
  type: actionType.NUMBER_OF_CARDS_FAILURE,
  payload: err,
});

export const getCards = (num) => (dispatch) => {
  dispatch(numberOfCardsRequest());

  API.get(`/draw/?count=${num * 10}`)
    .then((res) => dispatch(numberOfCardsSuccess(res.data)))
    .catch((err) => dispatch(numberOfCardsFailure(err.response)));
};

export const getNumberOfPlayers = (number) => ({
  type: actionType.SELECTED_NUMBER_OF_PLAYERS,
  payload: number,
});
