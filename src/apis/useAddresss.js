import axios from "axios";
import { useState } from "react";

const useAddress = () => {
  const [updateAddLoading, setUpdateAddLoading] = useState(false);

  const updateAddress = async (id, payload, cb) => {
    setUpdateAddLoading(true);
    try {
      const res = await axios.patch(
        `/ecommerce/admin/update-address/${id}`,
        payload
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setUpdateAddLoading(false);
    }
  };

  return {
    updateAddLoading,
    updateAddress,
  };
};

export default useAddress;
