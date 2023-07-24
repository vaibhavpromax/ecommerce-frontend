import React, { useEffect, useState } from "react";
import styles from "./Address.module.scss";
import Button from "../../../../components/Button/Button";
import { ICONS } from "../../../../icons";
import useProfileSettings from "../../../../apis/useSettings";
import AddAddressModal from "./components/AddAddressModal/AddAddressModal";
import useAddress from "../../../../apis/useAddresss";
const Address = () => {
  const {
    fetchAddresses,
    getAddressLoading,
    deleteAddress,
    delAddressLoading,
    updateAddLoading,
    updateAddress,
  } = useAddress();
  const [addresses, setAddresses] = useState(null);
  const [addModal, setAddModal] = useState(false);

  const onAddModalClose = () => {
    setAddModal(false);
  };

  const getAddress = async () => {
    await fetchAddresses((data) => setAddresses(data.data));
  };

  const deleteAddressHandler = (id) => {
    deleteAddress(id, () => {
      getAddress();
    });
  };

  const markAsDefaultHandler = (id) => {
    updateAddress({ is_primary: true, address_id: id }, () => {
      getAddress();
    });
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className={styles.address}>
      <div className={styles.header}>
        Your addresses
        <Button onClick={() => setAddModal(true)} theme="WHITE">
          {ICONS.plus} Add new address
        </Button>
      </div>

      <div className={styles.addresslist}>
        {!getAddressLoading ? (
          <>
            {addresses ? (
              <>
                {addresses?.map((add, index) => {
                  return (
                    <div
                      className={` ${add?.is_primary && styles.defadd}  ${
                        styles.addresscard
                      }`}
                    >
                      <h5>
                        {add?.is_primary
                          ? "Default Address"
                          : `Address ${index + 1}`}
                      </h5>

                      <div className={styles.addinfo}>
                        <div className={styles.l1}>{add?.name_on_address} </div>
                        <div className={styles.l2}>
                          {add?.name_on_address} {add?.street_no}{" "}
                          {add?.street_name}
                        </div>
                        <div className={styles.l3}></div>
                        <div className={styles.l4}>
                          {add?.city}, {add?.postal_code}
                        </div>
                        <div className={styles.l5}>{add?.country}</div>
                        <div className={styles.l6}>
                          Phone number: 9313100852
                        </div>
                      </div>
                      <div className={styles.iconbtn}>
                        <div className={styles.edit}>{ICONS.pen}</div>
                        <div
                          onClick={() => deleteAddressHandler(add?.address_id)}
                          className={styles.del}
                        >
                          {ICONS.trash}
                        </div>
                        {!add?.is_primary && (
                          <div
                            onClick={() =>
                              markAsDefaultHandler(add?.address_id)
                            }
                            className={styles.def}
                          >
                            Set as default
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <h4>No address found</h4>
              </>
            )}
          </>
        ) : (
          <> loader</>
        )}
      </div>
      <AddAddressModal
        addressModal={addModal}
        onAddModalClose={onAddModalClose}
        fetchAddress={getAddress}
      />
    </div>
  );
};

export default Address;
