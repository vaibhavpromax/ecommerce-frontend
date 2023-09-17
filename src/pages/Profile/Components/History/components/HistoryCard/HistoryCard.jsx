import React, { useState } from "react";
import styles from "./HistoryCard.module.scss";
import Button from "../../../../../../components/Button/Button";
import { ICONS } from "../../../../../../icons";
import { useNavigate } from "react-router-dom";
import { ReactComponent as TeaPacket } from "../../../../../../assets/TeaPacket.svg";
import Tracker from "./Tracker";
import RateProductModal from "../RateProductModal/RateProductModal";
import moment from "moment";

const HistoryCard = ({ order }) => {
  const [ratingModal, setRatingModal] = useState(false);
  const [product_id, setProduct_id] = useState("");
  const closeRatingModal = () => {
    setRatingModal(false);
  };
  const navigate = useNavigate();
  return (
    <div className={styles.historyCard}>
      <div className={styles.upper}>
        <div className={styles.c1}>
          <h4>Order placed</h4>
          <h5>
            {moment(new Date(order?.order_placed_date)).format("DD MMM, YYYY")}{" "}
          </h5>
        </div>
        <div className={styles.c2}>
          <h4>Total</h4>
          <h5>$ {order?.final_amount}</h5>
        </div>
        <div className={styles.c3}>
          <h4>Ship to</h4>
          <h5>${order?.Address[0]?.name_on_address}</h5>
        </div>
        <div className={styles.c4}>
          <h4>Order ID</h4>
          <h5>#{order?.order_id?.substring(0, 4)}</h5>
        </div>{" "}
        <div className={styles.c5}>
          <h4>Status</h4>
          <h5>
            {order?.order_status},
            {moment(new Date(order?.order_placed_date)).format("MMM, DD ")}
          </h5>
        </div>{" "}
        <div className={styles.ver}></div>
        <div className={styles.c6}>
          <h5>Download Invoice</h5>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.itemWrapper}>
          {order?.OrderItems?.map((item) => {
            return (
              <div className={styles.item}>
                <div className={styles.s1}>
                  <img
                    width="220px"
                    src={item?.Product?.Images[0]?.image_url}
                    alt="Product "
                  />
                </div>
                <div className={styles.s2}>
                  <h4
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/product/${item?.Product?.product_id}`);
                    }}
                  >
                    {item?.Product?.name}
                  </h4>
                  <div className={styles.desc}>
                    <div className={styles.a1}>
                      Pack of {item?.Product?.product_weight}gms
                    </div>
                    <div className={styles.smallvr}></div>
                    <div className={styles.a1}>
                      Box size {item?.Product?.product_height} X{" "}
                      {item?.Product?.product_width} cm
                    </div>
                    <div className={styles.smallvr}></div>
                    <div className={styles.a1}>
                      {item?.Product?.beans_type} From{" "}
                      {item?.Product?.product_origin}
                    </div>
                  </div>
                  <div className={styles.prodesc}>
                    {item?.Product?.description}
                  </div>
                  <div className={styles.otherinfo}>
                    <div className={styles.ret}>
                      Return or replacement: Eligible through June 10
                    </div>
                  </div>

                  <div className={styles.btnrow}>
                    <Button>{ICONS.recycle}Order Again</Button>
                    <Button
                      onClick={() => {
                        setProduct_id(order?.Product?.product_id);
                        setRatingModal(true);
                      }}
                      theme="WHITE"
                    >
                      {ICONS.star}Rate product
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.s3}></div>
        <div className={styles.s4}>
          <Tracker />
        </div>
      </div>
      <RateProductModal
        product_id={product_id}
        order_id={order?.order_id}
        closeRatingModal={closeRatingModal}
        ratingModal={ratingModal}
      />
    </div>
  );
};

export default HistoryCard;
