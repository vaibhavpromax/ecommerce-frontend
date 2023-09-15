import React, { useEffect, useRef, useState } from "react";
import styles from "./CustomerManagement.module.scss";
import { ICONS } from "../../../icons";
import { TabNavSlider } from "../../../components/TabNavSlider/TabNavSlider";
import Checkbox from "../../../components/Checkbox/Checkbox";
import TextBox from "../../../components/TextBox/TextBox";
import CustomerRow from "./components/CustomerRow/CustomerRow";
import useCustomer from "../../../apis/useCustomer";
import { CSVLink } from "react-csv";

const options = [
  { label: `All orders`, value: "all", pillValue: 345, pillColor: "#1E6B96" },
  { label: "New", value: "new", pillValue: 45, pillColor: "#771E96" },
];

const CustomerManagement = () => {
  const [tabOption, setTabOption] = useState(options[0].value);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const [customers, setCustomers] = useState([]);
  const containerRef = useRef(null);
  const {
    getCustomers,
    getCustomersLoading,
    deleteCustomers,
    deleteCustomerLoading,
  } = useCustomer();
  const pageSize = 10; // Adjust this to match your server's page size

  const fetchCustomers = async () => {
    await getCustomers({ currentPage: 1, pageSize: 10 }, (res) => {
      setCustomers((prev) => [...prev, res?.data?.item]);
      setCurrentPage(res?.data?.currentPage);
      setTotalPages(res?.data?.totalPages);
    });
  };
  useEffect(() => {
    fetchCustomers();
  }, [currentPage, pageSize]);

  const deleteCustomersHandler = async () => {
    await deleteCustomers({id_arr:selectedIds}, (res) => {
      fetchCustomers();
    });
  };

  const selectAllHandler = () => {
    if (selectedIds.length > 0) {
      setSelectedIds([]);
    } else {
      const idArr = customers?.map((customer) => {
        return customer?.user_id;
      });
      setSelectedIds(idArr);
    }
  };

  return (
    <div className={styles.customerManagement}>
      {" "}
      <div className={styles.top}>
        <div className={styles.left}>Customers</div>
        <div className={styles.right}>
          {ICONS.bell}
          <div className={styles.profile}>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.searchbox}>
          <TextBox placeholder="Search here.." width="267px" />
          {ICONS.magnify}
        </div>

        <CSVLink
          style={{ textDecoration: "none" }}
          data={customers}
          className={styles.btn}
          theme="WHITE"
        >
          {ICONS.download} Export all
        </CSVLink>
      </div>
      <div className={styles.customerList}>
        <div className={styles.listHeader}>
          <div className={styles.col1}>
            <Checkbox
              checked={selectedIds.length == customers.length}
              onChange={() => {
                selectAllHandler();
              }}
              shadowed={true}
            />
          </div>
          <div className={styles.col2}>FIRST NAME</div>
          <div className={styles.col3}>LAST NAME</div>
          <div className={styles.col4}>CUSTOMER ID</div>
          <div className={styles.col5}>LAST PURCHASE</div>
          <div className={styles.col6}>EMAIL</div>
          <div className={styles.col7}>PHONE</div>
          <div className={styles.col8}>ACTIONS</div>
        </div>
        <div ref={containerRef} className={styles.list}>
          {getCustomersLoading ? (
            <>Loading</>
          ) : (
            <>
              {customers.length != 0 && (
                <>
                  {customers?.map((customer, key) => {
                    return (
                      <CustomerRow
                        fetchCustomers={fetchCustomers}
                        selectedIds={selectedIds}
                        setSelectedIds={setSelectedIds}
                        customer={customer}
                        key={key}
                      />
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
