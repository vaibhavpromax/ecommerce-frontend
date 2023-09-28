import React, { useState } from "react";
import Modal from "../../../../../components/Modal/Modal";
import styles from "./CalendarModal.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useOrder from "../../../../../apis/useOrder";
import toast from "react-hot-toast";
const STATUSES = [
  { label: "Order Placed", value: "PLACED", date: "", rank: 1 },
  { label: "Processing", value: "PROCESSING", date: "", rank: 2 },
  { label: "Shipped", value: "SHIPPED", date: "", rank: 3 },
  { label: "Delivered", value: "DELIVERED", date: "", rank: 4 },
];
const CalendarModal = ({ isModal, onCloseModal, fetchOrderDetails, order }) => {
  const [status, setStatus] = useState(STATUSES);
  const { editOrderInfo } = useOrder();
  const [updateDate, setUpdateDate] = useState("");

  const handleDateChange = async (e) => {
    editOrderInfo(order?.order_id, { [isModal?.dbLabel]: e }, () => {
      onCloseModal();
      fetchOrderDetails();
      toast.success("Order Info Updated", {
        style: {
          backgroundColor: "#F7F6F5",
          fontFamily: "Jost",
        },
      });
    });
  };

  return (
    <Modal isModal={isModal} onClose={onCloseModal}>
      <Calendar
        onChange={(e) => {
          handleDateChange(e);
        }}
        value={updateDate}
        // defaultActiveStartDate={true}
        className={styles.calendar}
      />
    </Modal>
  );
};

export default CalendarModal;
