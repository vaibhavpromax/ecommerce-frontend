import React, { useState } from "react";
import styles from "./AddAddressModal.module.scss";
import useAddress from "../../../../apis/useAddresss";
import Modal from "../../../../components/Modal/Modal";
import TextBox from "../../../../components/TextBox/TextBox";
import Button from "../../../../components/Button/Button";

const AddAddressModal = ({ fetchAddress, onAddModalClose, addressModal }) => {
  const { addUserAddress, addAddressLoading } = useAddress();
  const [adddata, setAdddata] = useState({
    street_no: "",
    street_name: "",
    postal_code: "",
    city: "",
    country: "",
    name_on_address: "",
    address_name: "",
    address_phone_no: "",
  });
  const addAddressHandler = () => {
    addUserAddress(adddata, () => {
      fetchAddress();
      onAddModalClose();
    });
  };

  return (
    <Modal
      isModal={addressModal}
      onClose={onAddModalClose}
      className={styles.addAddress}
    >
      <h3>Add address</h3>
      <div className={styles.fields}>
        <TextBox
          value={adddata.street_no}
          setValue={(e) => setAdddata({ ...adddata, street_no: e })}
          className={styles.inputfield}
          placeholder="Flat/Street/Block"
        />
        <TextBox
          value={adddata.address_name}
          setValue={(e) => setAdddata({ ...adddata, address_name: e })}
          className={styles.inputfield}
          placeholder="Home/Work/Office"
        />
        <TextBox
          value={adddata.street_name}
          setValue={(e) => setAdddata({ ...adddata, street_name: e })}
          className={styles.inputfield}
          placeholder="Address line 2"
        />
        <TextBox
          value={adddata.city}
          setValue={(e) => setAdddata({ ...adddata, city: e })}
          className={styles.inputfield}
          placeholder="City"
        />
        <TextBox
          value={adddata.country}
          setValue={(e) => setAdddata({ ...adddata, country: e })}
          className={styles.inputfield}
          placeholder="Country"
        />
        <TextBox
          value={adddata.postal_code}
          setValue={(e) => setAdddata({ ...adddata, postal_code: e })}
          className={styles.inputfield}
          placeholder="ZIP code"
        />
        <TextBox
          value={adddata.name_on_address}
          setValue={(e) => setAdddata({ ...adddata, name_on_address: e })}
          className={styles.inputfield}
          placeholder="Name on address"
        />
        <TextBox
          value={adddata.address_phone_no}
          setValue={(e) => setAdddata({ ...adddata, address_phone_no: e })}
          className={styles.inputfield}
          placeholder="Contact number for this address"
        />
      </div>

      <Button onClick={addAddressHandler} loading={addAddressLoading}>
        Save
      </Button>
    </Modal>
  );
};

export default AddAddressModal;
