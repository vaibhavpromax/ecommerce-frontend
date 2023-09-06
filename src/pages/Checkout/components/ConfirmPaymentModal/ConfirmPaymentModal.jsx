import React, { useRef, useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import styles from "./ConfirmPaymentModal.module.scss";
import {
  useStripe,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";
import usePayment from "../../../../apis/usePayment";
import Button from "../../../../components/Button/Button";
const ConfirmPaymentModal = ({
  isModal,
  onCloseModal,
  paymentMethod,
  paymentIntent,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cvcError, setCvcError] = useState(null);
  const { confirmPayment } = usePayment();
  const cardRef = useRef();

  console.log(paymentIntent, paymentMethod);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    stripe
      .createToken("cvc_update", elements.getElement(CardCvcElement))
      .then((result) => {
        if (result.error) {
          setCvcError(result.error.message);
        } else {
          confirmPayment(
            {
              paymentMethod: paymentMethod.id,
              paymentIntent: paymentIntent.id,
            },
            (data) => {
              handleServerResponse(data);
            }
          );
        }
      })
      .catch((err) => {
        console.log(err);
        /* Handle error*/
      });
  };

  function handleServerResponse(response) {
    console.log(response);
    if (response.error) {
      /* Handle Error */
    } else if (response.next_action) {
      handleAction(response);
    } else {
      alert("Payment Success");
      /* Handle Success */
      // window.location.reload();
    }
  }

  function handleAction(response) {
    stripe.handleCardAction(response.client_secret).then(function (result) {
      if (result.error) {
        console.log(result.error);
        /* Handle error */
      } else {
        confirmPayment(
          {
            paymentIntent: paymentIntent.id,
            paymentMethod: paymentMethod.id,
          },
          (data) => {
            handleServerResponse(data);
          }
        );
      }
    });
  }

  return (
    <Modal isModal={isModal} onClose={onCloseModal}>
      <div className={styles.row}>
        <label>Cardholder Name</label>
        <p>{paymentMethod?.billing_details.name}</p>
      </div>
      <div className={styles.cardNumber}>
        <label>Card Number</label>
        <p>{`**** **** **** ${paymentMethod?.card.last4}`}</p>
      </div>
      <label>Enter Cvc/Cvv </label>
      <div className={styles.cvcInput}>
        <CardCvcElement
          ref={cardRef}
          onChange={() => {
            setCvcError(null);
          }}
        />
      </div>
      <p className={styles.cvcError}>{cvcError}</p>
      <Button onClick={handleSubmit}>Pay</Button>
    </Modal>
  );
};

export default ConfirmPaymentModal;
