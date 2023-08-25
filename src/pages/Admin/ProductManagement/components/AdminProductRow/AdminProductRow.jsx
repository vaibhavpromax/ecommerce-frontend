import React from "react";
import styles from "./AdminProductRow.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import { ICONS } from "../../../../../icons";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const AdminProductRow = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.productRow}>
      <div className={styles.col1}>
        <Checkbox shadowed={true} />
      </div>
      <div className={styles.col2}>#{product?.product_id.split("-")[0]}</div>
      <div
        onClick={() => {
          navigate("/order/23423");
        }}
        style={{
          cursor: "pointer",
          color: "#B06934",
          textDecorationLine: "underline",
        }}
        className={styles.col3}
      >
        {product?.name}
      </div>
      <div className={styles.col4}>{product?.product_type}</div>
      <div className={styles.col5}>{product?.product_origin}</div>
      <div className={styles.col6}>
        {moment(new Date(product?.createdAt)).format("DD MMM, YYYY")}
      </div>
      <div className={styles.col7}>{product?.cost_price} $</div>
      <div className={styles.col8}>{product?.quantity_purchased}</div>
      <div className={styles.col9}>
        {ICONS.pen}
        {ICONS.redTrash}
      </div>
    </div>
  );
};

export default AdminProductRow;
