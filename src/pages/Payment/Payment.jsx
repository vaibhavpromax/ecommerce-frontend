import { useState } from "react";
import style from "./Payment.module.scss";

// import clsx from "clsx";
// import { format } from "date-fns";
import {
  useStripe,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

// import { postRequest } from "../utils/api";

const paymentMethod = {
  id: "pm_1NH781Aq4N7xgsNel8GO2MSO",
  object: "payment_method",
  billing_details: {
    address: {
      city: null,
      country: null,
      line1: "Wow",
      line2: null,
      postal_code: "78987",
      state: null,
    },
    email: null,
    name: "Vaibhav Singh",
    phone: null,
  },
  card: {
    brand: "mastercard",
    checks: {
      address_line1_check: null,
      address_postal_code_check: null,
      cvc_check: null,
    },
    country: "US",
    exp_month: 11,
    exp_year: 2025,
    funding: "credit",
    generated_from: null,
    last4: "4444",
    networks: {
      available: ["mastercard"],
      preferred: null,
    },
    three_d_secure_usage: {
      supported: true,
    },
    wallet: null,
  },
  created: 1686324090,
  customer: null,
  livemode: false,
  type: "card",
};

const paymentIntent = {
  id: "pi_1NH7AWAq4N7xgsNeQoWprPwy",
  object: "payment_intent",
  amount: 9600,
  amount_capturable: 0,
  amount_details: {
    tip: {},
  },
  amount_received: 0,
  application: null,
  application_fee_amount: null,
  automatic_payment_methods: null,
  canceled_at: null,
  cancellation_reason: null,
  capture_method: "automatic",
  client_secret: "pi_1NH7AWAq4N7xgsNeQoWprPwy_secret_C0CzltVL7uKGdaeJThxd0KnBc",
  confirmation_method: "manual",
  created: 1686324244,
  currency: "inr",
  customer: "cus_O3A9KuT7TbKoCW",
  description: "Buy Product",
  invoice: null,
  last_payment_error: null,
  latest_charge: null,
  livemode: false,
  metadata: {},
  next_action: null,
  on_behalf_of: null,
  payment_method: "pm_1NH781Aq4N7xgsNel8GO2MSO",
  payment_method_options: {
    card: {
      installments: null,
      mandate_options: null,
      network: null,
      request_three_d_secure: "automatic",
    },
  },
  payment_method_types: ["card"],
  processing: null,
  receipt_email: null,
  review: null,
  setup_future_usage: null,
  shipping: null,
  source: null,
  statement_descriptor: null,
  statement_descriptor_suffix: null,
  status: "requires_confirmation",
  transfer_data: null,
  transfer_group: null,
};

export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();

  const [cvcError, setCvcError] = useState(null);

  const { card, billing_details } = paymentMethod;

  const handleSubmit = async (e) => {
    e.preventDefault();
    stripe
      .createToken("cvc_update", elements.getElement(CardCvcElement))
      .then((result) => {
        if (result.error) {
          setCvcError(result.error.message);
        } else {
          axios
            .post(`ecommerce/payment/confirm-payment`, {
              paymentMethod: paymentMethod.id,
              paymentIntent: paymentIntent.id,
            })
            .then((resp) => {
              console.log(resp.data);
              handleServerResponse(resp.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        /* Handle error*/
      });
  };

  function handleServerResponse(response) {
    if (response.error) {
      /* Handle Error */
    } else if (response.next_action) {
      handleAction(response);
    } else {
      alert("Payment Success");
      /* Handle Success */
      window.location.reload();
    }
  }

  function handleAction(response) {
    stripe.handleCardAction(response.client_secret).then(function (result) {
      if (result.error) {
        console.log(result.error);
        /* Handle error */
      } else {
        axios
          .post(`ecommerce/payment/confirm-payment`, {
            paymentIntent: paymentIntent.id,
            paymentMethod: paymentMethod.id,
          })
          .then((resp) => {
            console.log(resp);
            handleServerResponse(resp.data);
          })
          .catch((err) => {
            console.log(err);
            /* Handle Error */
          });
      }
    });
  }

  return (
    card && (
      <div className={style.wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={card.icon} alt="" />
            </div>
            <div className={style.row}>
              <label>Cardholder Name</label>
              <p>{billing_details.name}</p>
            </div>
            {/* <div className={clsx(style.row, style.col)}> */}
            <div className={style.cardNumber}>
              <label>Card Number</label>
              <p>{`**** **** **** ${card.last4}`}</p>
            </div>
            <div className={style.expiry}>
              <label>Card Expiry</label>
              <p>
                {/* {format(
                  new Date(`${card.exp_year}/${card.exp_month}/01`),
                  "mm/yyyy"
                )} */}
              </p>
              {/* </div> */}
            </div>

            <div className={style.row}>
              <label>Enter Cvc/Cvv </label>
              <div className={style.cvcInput}>
                <CardCvcElement
                  onChange={() => {
                    setCvcError(null);
                  }}
                />
              </div>
              <p className={style.cvcError}>{cvcError}</p>
            </div>
          </div>

          <button>Make Payment</button>
        </form>
      </div>
    )
  );
}
