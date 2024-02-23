import React from "react";
import styles from "./AdminProductRow.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import { ICONS } from "../../../../../icons";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import useProduct from "../../../../../apis/useProduct";

const AdminProductRow = ({
  product,
  selectedIds,
  setSelectedIds,
  fetchProducts,
}) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProduct();
  const insertInFilterValuesHandler = (newValue) => {
    let flag = true;
    const newArr = selectedIds.filter((val) => {
      if (val == newValue) {
        flag = false;
        return;
      } else {
        return val;
      }
    });
    if (flag) {
      newArr.push(newValue);
    }
    return newArr;
  };

  const deleteProductHandler = async () => {
    await deleteProduct({ id_arr: [product?.product_id] }, () => {
      fetchProducts();
    });
  };

  return (
    <div className={styles.productRow}>
      <div className={styles.col1}>
        <Checkbox
          checked={
            selectedIds.length > 0 && selectedIds.includes(product?.product_id)
          }
          onChange={() => {
            setSelectedIds(insertInFilterValuesHandler(product?.product_id));
            // setSelectedIds([...selectedIds, product?.product_id]);
          }}
          shadowed={true}
        />
      </div>
      <div className={styles.col2}>#{product?.product_id.split("-")[0]}</div>
      <div
        onClick={() => {
          // navigate("/order/23423");
          window.location.href = `https://dev.ungraindanslaboite.com/product/${product?.product_id}`;
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
      <div className={styles.col9}>{product?.inventory_quantity}</div>
      <div className={styles.col10}>
        <span
          onClick={() => {
            navigate(`/edit-product/${product?.product_id}`);
          }}
        >
          {ICONS.pen}
        </span>
        <span onClick={deleteProductHandler}>{ICONS.redTrash}</span>
      </div>
    </div>
  );
};

export default AdminProductRow;
