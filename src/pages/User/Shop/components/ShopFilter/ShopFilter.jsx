import React, { useEffect, useState } from "react";
import styles from "./ShopFilter.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import Button from "../../../../../components/Button/Button";
import { ICONS } from "../../../../../icons";
import Slider from "@mui/material/Slider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#917D6A",
      darker: "#053e85",
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        rail: {
          backgroundColor: "white",
          height: "4px",
        },
        track: {
          height: "4px",
        },
        root: {
          width: "80%",
        },
        thumb: {
          width: "14px",
          height: "14px",
        },
        valueLabel: {
          color: "#615C5E",
          fontFamily: "Jost",
          fontSize: "14px",
          background: "transparent",
          fontWeight: "600",
          position: "absolute",
          top: "50px",
        },
      },
    },
  },
});

const regionOptions = [
  { value: "ROBUSTA", label: "Robusta" },
  { value: "ARABICA", label: "Arabica" },
  { value: "EXCELSA", label: "Excelsa" },
  { value: "LIBERICA", label: "Liberica" },
];

const originOptions = [
  { value: "ASIA", label: "South Asia" },
  { value: "AMERICA", label: "Central & South America" },
  { value: "AFRICA", label: "Africa" },
  { value: "MIDDLE", label: "Middle East" },
];

const ShopFilter = ({ items, setFilteredProducts }) => {
  const [value1, setValue1] = useState([0, 1000]);
  const [filterValues, setFilterValues] = useState({
    region: [],
    origin: [],
    type: [],
    pricemin: value1[0],
    pricemax: value1[1],
  });

  const insertInFilterValuesHandler = (fValues, newValue) => {
    let flag = true;
    const newArr = fValues.filter((val) => {
      if (val == newValue) {
        flag = false;
        return;
      } else {
        return val;
      }
    });
    if (flag) {
      newArr.push(newValue);
    }

    return newArr;
  };

  const minDistance = 10;
  const handleSliderChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  useEffect(() => {
    setFilteredProducts(items);
  }, [items]);

  const applyFilterHandler = () => {
    const filteredProducts = items?.filter((it) => {
        if (filterValues.type.length > 0) {
          return filterValues.type.includes(it.product_type);
        } else return true;
      })
      .filter((it) => {
        if (filterValues.origin.length > 0) {
          return filterValues.origin.includes(it.product_origin);
        } else return true;
      })
      .filter((it) => {
        if (filterValues.region.length > 0) {
          return filterValues.region.includes(it.beans_type);
        } else return true;
      })
      .filter((it) => {
        if (value1[1] < 1000 || value1[0] > 0) {
          return (
            parseInt(it.selling_price) < value1[1] &&
            parseInt(it.selling_price) > value1[0]
          );
        } else return true;
      });

    setFilteredProducts(filteredProducts);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.top}>
        <input placeholder="Search here..." />
        {ICONS.magnify}
      </div>
      {!false && (
        <div className={styles.filter1}>
          <h4>Product types</h4>
          <div className={styles.filterOptions}>
            <div className={styles.filterOption}>
              <Checkbox
                // tick={true}
                value="POWDER"
                onChange={(e) => {
                  setFilterValues({
                    ...filterValues,
                    type: insertInFilterValuesHandler(
                      filterValues.type,
                      e.target.value
                    ),
                    // type: [...filterValues.type, e.target.value],
                  });
                }}
              />
              <span>Coffee</span>
            </div>
            <div className={styles.filterOption}>
              <Checkbox
                // tick={true}
                value="TEA"
                onChange={(e) => {
                  setFilterValues({
                    ...filterValues,
                    type: insertInFilterValuesHandler(
                      filterValues.type,
                      e.target.value
                    ),
                    // type: [...filterValues.type, e.target.value],
                  });
                }}
              />
              <span>Tea</span>
            </div>
          </div>
        </div>
      )}
      <div className={styles.filter2}>
        <h4>Coffee beans types</h4>
        <div className={styles.filterOptions}>
          {regionOptions.map((item, key) => {
            return (
              <div className={styles.filterOption}>
                <Checkbox
                  value={item.value}
                  // tick={true}
                  onChange={(e) => {
                    setFilterValues({
                      ...filterValues,
                      region: insertInFilterValuesHandler(
                        filterValues.region,
                        e.target.value
                      ),
                      // region: [...filterValues.region, e.target.value],
                    });
                  }}
                />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.filter3}>
        <h4>Region</h4>
        <div className={styles.filterOptions}>
          {originOptions.map((item, key) => {
            return (
              <div className={styles.filterOption}>
                <Checkbox
                  // tick={true}
                  theme="WHITE"
                  value={item.value}
                  onChange={(e) => {
                    setFilterValues({
                      ...filterValues,
                      origin: insertInFilterValuesHandler(
                        filterValues.origin,
                        e.target.value
                      ),
                      // origin: [...filterValues.origin, e.target.value],
                    });
                  }}
                />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.filter4}>
        <h4>Price (per unit)</h4>
        <ThemeProvider theme={theme}>
          <Slider
            className={styles.slider}
            getAriaLabel={(i, num) => {
              return `hello ${num} $`;
            }}
            getAriaValueText={(i, num) => {
              return ` hell ${num} $`;
            }}
            value={value1}
            max={1000}
            onChange={handleSliderChange}
            valueLabelFormat={(n) => `${n}$`}
            valueLabelDisplay="on"
            color="primary"
            // getAriaValueText={slidertooltip}
            disableSwap
          />
        </ThemeProvider>
      </div>
      <Button onClick={applyFilterHandler}>Apply Filter</Button>
    </div>
  );
};

export default ShopFilter;
