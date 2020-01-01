import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actionTypes';

const INITIAL_STATE = {
  modalIsOpen: true,
};

export const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      console.log('open');
      return {
        ...state,
        modalIsOpen: action.modalIsOpen,
      };
    case CLOSE_MODAL:
      console.log('close');
      return {
        ...state,
        modalIsOpen: action.modalIsOpen,
      };
    default:
      return state;
  }
};
