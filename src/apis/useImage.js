import axios from "axios";
import { useState } from "react";

const useImage = () => {
  const [uploadImageLoading, setUploadImageLoading] = useState(false);

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

  return {
    uploadImage,
    uploadImageLoading,
  };
};

export default useImage;
