import axios from "axios";
import { useState } from "react";

const useCustomer = () => {
  const [getCustomersLoading, setGetCustomersLoading] = useState(false);
  const [deleteCustomerLoading, setDeleteCustomerLoading] = useState(false);
  const [getSingleCustomerLoading, setGetSingleCustomerLoading] =
    useState(false);
  const [updateCustomerLoading, setUpdateCustomerLoading] = useState(false);

  const getCustomers = async (cb) => {
    setGetCustomersLoading(true);
    try {
      const res = await axios.get(`/ecommerce/admin/get-customers`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetCustomersLoading(false);
    }
  };

  const getSingleCustomerInfo = async (id, cb) => {
    setGetSingleCustomerLoading(true);
    try {
      const res = await axios.get(
        `/ecommerce/admin/get-complete-user-info/${id}`
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetSingleCustomerLoading(false);
    }
  };

  const deleteCustomers = async (data, cb) => {
    setDeleteCustomerLoading(true);
    try {
      const res = await axios.post(`/ecommerce/admin/delete-customers`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setDeleteCustomerLoading(false);
    }
  };

  const editUser = async (id, data, cb) => {
    setUpdateCustomerLoading(true);
    try {
      const res = await axios.patch(`/ecommerce/admin/update-user/${id}`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setUpdateCustomerLoading(false);
    }
  };

  return {
    getCustomers,
    getCustomersLoading,
    deleteCustomers,
    deleteCustomerLoading,
    getSingleCustomerInfo,
    getSingleCustomerLoading,
    editUser,
    updateCustomerLoading,
    // addProduct,
    // addProductLoading,
  };
};

export default useCustomer;
