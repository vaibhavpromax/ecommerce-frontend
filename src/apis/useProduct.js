import axios from "axios";
import { useState } from "react";

const useProduct = () => {
  const [getProductsLoading, setGetProductsLoading] = useState(false);
  const [addProductLoading, setAddProductLoading] = useState(false);
  const [deleteProductLoading, setDeleteProductLoading] = useState(false);
  const [editProductLoading, setEditProductLoading] = useState(false);

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

  const getProductInfo = async (id, cb) => {
    setGetProductsLoading(true);
    try {
      const res = await axios.get(`/ecommerce/products/get-product/${id}`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetProductsLoading(false);
    }
  };

  const addProduct = async (data, cb) => {
    setAddProductLoading(true);
    try {
      const res = await axios.post(`/ecommerce/admin/add-product`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setAddProductLoading(false);
    }
  };

  const editProduct = async (id, data, cb) => {
    setEditProductLoading(true);
    try {
      const res = await axios.patch(
        `/ecommerce/admin/update-product/${id}`,
        data
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setEditProductLoading(false);
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
    getProductInfo,
    addProduct,
    addProductLoading,
    deleteProduct,
    deleteProductLoading,
    editProduct,
    editProductLoading,
  };
};

export default useProduct;
