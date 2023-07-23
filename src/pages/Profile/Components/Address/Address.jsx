import React from "react";
import styles from "./Address.module.scss";
import Button from "../../../../components/Button/Button";
import { ICONS } from "../../../../icons";
const Address = () => {
  return (
    <div className={styles.address}>
      <div className={styles.header}>
        Your addresses
        <Button theme="WHITE">{ICONS.plus} Add new address</Button>
      </div>

      <div className={styles.addresslist}>
        <div className={`${styles.defadd} ${styles.addresscard}`}>
          <h5>Default address</h5>
          <div className={styles.addinfo}>
            <div className={styles.l1}>Vaibhav </div>
            <div className={styles.l2}>
              Parth Chandravadiya Block no. D-82, Alap Heritage, Satya Sai
              Hospital Road
            </div>
            <div className={styles.l3}></div>
            <div className={styles.l4}>RAJKOT, GUJARAT 360005</div>
            <div className={styles.l5}>India</div>
            <div className={styles.l6}>Phone number: 9313100852</div>
          </div>
          <div className={styles.iconbtn}>
            <div className={styles.edit}>{ICONS.pen}</div>
            <div className={styles.del}>{ICONS.trash}</div>
          </div>
        </div>
        <div className={styles.addresscard}>
          <h5>Address 2</h5>
          <div className={styles.addinfo}>
            <div className={styles.l1}>Vaibhav </div>
            <div className={styles.l2}>
              Parth Chandravadiya Block no. D-82, Alap Heritage, Satya Sai
              Hospital Road
            </div>
            <div className={styles.l3}></div>
            <div className={styles.l4}>RAJKOT, GUJARAT 360005</div>
            <div className={styles.l5}>India</div>
            <div className={styles.l6}>Phone number: 9313100852</div>
          </div>
          <div className={styles.iconbtn}>
            <div className={styles.edit}>{ICONS.pen}</div>
            <div className={styles.del}>{ICONS.trash}</div>
            <div className={styles.def}> Set as default</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
