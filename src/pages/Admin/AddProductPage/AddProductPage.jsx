import React, { useState } from "react";
import styles from "./AddProductPage.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import QuantityPricingShipping from "./components/QuantityPricingShipping/QuantityPricingShipping";
import AddProductDescription from "./components/AddProductDescription/AddProductDescription";
import AddImage from "./components/AddImage/AddImage";
import useProduct from "../../../apis/useProduct";
import toast, { Toaster } from "react-hot-toast";

const AddProductPage = () => {
  const { addProduct, addProductLoading } = useProduct();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({
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
    shipping_price: "",
  });

  const addProductHandler = async () => {
    addProduct(productInfo, (res) => {
      toast.success("New Product Added", {
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
    <div className={styles.addProductPage}>
      <Toaster />
      <div className={styles.top}>
        <div className={` ${styles.yellow}`}>
          Product{" "}
          <span className={styles.left}>
            {" "}
            {`        `}
            {">>"} Add Product
          </span>
        </div>
        <div className={styles.right}>
          {ICONS.bell}
          {/* 
          <div className={styles.profile}>
          <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
          />
          </div>
        */}
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          {/*
            <span className={styles.id}>Product #1256</span>{" "}
            <span className={styles.view}>View product</span>
            <div className={styles.date}>14 July, 2023 at 23:04</div>
            */}
        </div>
        <Button
          loading={addProductLoading}
          onClick={addProductHandler}
          className={styles.saveBtn}
        >
          Save changes
        </Button>
      </div>
      <div className={styles.params}>
        <AddProductDescription
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
        <AddImage productInfo={productInfo} setProductInfo={setProductInfo} />
        <QuantityPricingShipping
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
      </div>
    </div>
  );
};

export default AddProductPage;
