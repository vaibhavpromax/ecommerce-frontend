import axios from "axios";
import { useState } from "react";

const useProduct = () => {
  const [getProductsLoading, setGetProductsLoading] = useState(false);
  const [addProductLoading, setAddProductLoading] = useState(false);
  const [deleteProductLoading, setDeleteProductLoading] = useState(false);

  const getProducts = async (cb) => {
    setGetProductsLoading(true);
    try {
      const res = await axios.get(`/ecommerce/admin/get-products`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetProductsLoading(false);
    }
  };

  const addProduct = async (data, cb) => {
    try {
      const res = await axios.post(`/ecommerce/admin/add-product`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setAddProductLoading(false);
    }
  };

  const deleteProduct = async (data, cb) => {
    setDeleteProductLoading(true);
    try {
      const res = await axios.post(`/ecommerce/admin/delete-product`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setDeleteProductLoading(false);
    }
  };

  return {
    getProducts,
    getProductsLoading,
    addProduct,
    addProductLoading,
    deleteProduct,
    deleteProductLoading,
  };
};

export default useProduct;
