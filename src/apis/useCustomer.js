import axios from "axios";
import { useState } from "react";

const useCustomer = () => {
  const [getCustomersLoading, setGetCustomersLoading] = useState(false);
  const [deleteCustomerLoading, setDeleteCustomerLoading] = useState(false);

  const getCustomers = async (pagedata, cb) => {
    setGetCustomersLoading(true);
    try {
      const res = await axios.get(
        `/ecommerce/admin/get-customers?page=${pagedata?.currentPage}&pageSize=${pagedata?.pageSize}`
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetCustomersLoading(false);
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

  return {
    getCustomers,
    getCustomersLoading,
    deleteCustomers,
    deleteCustomerLoading,
    // addProduct,
    // addProductLoading,
  };
};

export default useCustomer;
