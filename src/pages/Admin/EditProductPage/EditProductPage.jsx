import React, { useEffect, useState } from "react";
import styles from "./EditProductPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import useProduct from "../../../apis/useProduct";
import toast, { Toaster } from "react-hot-toast";
import EditProductDescription from "./components/EditProductDescription/EditProductDescription";
import EditImage from "./components/EditImage/EditImage";
import EditQuantityPricingShipping from "./components/EditQuantityPricingShipping/EditQuantityPricingShipping";

const product_info = {
  name: "",
  description: "",
  inventory_quantity: "",
  product_type: "",
  beans_type: "",
  product_origin: "",
  product_height: "",
  product_weight: "",
  product_width: "",
  product_length: "",
  cost_price: "",
  selling_price: "",
  is_discount_percentage: true,
  is_discount_present: true,
  discount_value: "",
  discount_begin_date: "",
  discount_end_date: "",
  sec_images: [],
  primary_image: "",
};

const EditProductPage = () => {
  const { editProduct, editProductLoading, getProductInfo } = useProduct();
  const navigate = useNavigate();
  const { id } = useParams();

  const [productInfo, setProductInfo] = useState(product_info);
  const [originalData, setOriginalData] = useState(product_info);

  const fetchProductInfo = () => {
    getProductInfo(id, (data) => {
      console.log(data);
      setProductInfo(data?.data);
      setOriginalData(data?.data);
    });
  };

  useEffect(() => {
    fetchProductInfo();
  }, []);

  const editProductHandler = async () => {
    const filteredObj = {};
    for (const key in productInfo) {
      if (
        originalData.hasOwnProperty(key) &&
        originalData[key] !== productInfo[key]
      ) {
        filteredObj[key] = productInfo[key];
      }
    }

    console.log(filteredObj);

    await editProduct(filteredObj, (res) => {
      toast.success("Product info edited", {
        style: {
          backgroundColor: "#F7F6F5",
          fontFamily: "Jost",
        },
      });
      setTimeout(() => {
        navigate("/product");
      }, 2000);
    });
  };

  return (
    <div className={styles.editProductPage}>
      <Toaster />
      <div className={styles.top}>
        <div className={` ${styles.yellow}`}>
          Product{" "}
          <span className={styles.left}>
            {" "}
            {`        `}
            {">>"} Edit product
          </span>
        </div>
        <div className={styles.right}>{ICONS.bell}</div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.topLeft}></div>
        <Button
          loading={editProductLoading}
          onClick={editProductHandler}
          className={styles.saveBtn}
        >
          Save changes
        </Button>
      </div>
      <div className={styles.params}>
        <EditProductDescription
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
        <EditImage productInfo={productInfo} setProductInfo={setProductInfo} />
        <EditQuantityPricingShipping
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
      </div>
    </div>
  );
};

export default EditProductPage;
