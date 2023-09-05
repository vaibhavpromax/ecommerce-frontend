import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.scss";
import Button from "../../components/Button/Button";
import { ICONS } from "../../icons";
import useAddress from "../../apis/useAddresss";
import {
  useStripe,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import AddPayMethod from "../AddPayMethod/AddPayMethod";
import AddCard from "./components/AddCard/AddCard";
import useCart from "../../apis/useCart";
import AddAddressModal from "./components/AddAddressModal/AddAddressModal";
import usePayment from "../../apis/usePayment";
import ConfirmPaymentModal from "./components/ConfirmPaymentModal/ConfirmPaymentModal";

const VIEWS = {
  ADDRESS: "ADDRESS",
  PAY: "PAY",
};

const paymentMethod = {
  id: "pm_1NkYnpAq4N7xgsNeyGBBjNtw",
  object: "payment_method",
  billing_details: {
    address: {
      city: null,
      country: null,
      line1: "lucknow",
      line2: null,
      postal_code: null,
      state: null,
    },
    email: null,
    name: "vaibhav singh",
    phone: null,
  },
  card: {
    brand: "visa",
    checks: {
      address_line1_check: null,
      address_postal_code_check: null,
      cvc_check: null,
    },
    country: "IN",
    exp_month: 12,
    exp_year: 2025,
    funding: "credit",
    generated_from: null,
    last4: "0008",
    networks: {
      available: ["visa"],
      preferred: null,
    },
    three_d_secure_usage: {
      supported: true,
    },
    wallet: null,
  },
  created: 1693341981,
  customer: null,
  livemode: false,
  type: "card",
};
const paymentIntent = {
  id: "pi_1NkYsSAq4N7xgsNepBmu9Anz",
  object: "payment_intent",
  amount: 9000,
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
  client_secret: "pi_1NkYsSAq4N7xgsNepBmu9Anz_secret_ctlgt88JW9mTVFEFe5BKp7Zce",
  confirmation_method: "manual",
  created: 1693342268,
  currency: "usd",
  customer: "cus_OXeAwoQmIOCSOP",
  description: "Buy Product",
  invoice: null,
  last_payment_error: null,
  latest_charge: null,
  livemode: false,
  metadata: {
    address_id: "b686fca3-c560-476f-8cac-d6583128fea0",
    cart_id: "4d3e6aa9-807d-4775-bfdb-a2c8b90b060f",
    user_id: "88101a25-51b0-46ac-8020-6d4b732dea15",
  },
  next_action: null,
  on_behalf_of: null,
  payment_method: "pm_1NkYnpAq4N7xgsNeyGBBjNtw",
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
  setup_future_usage: "off_session",
  shipping: null,
  source: null,
  statement_descriptor: null,
  statement_descriptor_suffix: null,
  status: "requires_confirmation",
  transfer_data: null,
  transfer_group: null,
};

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [addcardmodal, setAddcardmodal] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addAddressModal, setAddAddressModal] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [confirmPaymentModal, setConfirmPaymentModal] = useState(false);
  const { addUserAddress, fetchAddresses, getAddressLoading } = useAddress();
  const { getCart, getCartLoading } = useCart();
  const { getPaymentMethods, createPaymentIntent } = usePayment();
  const [view, setView] = useState(VIEWS.ADDRESS);
  const { card, billing_details } = paymentMethod;
  const [cartInfo, setCartInfo] = useState({
    discount: "",
    total: "",
    quantity: "",
  });
  const [cvcError, setCvcError] = useState(null);

  const closeAddressModal = () => {
    setAddAddressModal(false);
  };

  const closeConfirmPaymentModal = () => {
    setConfirmPaymentModal(false);
  };

  const getAddresses = async () => {
    await fetchAddresses((data) => {
      setAddresses(data?.data);
      data?.data?.map((add) => {
        if (add?.is_primary) setSelectedAddress(add?.address_id);
      });
    });
  };

  const closeAddCardModal = () => {
    setAddcardmodal(false);
  };

  function handleServerResponse(response) {
    if (response.error) {
      /* Handle Error */
    } else if (response.next_action) {
      handleConfirmPayments(response);
    } else {
      alert("Payment Success");
      /* Handle Success */
      window.location.reload();
    }
  }

  const handleConfirmPayments = async (e) => {
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

  const fetchCart = async () => {
    await getCart((data) => {
      let cart_total = 0,
        cart_quantity = 0;

      data?.data?.map((cartItem) => {
        cart_total =
          cart_total +
          parseInt(cartItem.cart_quantity) *
            parseFloat(cartItem?.Product?.selling_price);
        cart_quantity = cart_quantity + parseInt(cartItem.cart_quantity);
      });

      setCartInfo({
        total: cart_total,
        discount: "",
        quantity: cart_quantity,
      });
    });
  };

  const fetchPaymentMethods = async () => {
    getPaymentMethods((data) => {
      setPaymentMethods(data?.data?.data);
      setSelectedPaymentMethod(data?.data?.data);
    });
  };
  const onCheckoutHandler = async () => {
    createPaymentIntent(
      { address_id: selectedAddress, paymentMethod: selectedPaymentMethod },
      (data) => {}
    );
  };

  useEffect(() => {
    getAddresses();
    fetchCart();
    fetchPaymentMethods();
  }, []);

  return (
    <div className={styles.checkout}>
      {view === VIEWS.ADDRESS && (
        <div className={styles.left}>
          <div className={styles.leftheader}>
            <h4>Select a delivery address</h4>
            <Button
              onClick={() => {
                setAddAddressModal(true);
              }}
              theme="WHITE"
            >
              {ICONS.plus}Add a new address
            </Button>
          </div>

          <div className={styles.addressList}>
            {addresses?.map((add, index) => {
              return (
                <div
                  onClick={() => setSelectedAddress(add?.address_id)}
                  className={`${styles.addressCard} ${
                    add?.address_id == selectedAddress && styles.selected
                  } `}
                >
                  <div className={styles.addressName}>{add?.address_name}</div>
                  <div>{add?.name_on_address}</div>
                  <div>
                    {add?.name_on_address} , {add?.street_name}{" "}
                  </div>
                  <div>{add?.city}</div>
                  <div>
                    {add?.country},{add?.postal_code}
                  </div>
                  <div>Phone no:{add?.address_phone_no}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.savebtn}>
            <Button onClick={() => setView(VIEWS.PAY)}>Select and next</Button>
          </div>
        </div>
      )}
      {view === VIEWS.PAY && (
        <div className={styles.left}>
          <div className={styles.leftheader}>
            <h4>Select a payment method</h4>
          </div>
          <div className={styles.paymentList}>
            {paymentMethods?.map((card, index) => {
              return (
                <div className={styles.card}>
                  <div className={styles.customRadio}>
                    <div className={styles.customRadioChecked}></div>
                  </div>
                  <div className={styles.cardName}>
                    {card?.card?.brand} {card?.card?.funding} card ending in{" "}
                    {card?.card?.last4}
                  </div>
                  <div className={styles.cvv}></div>
                </div>
              );
            })}
          </div>
          <div className={styles.addMethod}>
            <h4>Add another payment method</h4>

            <div className={styles.method}>
              <div
                onClick={() => {
                  setAddcardmodal(true);
                }}
                className={styles.ring}
              ></div>
              <div className={styles.methodName}>Credit/Debit card</div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.amount}>
            Sub total ({cartInfo?.quantity}{" "}
            {cartInfo?.quantity > 1 ? "items" : "item"}) :
            <span>${cartInfo?.total} </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
            tempor incididunt ut ero labore
          </p>
          <Button onClick={onCheckoutHandler} className={styles.chckbtn}>
            Checkout
          </Button>
        </div>
        <div className={styles.bottom}>
          {view === VIEWS.PAY &&
            addresses?.map((it) => {
              if (it?.address_id == selectedAddress) {
                return (
                  <div className={styles.selectedAddCard}>
                    <div className={styles.header}>
                      <h4>Deliver to :</h4>
                      <h5
                        onClick={() => {
                          setView(VIEWS.ADDRESS);
                        }}
                      >
                        Change
                      </h5>
                    </div>
                    <div className={styles.addressCard}>
                      <div className={styles.addressName}>
                        {it?.address_name}
                      </div>
                      <div>{it?.name_on_address}</div>
                      <div>
                        {it?.name_on_address} , {it?.street_name}{" "}
                      </div>
                      <div>{it?.city}</div>
                      <div>
                        {it?.country},{it?.postal_code}
                      </div>
                      <div>Phone no:{it?.address_phone_no}</div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <AddAddressModal
        addressModal={addAddressModal}
        onAddModalClose={closeAddressModal}
        fetchAddress={getAddresses}
      />
      <ConfirmPaymentModal
        onCloseModal={closeConfirmPaymentModal}
        isModal={confirmPaymentModal}
      />
      <AddCard
        fetchMethods={fetchPaymentMethods}
        isModal={addcardmodal}
        onCloseModal={closeAddCardModal}
      />
    </div>
  );
};

export default Checkout;
