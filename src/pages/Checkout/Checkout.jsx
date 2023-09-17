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
import AddCard from "./components/AddCard/AddCard";
import useCart from "../../apis/useCart";
import AddAddressModal from "./components/AddAddressModal/AddAddressModal";
import usePayment from "../../apis/usePayment";
import ConfirmPaymentModal from "./components/ConfirmPaymentModal/ConfirmPaymentModal";

const VIEWS = {
  ADDRESS: "ADDRESS",
  PAY: "PAY",
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
  const [paymentIntent, setPaymentIntent] = useState(null);
  const { addUserAddress, fetchAddresses, getAddressLoading } = useAddress();
  const { getCart, getCartLoading } = useCart();
  const { getPaymentMethods, createPaymentIntent } = usePayment();
  const [view, setView] = useState(VIEWS.ADDRESS);
  // const { card, billing_details } = paymentMethod;
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
    });
  };
  const onCheckoutHandler = async () => {
    createPaymentIntent(
      { address_id: selectedAddress, paymentMethod: selectedPaymentMethod },
      (data) => {
        console.log(data);

        setPaymentIntent(data?.data?.paymentIntent);
        setConfirmPaymentModal(true);
      }
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
            <Button
              className={selectedAddress == null && styles.disabled}
              onClick={() => setView(VIEWS.PAY)}
            >
              Select and next
            </Button>
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
                  <div
                    onClick={() => {
                      setSelectedPaymentMethod(card);
                    }}
                    className={styles.customRadio}
                  >
                    <div
                      className={
                        card?.id == selectedPaymentMethod?.id &&
                        styles.customRadioChecked
                      }
                    ></div>
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
          <Button
            onClick={onCheckoutHandler}
            className={`${selectedPaymentMethod == null && styles.disabled} ${
              styles.chckbtn
            }`}
          >
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
        // isModal={confirmPaymentModal}
        isModal={true}
        paymentMethod={selectedPaymentMethod}
        paymentIntent={paymentIntent}
      />
      <AddCard
        selectedAddress={selectedAddress}
        fetchMethods={fetchPaymentMethods}
        isModal={addcardmodal}
        onCloseModal={closeAddCardModal}
      />
    </div>
  );
};

export default Checkout;
