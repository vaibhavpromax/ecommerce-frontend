import axios from "axios";
import { useState } from "react";

const useImage = () => {
  const [uploadImageLoading, setUploadImageLoading] = useState(false);
  const [deleteImageLoading, setDeleteImageLoading] = useState(false);
  const [editImageLoading, setEditImageLoading] = useState(false);

  const uploadImage = async (data, cb) => {
    setUploadImageLoading(true);
    try {
      const res = await axios.post(`/ecommerce/admin/add-image`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setUploadImageLoading(false);
    }
  };

  const deleteImage = async (id, cb) => {
    setDeleteImageLoading(true);
    try {
      const res = await axios.post(`/ecommerce/admin/delete-image/${id}`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setDeleteImageLoading(false);
    }
  };

  const editImage = async (id, data, cb) => {
    setEditImageLoading(true);
    try {
      const res = await axios.post(`/ecommerce/admin/edit-image/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setEditImageLoading(false);
    }
  };

  return {
    uploadImage,
    uploadImageLoading,
    deleteImage,
    deleteImageLoading,
    editImage,
    editImageLoading,
  };
};

export default useImage;
