import React, { useEffect, useState } from "react";
import styles from "./OrderDetails.module.scss";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import ProductOrderRow from "./components/ProductOrderRow/ProductOrderRow";
import useOrder from "../../../apis/useOrder";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";

const fakeData = {
  order_id: "ddb7f129-78c3-4747-bb6d-ca728bed4fce",
  user_id: "72db5f3e-3f7a-4871-b573-60134b72b0aa",
  stripe_payment_id: "pi_3NrHRdLWBve0rdyn1jMVGric",
  address_id: "0f157c9b-dfd2-4625-8838-5aa091155434",
  total_price: "1550",
  total_discount: null,
  final_amount: null,
  order_status: "PLACED",
  payment_status: "PAID",
  processing_date: null,
  shipped_date: null,
  delivered_date: null,
  order_placed_date: "2023-09-17T09:39:13.000Z",
  shipping_price: "20",
  createdAt: "2023-09-17T09:39:13.000Z",
  updatedAt: "2023-09-17T09:39:15.000Z",
  User: {
    first_name: "vaibhav",
    last_name: "singh",
    profile_pic_url:
      "https://ecommerce-images.s3.ap-south-1.amazonaws.com/user.png",
    email: "singhvaibhav558hr@gmail.com",
    password: "$2a$12$IdQei7WI3htBbavVMuWcYeo7c7asjFf1JnpozzZi.UAAXJvVK3V3m",
    user_id: "72db5f3e-3f7a-4871-b573-60134b72b0aa",
    last_ordered: "2023-09-17T09:50:44.000Z",
    username: "testuser",
    phone_no: "3479287408",
    stripe_customer_id: "cus_Oeac9Ag55akm85",
    referral_id: null,
    createdAt: "2023-09-17T09:37:27.000Z",
    updatedAt: "2023-09-17T09:50:44.000Z",
  },
  OrderItems: [
    {
      order_item_id: "10c69ec2-9c2b-4541-afa6-b655467772c0",
      product_id: "71b4b085-a2cc-4382-8417-52e22d11a7bf",
      item_quantity: 1,
      order_id: "ddb7f129-78c3-4747-bb6d-ca728bed4fce",
      createdAt: "2023-09-17T09:39:13.000Z",
      updatedAt: "2023-09-17T09:39:13.000Z",
      Product: {
        name: "Test product one ",
        product_id: "71b4b085-a2cc-4382-8417-52e22d11a7bf",
        cost_price: "1000",
        selling_price: "900",
        product_type: "BEANS",
        beans_type: "ARABICA",
        product_length: "23",
        product_width: "4",
        product_height: "34",
        product_weight: "32",
        product_origin: "AFRICA",
        inventory_quantity: 31,
        description: "This is a test product ",
        stripe_product_id: null,
        is_discount_percentage: true,
        is_discount_present: true,
        discount_value: "10",
        discount_begin_date: "2023-07-28T15:09:07.000Z",
        discount_end_date: "2023-07-28T15:09:07.000Z",
        stripe_price_id: "price_1NrH3aLWBve0rdyna7krUaRd",
        quantity_purchased: 1,
        createdAt: "2023-09-17T09:14:22.000Z",
        updatedAt: "2023-09-17T09:50:44.000Z",
        Images: [
          {
            image_id: "2b6e4b8b-57a2-4c2d-8a80-099174418d5f",
            product_id: "71b4b085-a2cc-4382-8417-52e22d11a7bf",
            is_primary: true,
            image_url:
              "https://ecommerce-images.s3.amazonaws.com/1694941954278",
            createdAt: "2023-09-17T09:14:22.000Z",
            updatedAt: "2023-09-17T09:14:22.000Z",
            user_id: null,
          },
          {
            image_id: "52b0bc8d-2999-4c17-acd6-d2c083c611d8",
            product_id: "71b4b085-a2cc-4382-8417-52e22d11a7bf",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942038601",
            createdAt: "2023-09-17T09:14:22.000Z",
            updatedAt: "2023-09-17T09:14:22.000Z",
            user_id: null,
          },
          {
            image_id: "6aed9d70-b085-4d78-8865-6989b2688602",
            product_id: "71b4b085-a2cc-4382-8417-52e22d11a7bf",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694941962174",
            createdAt: "2023-09-17T09:14:22.000Z",
            updatedAt: "2023-09-17T09:14:22.000Z",
            user_id: null,
          },
          {
            image_id: "a94fb725-4467-42e1-8c0b-875706edb8c4",
            product_id: "71b4b085-a2cc-4382-8417-52e22d11a7bf",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942031901",
            createdAt: "2023-09-17T09:14:22.000Z",
            updatedAt: "2023-09-17T09:14:22.000Z",
            user_id: null,
          },
        ],
      },
    },
    {
      order_item_id: "4fd6fd71-db8d-48ab-b0c1-6278c2585857",
      product_id: "57c1c4bb-fc36-4a67-be38-32ff228e5a3c",
      item_quantity: 1,
      order_id: "ddb7f129-78c3-4747-bb6d-ca728bed4fce",
      createdAt: "2023-09-17T09:39:13.000Z",
      updatedAt: "2023-09-17T09:39:13.000Z",
      Product: {
        name: "Test product three",
        product_id: "57c1c4bb-fc36-4a67-be38-32ff228e5a3c",
        cost_price: "500",
        selling_price: "250",
        product_type: "POWDER",
        beans_type: "ARABICA",
        product_length: "431",
        product_width: "34",
        product_height: "23",
        product_weight: "",
        product_origin: "MIDDLE",
        inventory_quantity: 31,
        description: "This is third product",
        stripe_product_id: null,
        is_discount_percentage: true,
        is_discount_present: true,
        discount_value: "50",
        discount_begin_date: "2023-07-28T15:09:07.000Z",
        discount_end_date: "2023-07-28T15:09:07.000Z",
        stripe_price_id: "price_1NrH7MLWBve0rdynfCbLa48w",
        quantity_purchased: 1,
        createdAt: "2023-09-17T09:18:16.000Z",
        updatedAt: "2023-09-17T09:50:44.000Z",
        Images: [
          {
            image_id: "31ec60f5-a1da-4dd7-9b47-23b99945fde8",
            product_id: "57c1c4bb-fc36-4a67-be38-32ff228e5a3c",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942231519",
            createdAt: "2023-09-17T09:18:16.000Z",
            updatedAt: "2023-09-17T09:18:16.000Z",
            user_id: null,
          },
          {
            image_id: "506c7e5d-7645-4967-94cf-c01f981f4894",
            product_id: "57c1c4bb-fc36-4a67-be38-32ff228e5a3c",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942279210",
            createdAt: "2023-09-17T09:18:16.000Z",
            updatedAt: "2023-09-17T09:18:16.000Z",
            user_id: null,
          },
          {
            image_id: "65553833-c2d6-4335-a0a4-dbbefa01bcb5",
            product_id: "57c1c4bb-fc36-4a67-be38-32ff228e5a3c",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942285505",
            createdAt: "2023-09-17T09:18:16.000Z",
            updatedAt: "2023-09-17T09:18:16.000Z",
            user_id: null,
          },
          {
            image_id: "c6dcab9a-4959-4031-ae61-66315405b76f",
            product_id: "57c1c4bb-fc36-4a67-be38-32ff228e5a3c",
            is_primary: true,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942197469",
            createdAt: "2023-09-17T09:18:16.000Z",
            updatedAt: "2023-09-17T09:18:16.000Z",
            user_id: null,
          },
        ],
      },
    },
    {
      order_item_id: "a702b778-eab4-495b-919b-dd68eebef735",
      product_id: "c5c1c61e-fbbb-4080-8c69-fd59a7adc33b",
      item_quantity: 1,
      order_id: "ddb7f129-78c3-4747-bb6d-ca728bed4fce",
      createdAt: "2023-09-17T09:39:13.000Z",
      updatedAt: "2023-09-17T09:39:13.000Z",
      Product: {
        name: "Test product two",
        product_id: "c5c1c61e-fbbb-4080-8c69-fd59a7adc33b",
        cost_price: "800",
        selling_price: "400",
        product_type: "TEA",
        beans_type: "ARABICA",
        product_length: "34",
        product_width: "34",
        product_height: "2",
        product_weight: "3",
        product_origin: "AFRICA",
        inventory_quantity: 22,
        description: "Test product two descriptoin",
        stripe_product_id: null,
        is_discount_percentage: true,
        is_discount_present: true,
        discount_value: "50",
        discount_begin_date: "2023-07-28T15:09:07.000Z",
        discount_end_date: "2023-07-28T15:09:07.000Z",
        stripe_price_id: "price_1NrH56LWBve0rdyn2GaocH7T",
        quantity_purchased: 1,
        createdAt: "2023-09-17T09:15:55.000Z",
        updatedAt: "2023-09-17T09:50:44.000Z",
        Images: [
          {
            image_id: "04062d78-370b-48b2-ab30-9f2b49651dc8",
            product_id: "c5c1c61e-fbbb-4080-8c69-fd59a7adc33b",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942142910",
            createdAt: "2023-09-17T09:15:55.000Z",
            updatedAt: "2023-09-17T09:15:55.000Z",
            user_id: null,
          },
          {
            image_id: "495af1ab-bedc-4e21-8e07-fd07ac84f0a1",
            product_id: "c5c1c61e-fbbb-4080-8c69-fd59a7adc33b",
            is_primary: true,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942100726",
            createdAt: "2023-09-17T09:15:55.000Z",
            updatedAt: "2023-09-17T09:15:55.000Z",
            user_id: null,
          },
          {
            image_id: "502669ff-fb30-4f27-981b-c6a2c818700c",
            product_id: "c5c1c61e-fbbb-4080-8c69-fd59a7adc33b",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942124493",
            createdAt: "2023-09-17T09:15:55.000Z",
            updatedAt: "2023-09-17T09:15:55.000Z",
            user_id: null,
          },
          {
            image_id: "a17f5fa1-e7bd-4db0-b11a-cf8cf57e3101",
            product_id: "c5c1c61e-fbbb-4080-8c69-fd59a7adc33b",
            is_primary: false,
            image_url:
              "https://ecommerce-images.s3.ap-south-1.amazonaws.com/1694942118344",
            createdAt: "2023-09-17T09:15:55.000Z",
            updatedAt: "2023-09-17T09:15:55.000Z",
            user_id: null,
          },
        ],
      },
    },
  ],
  Address: {
    address_id: "0f157c9b-dfd2-4625-8838-5aa091155434",
    street_no: "234",
    street_name: "Rover",
    postal_code: "238923",
    city: "Delhi",
    is_primary: true,
    name_on_address: "Vaibhav",
    address_phone_no: "813740923",
    address_name: "Home",
    country: "India",
    user_id: "72db5f3e-3f7a-4871-b573-60134b72b0aa",
    createdAt: "2023-09-17T09:38:14.000Z",
    updatedAt: "2023-09-17T09:38:14.000Z",
  },
};

const STATUSES = [
  { label: "Order Placed", value: "PLACED", date: "", rank: 1 },
  { label: "Processing", value: "PROCESSING", date: "", rank: 2 },
  { label: "Shipped", value: "SHIPPED", date: "", rank: 3 },
  { label: "Delivered", value: "DELIVERED", date: "", rank: 4 },
];

const OrderDetails = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState(STATUSES);
  const [showCalendar, setShowCalendar] = useState(false);
  const [updateDate, setUpdateDate] = useState("");
  const { getSingleOrderDetails, editOrderInfo } = useOrder();
  const { id } = useParams();
  const [order, setOrder] = useState(fakeData);
  const fetchOrderDetails = async () => {
    await getSingleOrderDetails(id, (res) => {
      setOrder(res?.data);
      makeStatusArray(res?.data);
      // STATUSES.map((s, i) => {
      //   if (s.value == res?.data?.order_status) setCurrentStep(i);
      // });
    });
  };

  const makeStatusArray = (order) => {
    const newArr = STATUSES.map((item, i) => {
      if (item?.value == order?.order_status) setCurrentStep(i);
      if (item.value == "PLACED")
        return {
          label: "Order Placed",
          date: order?.order_placed_date,
          dbLabel: "order_placed_date",
        };
      if (item.value == "PROCESSING")
        return {
          label: "Processing",
          date: order?.processing_date,
          dbLabel: "processing_date",
        };
      if (item.value == "SHIPPED")
        return {
          label: "Shipped",
          date: order?.shipped_date,
          dbLabel: "shipped_date",
        };
      if (item.value == "DELIVERED")
        return {
          label: "Delivered",
          date: order?.delivered_date,
          dbLabel: "delivered_date",
        };
    });

    setStatus(newArr);
  };

  useEffect(() => {
    // fetchOrderDetails();
    makeStatusArray(order);
  }, []);
  console.log(order);
  console.log(updateDate);

  const handleDateChange = async (e) => {
    let flag = true;
    status.map(async (item) => {
      if (!item.date && flag) {
        const field = item?.dbLabel;
        await editOrderInfo(order?.order_id, { [field]: e }, () => {
          fetchOrderDetails();
          flag = false;
          toast.success("Order Info Updated", {
            style: {
              backgroundColor: "#F7F6F5",
              fontFamily: "Jost",
            },
          });
          setShowCalendar(false);
        });
        return;
      }
    });
  };

  return (
    <div className={styles.orderdetails}>
      <Toaster />
      <div className={styles.top}>
        <div className={styles.left}>
          <span className={styles.yellow}>Orders</span>
          {">>"} Order #{order?.order_id?.substring(0, 4)}
        </div>
        <div className={styles.right}>
          <Button>{ICONS.pen} Edit order</Button>
          {ICONS.bell}
          {/* 
          <div className={styles.profile}>
          <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
          />
          </div>
        */}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.btleft}>
          <div className={styles.btleftTop}>
            <div className={styles.btleftHeader}>
              Order #{order?.order_id?.substring(0, 4)}
            </div>
            <div className={styles.btleftBottom}>
              <div className={styles.proList}>
                {order?.OrderItems?.map((it, key) => {
                  return <ProductOrderRow product={it} />;
                })}
              </div>
              <div className={styles.hrLine}></div>
              <div className={styles.orderTotal}>
                <div className={styles.orderLeft}>
                  <div className={styles.orderLeftRowHead}>
                    Order comments: {ICONS.pen}
                  </div>
                  <div className={styles.orderLeftRowContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus aliquam eaque libero provident officiis.
                  </div>
                </div>
                <div className={styles.orderRight}>
                  <div className={styles.orderRightRow}>
                    <div className={styles.orderRightRowLeft}>Subtotal:</div>
                    <div
                      style={{ fontWeight: "600" }}
                      className={styles.orderRightRowRight}
                    >
                      ${order?.total_price}
                    </div>
                  </div>
                  <div className={styles.orderRightRow}>
                    <div className={styles.orderRightRowLeft}>Shipping:</div>
                    <div className={styles.orderRightRowRight}>
                      ${order?.shipping_price}
                    </div>
                  </div>
                  <div className={styles.orderRightRow}>
                    <div className={styles.orderRightRowLeft}>Total:</div>
                    <div
                      style={{ fontSize: "18px", fontWeight: "600" }}
                      className={styles.orderRightRowRight}
                    >
                      $
                      {parseFloat(order?.total_price) +
                        parseFloat(order?.shipping_price)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orderHistory}>
            <div className={styles.btBottomHeader}>Order history:</div>

            <div className={styles.progressbarContainer}>
              <div className={styles.progressBar}>
                {status.map((s, i) => (
                  <div
                    className={`${styles.stepWrapper} ${
                      currentStep >= i ? styles.visitedStep : ""
                    }`}
                  >
                    <div className={styles.stepCircle}>
                      <span>{currentStep >= i && ICONS.tick}</span>
                    </div>
                    {i !== 0 && (
                      <div
                        className={`${styles.stepLine}
                   ${currentStep >= i ? styles.filled : ""}
                      `}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.singleLabelContainer}>
                {status.map((s, i) => {
                  return (
                    <div
                      className={`${styles.labelText} ${
                        currentStep > i ? styles.visited : ""
                      } ${currentStep === i ? styles.current : ""}`}
                    >
                      <div className={styles.wrapper}>
                        {s.label}
                        <div className={styles.date}>
                          {s.date ? (
                            moment(s.date).format("DD MMM, YYYY")
                          ) : (
                            <>
                              {!showCalendar && (
                                <div
                                  onClick={() => {
                                    setShowCalendar(true);
                                  }}
                                  className={styles.calendarPlaceholder}
                                >
                                  {ICONS.calendar} Insert date
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {showCalendar && (
                  <Calendar
                    onChange={(e) => {
                      handleDateChange(e);
                    }}
                    value={updateDate}
                    // defaultActiveStartDate={true}
                    className={styles.calendar}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btright}>
          <div className={styles.section}>
            <div className={styles.sectionheader}>Customer {ICONS.pen}</div>
            <div className={styles.sectionContent}>
              <div className={styles.secLeft}>
                <div className={styles.profile}>
                  <img src={order?.User?.profile_pic_url3} alt="" />
                </div>
              </div>
              <div className={styles.secRight}>
                <div className={styles.name}>
                  {order?.User?.first_name + " " + order?.User?.last_name}
                </div>
                <div className={styles.secContent}>{order?.User?.email}</div>

                <div className={styles.secContent}>
                  Total orders: {order?.User?.number_of_orders}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.hrRow}></div>
          <div className={styles.section}>
            <div className={styles.sectionheader}>
              Delivery Details {ICONS.pen}
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Delivery Type:</div>
              <div className={styles.sectionDescRight}>Standard</div>
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Address:</div>
              <div className={styles.sectionDescRight}>
                {order?.Address?.street_no +
                  " " +
                  order?.Address?.street_name +
                  " " +
                  order?.Address?.city +
                  " " +
                  order?.Address?.country +
                  " " +
                  order?.Address?.postal_code}
              </div>
            </div>

            {/* 
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Tracking number:</div>
              {" "}
              <div className={`${styles.yellow}  ${styles.sectionDescRight}`}>
                #12783456 {" "}
              </div>
              {" "}
            </div>
            */}
          </div>

          <div className={styles.hrRow}></div>
          <div className={styles.section}>
            <div className={styles.sectionheader}>Payment info {ICONS.pen}</div>

            <div
              onClick={() => {
                window.location.href = `https://dashboard.stripe.com/test/payments/${order?.stripe_payment_id}`;
              }}
              className={styles.yellow}
            >
              {ICONS.arrowRight}Go to stripe Dashboard
            </div>
            {/* <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Payment method:</div>
              <div className={styles.sectionDescRight}>
                41 Quai des Belges, Martigues, Provence-Alpes-Côte d'Azur, 13500
              </div>
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Transaction number:</div>
              <div className={`${styles.yellow}  ${styles.sectionDescRight}`}>
                9712783456
              </div>
            </div>
            <div className={styles.yellow}>
              {ICONS.download} Download invoice
            </div>
            
          */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
