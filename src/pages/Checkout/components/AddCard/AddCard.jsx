import React, { useEffect, useRef, useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import styles from "./AddCard.module.scss";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import TextBox from "../../../../components/TextBox/TextBox";
import Button from "../../../../components/Button/Button";
import usePayment from "../../../../apis/usePayment";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCard = ({
  isModal,
  onCloseModal,
  fetchMethods,
  selectedAddress,
  setOrderConfirmModal,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const addCard = useRef();
  const { addPaymentMethod, addPaymentLoading, payWithoutAttaching } =
    usePayment();
  const navigate = useNavigate();

  const [nextStep, setNextStep] = useState(null);
  const [cardInfo, setCardInfo] = useState({
    name: "",
    expiry: "",
    number: "",
    address: "",
  });

  async function handleSubmit() {
    const billingDetails = {
      name: cardInfo.name,
      address: cardInfo.address,
    };

    try {
      stripe
        .createPaymentMethod({
          type: "card",
          billing_details: billingDetails,
          card: elements.getElement(CardElement),
        })
        .then((resp) => {
          console.log(resp);
          addPaymentMethod(
            {
              paymentMethod: resp.paymentMethod,
            },
            (data) => {
              console.log(data);
              if (data?.data?.next_action) {
                setNextStep(data?.data?.next_action);
                window.location.href =
                  data?.data?.next_action?.use_stripe_sdk?.stripe_js;
              }
              onCloseModal();
              fetchMethods();
            }
          );
        });
    } catch (err) {
      /* Handle Error*/
    }
  }

  // function handleSelectCountry(country) {
  //   const states = State.getStatesOfCountry(country.value);
  //   setSelectedLocation((prev) => {
  //     return { ...prev, country };
  //   });

  //   setLocations((prev) => ({ ...prev, states: parseForSelect(states) }));
  // }

  // function handleSelectState(state) {
  //   const cities = City.getCitiesOfState(
  //     selectedLocation.country.value,
  //     state.value
  //   );
  //   setSelectedLocation((prev) => {
  //     return { ...prev, state };
  //   });

  //   setLocations((prev) => ({ ...prev, cities: parseForSelect(cities) }));
  // }

  // function handleSelectCity(city) {
  //   setSelectedLocation((prev) => {
  //     return { ...prev, city };
  //   });
  // }

  // useEffect(() => {
  //   const allCountry = Country.getAllCountries();

  //   setLocations((prev) => {
  //     return { ...prev, countries: parseForSelect(allCountry) };
  //   });
  // }, []);

  async function handlePaymentWithoutAttaching() {
    const billingDetails = {
      name: cardInfo.name,
      address: cardInfo.address,
    };

    try {
      stripe
        .createPaymentMethod({
          type: "card",
          billing_details: billingDetails,
          card: elements.getElement(CardElement),
        })
        .then((resp) => {
          console.log(resp);
          payWithoutAttaching(
            {
              address_id: selectedAddress,
              paymentMethod: resp.paymentMethod,
            },
            (data) => {
              console.log(data);
              if (data?.data?.next_action) {
                setNextStep(data?.data?.next_action);
                window.location.href =
                  data?.data?.next_action?.use_stripe_sdk?.stripe_js;
              }
              // toast.success("Order Made", {
              //   style: {
              //     backgroundColor: "#F7F6F5",
              //     fontFamily: "Jost",
              //   },
              // });
              onCloseModal();
              setOrderConfirmModal(true)
              // setTimeout(() => {
              //   navigate("/shop");
              // }, 2000);
            }
          );
        });
    } catch (err) {
      /* Handle Error*/
    }
  }

  return (
    <Modal
      isModal={isModal}
      onClose={onCloseModal}
      className={styles.addcardmodal}
    >
      <h4>Add Credit/Debit card</h4>
      <div className={styles.form}>
        <TextBox
          setValue={(e) => {
            setCardInfo({ ...cardInfo, name: e });
          }}
          className={styles.textbox}
          placeholder="Enter card holder name"
        />
        <CardElement ref={addCard} className={styles.cardInput} />
        <TextBox
          setValue={(e) => {
            setCardInfo({
              ...cardInfo,
              address: e,
            });
          }}
          className={styles.textbox}
          placeholder="Enter full address"
        />
        {/*
        <div className={styles.bottomsection}>
          <Select
            isClearable={true}
            isSearchable={true}
            name="country"
            value={selectedLocation.country}
            options={locations.countries}
            onChange={handleSelectCountry}
            className={styles.select}
          />
          <Select
            isClearable={true}
            isSearchable={true}
            name="state"
            value={selectedLocation.state}
            options={locations.states}
            onChange={handleSelectState}
            className={styles.select}
          />
          <Select
            isClearable={true}
            isSearchable={true}
            name="city"
            value={selectedLocation.city}
            options={locations.cities}
            onChange={handleSelectCity}
            className={styles.select}
          />
          <TextBox
            setValue={(e) => {
              setCardInfo({
                ...cardInfo,
                address: { ...cardInfo.address, postalCode: e },
              });
            }}
            className={styles.textbox}
            placeholder="ZIP code"
          />
        </div>
       */}
      </div>

      <Button onClick={handleSubmit}>Save card</Button>
      <div
        onClick={handlePaymentWithoutAttaching}
        className={styles.payWithoutsaving}
      >
        Pay without saving
      </div>
      {nextStep && <a href={nextStep?.use_stripe_sdk?.stripe_js}>Next</a>}
    </Modal>
  );
};

export default AddCard;
