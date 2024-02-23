import React from "react";
import styles from "./QuantityPricingShipping.module.scss";
import TextBox from "../../../../../components/TextBox/TextBox";
import toast, { Toaster } from "react-hot-toast";

const QuantityPricingShipping = ({ productInfo, setProductInfo }) => {
  return (
    <div className={styles.qps}>
      <div className={styles.section}>
        <div className={styles.left}>Quantity & sizes</div>
        <div className={styles.right}>
          <div className={styles.unitInput}>
            <div className={styles.label}>Weight</div>
            <div className={styles.inputWrapper}>
              <input
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    product_weight: e.target.value,
                  })
                }
                type="text"
              />
              <div className={styles.unit}>Gms</div>
            </div>
          </div>
          <div className={styles.unitInput}>
            <div className={styles.label}>Length</div>
            <div className={styles.inputWrapper}>
              <input
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    product_length: e.target.value,
                  })
                }
                type="text"
              />
              <div className={styles.unit}>cm</div>
            </div>
          </div>
          <div className={styles.unitInput}>
            <div className={styles.label}>Width</div>
            <div className={styles.inputWrapper}>
              <input
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    product_width: e.target.value,
                  })
                }
                type="text"
              />
              <div className={styles.unit}>cm</div>
            </div>
          </div>
          <div className={styles.unitInput}>
            <div className={styles.label}>Height</div>
            <div className={styles.inputWrapper}>
              <input
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    product_height: e.target.value,
                  })
                }
                type="text"
              />
              <div className={styles.unit}>cm</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.left}>Pricing</div>
        <div className={styles.right}>
          <TextBox
            value={productInfo.cost_price}
            setValue={(e) => setProductInfo({ ...productInfo, cost_price: e })}
            label="Base price"
          />
          <TextBox
            value={productInfo.discount_value}
            setValue={(e) => {
              const selling_price =
                parseFloat(productInfo.cost_price) -
                (e * parseFloat(productInfo.cost_price)) / 100;
              console.log(selling_price);

              setProductInfo({
                ...productInfo,
                discount_value: e,
                selling_price: selling_price,
              });
            }}
            label="Discount (in %)"
          />
          <TextBox
            value={productInfo.selling_price}
            // setValue={(e) =>
            //   setProductInfo({ ...productInfo, selling_price: e })
            // }
            label="Selling price (in €)"
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.left}>Inventory and delivery</div>
        <div className={styles.right}>
          <TextBox
            value={productInfo.inventory_quantity}
            setValue={(e) =>
              setProductInfo({ ...productInfo, inventory_quantity: e })
            }
            label="Inventory quantity"
          />
          <TextBox
            value={productInfo.shipping_price}
            setValue={(e) =>
              setProductInfo({ ...productInfo, shipping_price: e })
            }
            label="Shipping Price (in €)"
          />
        </div>
      </div>
    </div>
  );
};

export default QuantityPricingShipping;
