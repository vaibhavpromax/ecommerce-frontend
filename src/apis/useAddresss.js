import axios from "axios";
import { useState } from "react";

const useAddress = () => {
  const [addAddressLoading, setAddAddressLoading] = useState(false);
  const [getAddressLoading, setGetAddressLoading] = useState(true);
  const [delAddressLoading, setDelAddressLoading] = useState(false);
  const [updateAddLoading, setUpdateAddLoading] = useState(false);

  const addUserAddress = async (data, cb) => {
    setAddAddressLoading(true);
    try {
      const res = await axios.post(`/ecommerce/user/add-address`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setAddAddressLoading(false);
    }
  };
  const fetchAddresses = async (cb) => {
    setGetAddressLoading(true);
    try {
      const res = await axios.get(`/ecommerce/user/get-address`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetAddressLoading(false);
    }
  };

  const deleteAddress = async (id, cb) => {
    setDelAddressLoading(true);
    try {
      const res = await axios.delete(`/ecommerce/user/delete-address/${id}`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setDelAddressLoading(false);
    }
  };

  const updateAddress = async (payload, cb) => {
    setUpdateAddLoading(true);
    try {
      const res = await axios.patch(`/ecommerce/user/update-address`, payload);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setUpdateAddLoading(false);
    }
  };

  return {
    fetchAddresses,
    getAddressLoading,
    addUserAddress,
    addAddressLoading,
    deleteAddress,
    delAddressLoading,
    updateAddLoading,
    updateAddress,
  };
};

export default useAddress;
