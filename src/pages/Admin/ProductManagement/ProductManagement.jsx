import React, { useEffect, useState } from "react";
import styles from "./ProductManagement.module.scss";
import { ICONS } from "../../../icons";
import TextBox from "../../../components/TextBox/TextBox";
import { TabNavSlider } from "../../../components/TabNavSlider/TabNavSlider";
import Button from "../../../components/Button/Button";
import Checkbox from "../../../components/Checkbox/Checkbox";
import AdminProductRow from "./components/AdminProductRow/AdminProductRow";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useProduct from "../../../apis/useProduct";

const options = [
  { label: `All orders`, value: "all", pillValue: 345, pillColor: "#1E6B96" },
  { label: "New", value: "new", pillValue: 45, pillColor: "#771E96" },
];

const ProductManagement = () => {
  const [tabOption, setTabOption] = useState(options[0].value);
  const [products, setProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { getProducts, getProductsLoading, deleteProduct } = useProduct();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    await getProducts((res) => {
      setProducts(res?.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProductsHandler = async () => {
    await deleteProduct({ id_arr: selectedIds }, (res) => {
      toast.success("Products Deleted", {
        style: {
          backgroundColor: "#F7F6F5",
          fontFamily: "Jost",
        },
      });
      console.log(res);
      fetchProducts();
    });
  };

  const selectAllHandler = () => {
    if (selectedIds.length > 0) {
      setSelectedIds([]);
    } else {
      const idArr = products?.map((product) => {
        return product?.product_id;
      });
      setSelectedIds(idArr);
    }
  };
  return (
    <div className={styles.productManagement}>
      <Toaster />
      <div className={styles.top}>
        <div className={styles.left}>Products</div>
        <div className={styles.right}>
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
      <div className={styles.topBar}>
        <div className={styles.searchbox}>
          <TextBox
            value={searchValue}
            setValue={(e) => setSearchValue(e)}
            placeholder="Search here.."
            width="267px"
          />
          {ICONS.magnify}
        </div>

        <div className={styles.buttons}>
          {selectedIds.length > 0 && (
            <Button
              onClick={deleteProductsHandler}
              className={styles.deletebtn}
            >
              {ICONS.trash}
            </Button>
          )}
          <Button
            onClick={() => {
              navigate("/add-product");
            }}
            className={styles.btn}
          >
            {ICONS.plus} Add new Product{" "}
          </Button>
        </div>
      </div>
      <div className={styles.productList}>
        <div className={styles.listHeader}>
          <div className={styles.col1}>
            <Checkbox
              checked={selectedIds.length == products.length}
              onChange={() => {
                selectAllHandler();
              }}
              shadowed={true}
            />
          </div>
          <div className={styles.col2}>PRODUCT ID</div>
          <div className={styles.col3}>NAME</div>
          <div className={styles.col4}>PRODUCT TYPE</div>
          <div className={styles.col5}>BEANS TYPE</div>
          <div className={styles.col6}>ADDED ON</div>
          <div className={styles.col7}>BASE PRICE</div>
          <div className={styles.col8}>PURCHASES</div>
          <div className={styles.col9}>ACTIONS</div>
        </div>
        <div className={styles.list}>
          {getProductsLoading ? (
            <h3>Loading</h3>
          ) : (
            <>
              {products
                ?.filter((product) => {
                  return product?.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                ?.map((product, key) => {
                  return (
                    <AdminProductRow
                      fetchProducts={fetchProducts}
                      selectedIds={selectedIds}
                      setSelectedIds={setSelectedIds}
                      product={product}
                    />
                  );
                })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
