import axios from "axios";
import { useState } from "react";

const usePayment = () => {
  const [addPaymentLoading, setAddPaymentLoading] = useState(false);
  const [getPaymentLoading, setGetPaymentLoading] = useState(false);
  const [confirmPaymentLoading, setConfirmPaymentLoading] = useState(false);
  const [createIntentLoading, setCreateIntentLoading] = useState(false);
  const [payWithoutAttachingLoading, setPayWithoutAttachingLoading] =
    useState(false);

  const addPaymentMethod = async (data, cb) => {
    setAddPaymentLoading(true);
    try {
      const res = await axios.post(`ecommerce/payment/attach`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setAddPaymentLoading(false);
    }
  };

  const getPaymentMethods = async (cb) => {
    setGetPaymentLoading(true);
    try {
      const res = await axios.post(`ecommerce/payment/get-payment-methods`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetPaymentLoading(false);
    }
  };

  const createPaymentIntent = async (data, cb) => {
    setCreateIntentLoading(true);
    try {
      const res = await axios.post(`ecommerce/payment/create-intent`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setCreateIntentLoading(false);
    }
  };

  const confirmPayment = async (data, cb) => {
    setConfirmPaymentLoading(true);
    try {
      const res = await axios.post(`ecommerce/payment/confirm-payment`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setConfirmPaymentLoading(false);
    }
  };

  const payWithoutAttaching = async (data, cb) => {
    setConfirmPaymentLoading(true);
    try {
      const res = await axios.post(
        `ecommerce/payment/pay-without-attach`,
        data
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setConfirmPaymentLoading(false);
    }
  };

  return {
    addPaymentMethod,
    getPaymentMethods,
    confirmPayment,
    createPaymentIntent,
    payWithoutAttaching,
    payWithoutAttachingLoading,
    createIntentLoading,
    addPaymentLoading,
    getPaymentLoading,
    confirmPaymentLoading,
  };
};

export default usePayment;
