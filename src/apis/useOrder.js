import axios from "axios";
import { useState } from "react";

const useOrder = () => {
  const [getSingleOrderLoading, setGetSingleOrderLoading] = useState(false);
  const [getAllOrdersLoading, setGetAllOrdersLoading] = useState(false);

  const getSingleOrderDetails = async (id, cb) => {
    setGetSingleOrderLoading(true);
    try {
      const res = await axios.get(`/ecommerce/admin/get-order-details/${id}`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetSingleOrderLoading(false);
    }
  };

  const getAllOrders = async (cb) => {
    setGetAllOrdersLoading(true);
    try {
      const res = await axios.get(`/ecommerce/admin/get-all-orders`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetAllOrdersLoading(false);
    }
  };

  return {
    getSingleOrderDetails,
    getSingleOrderLoading,
    getAllOrders,
    getAllOrdersLoading,
  };
};

export default useOrder;
