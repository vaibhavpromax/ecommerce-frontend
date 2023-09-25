import React from "react";
import styles from "./OrderConfirmModal.module.scss";
import { ICONS } from "../../icons";
import Modal from "../Modal/Modal";

const OrderConfirmModal = ({ isModal, onModalClose }) => {
  return (
    <Modal
      isModal={isModal}
      onClose={onModalClose}
      className={styles.orderConfirmModal}
    >
      <div className={styles.header}>
        Félicitations !
        <div
          onClick={() => {
            onModalClose();
          }}
          className={styles.closebtn}
        >
          {ICONS.circleClose}
        </div>
      </div>
      <div className={styles.body}>
        Nous avons bien reçu votre paiement, et nous vous avons envoyé un mail
        de confirmation. <br /> Votre box à hâte de vous rencontrer ! Vous
        pourrez suivre l’avancement de votre commande dans “Mon profil” d’ici
        peu.
      </div>
    </Modal>
  );
};

export default OrderConfirmModal;
