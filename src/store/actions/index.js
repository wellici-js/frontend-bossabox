import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

export const openModal = () => ({
  type: OPEN_MODAL,
  modalIsOpen: true,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  modalIsOpen: false,
});
