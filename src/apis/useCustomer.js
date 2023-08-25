import axios from "axios";
import { useState } from "react";

const useCustomer = () => {
  const [getCustomersLoading, setGetCustomersLoading] = useState(false);

  const getCustomers = async (cb) => {
    setGetCustomersLoading(true);
    try {
      const res = await axios.get(`/ecommerce/admin/get-products`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetCustomersLoading(false);
    }
  };

  //   const addProduct = async (data, cb) => {
  //     try {
  //       const res = await axios.post(`/ecommerce/admin/add-product`, data);
  //       if (cb && typeof cb === "function") cb(res.data);
  //     } catch (error) {
  //       throw new Error(error);
  //     } finally {
  //       setAddProductLoading(false);
  //     }
  //   };

  return {
    getCustomers,
    getCustomersLoading,
    // addProduct,
    // addProductLoading,
  };
};

export default useCustomer;
