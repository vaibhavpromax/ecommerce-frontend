import React, { useEffect, useState } from "react";
import styles from "./EditOrderPage.module.scss";
import { ICONS } from "../../../icons";
import useOrder from "../../../apis/useOrder";
import Button from "../../../components/Button/Button";
import TextBox from "../../../components/TextBox/TextBox";
import { useParams } from "react-router-dom";
import useCustomer from "../../../apis/useCustomer";
import useAddress from "../../../apis/useAddresss";
import Skeleton from "../../../components/Skeleton/Skeleton";
import toast, { Toaster } from "react-hot-toast";
const EditOrderPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const { getSingleOrderDetails, getSingleOrderLoading } = useOrder();
  const { editUser, updateCustomerLoading } = useCustomer();
  const { updateAddress, updateAddLoading } = useAddress();
  const [userInfo, setUserInfo] = useState({});
  const [addressInfo, setAddressInfo] = useState({});
  const { id } = useParams();

  const fetchOrderInfo = async () => {
    await getSingleOrderDetails(id, (data) => {
      setOrderDetails(data?.data);
      setUserInfo(data?.data?.User);
      setAddressInfo(data?.data?.Address);
    });
  };

  const onSaveHandler = async () => {
    if (Object.keys(userInfo).length != 0) {
      await editUser(userInfo?.user_id, userInfo, () => {
        fetchOrderInfo();
      });
    }

    if (Object.keys(addressInfo).length != 0) {
      await updateAddress(addressInfo?.address_id, addressInfo, () => {
        fetchOrderInfo();
      });
    }
    toast.success("Order Info Updated", {
      style: {
        backgroundColor: "#F7F6F5",
        fontFamily: "Jost",
      },
    });
  };

  useEffect(() => {
    fetchOrderInfo();
  }, []);
  console.log(userInfo, addressInfo);
  return (
    <div className={styles.editOrderPage}>
      <Toaster />
      <div className={styles.top}>
        <div className={styles.left}>
          Orders{" >> "}Order{orderDetails?.order_id?.split("-")[0]} {" >> "}
          Edit order
        </div>
        <div className={styles.right}>{ICONS.bell}</div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          Order #{orderDetails?.order_id?.split("-")[0]}
          <span
            onClick={() => {
              // navigate("/order/23423");
              window.location.href = `https://admin.ungraindanslaboite.com/order/${orderDetails?.order_id}`;
            }}
            style={{
              cursor: "pointer",
              color: "#B06934",
              fontSize: "18px",
              marginLeft: "10px",
              textDecorationLine: "underline",
            }}
          >
            view order
          </span>
        </div>
        <Button onClick={onSaveHandler} className={styles.saveBtn}>
          Save changes
        </Button>
      </div>

      <div className={styles.editWrapper}>
        {!getSingleOrderLoading ? (
          <div className={styles.editSection}>
            <div className={styles.section}>
              <div className={styles.left}>Customer Info</div>
              <div className={styles.right}>
                <TextBox
                  value={userInfo?.first_name}
                  setValue={(e) => setUserInfo({ ...userInfo, first_name: e })}
                  label="First Name"
                  className={styles.textbox}
                />
                <TextBox
                  className={styles.textbox}
                  value={userInfo?.last_name}
                  setValue={(e) => {
                    setUserInfo({ ...userInfo, last_name: e });
                  }}
                  label="Last Name "
                />
                <TextBox
                  className={styles.textbox}
                  value={userInfo?.email}
                  setValue={(e) => setUserInfo({ ...userInfo, email: e })}
                  label="Email"
                />
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.left}>Address Info</div>
              <div className={styles.right}>
                <TextBox
                  className={styles.textbox}
                  value={addressInfo?.street_no}
                  setValue={(e) =>
                    setAddressInfo({ ...addressInfo, street_no: e })
                  }
                  label="Street Number"
                />
                <TextBox
                  className={styles.textbox}
                  value={addressInfo?.street_name}
                  setValue={(e) =>
                    setAddressInfo({ ...addressInfo, street_name: e })
                  }
                  label="Street Name"
                />
                <TextBox
                  className={styles.textbox}
                  value={addressInfo?.postal_code}
                  setValue={(e) =>
                    setAddressInfo({ ...addressInfo, postal_code: e })
                  }
                  label="Postal Code"
                />
                <TextBox
                  className={styles.textbox}
                  value={addressInfo?.city}
                  setValue={(e) => setAddressInfo({ ...addressInfo, city: e })}
                  label="City"
                />
                <TextBox
                  className={styles.textbox}
                  value={addressInfo?.country}
                  setValue={(e) =>
                    setAddressInfo({ ...addressInfo, country: e })
                  }
                  label="Country"
                />
                <TextBox
                  className={styles.textbox}
                  value={addressInfo?.address_phone_no}
                  label="Phone number for Address"
                  setValue={(e) =>
                    setAddressInfo({ ...addressInfo, address_phone_no: e })
                  }
                />
                <TextBox
                  className={styles.textbox}
                  value={addressInfo?.name_on_address}
                  label="Name on Address"
                  setValue={(e) =>
                    setAddressInfo({ ...addressInfo, name_on_address: e })
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.loader}>
            <Skeleton className={styles.first} />

            <Skeleton className={styles.second} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditOrderPage;
