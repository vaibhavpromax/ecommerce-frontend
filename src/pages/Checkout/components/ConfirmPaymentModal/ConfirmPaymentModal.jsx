import React from "react";
import Modal from "../../../../components/Modal/Modal";

const ConfirmPaymentModal = ({ isModal, onCloseModal }) => {
  return <Modal isModal={isModal} onClose={onCloseModal}></Modal>;
};

export default ConfirmPaymentModal;
