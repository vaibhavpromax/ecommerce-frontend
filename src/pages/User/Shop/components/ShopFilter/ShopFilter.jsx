import React, { useState } from "react";
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

const ShopFilter = () => {
  const [value1, setValue1] = useState([20, 37]);
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
  const tickHandler = () => {};

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
              <Checkbox tick={true} onChange={tickHandler} />
              <span>Coffee</span>
            </div>
            <div className={styles.filterOption}>
              <Checkbox tick={true} onChange={tickHandler} />
              <span>Tea</span>
            </div>
          </div>
        </div>
      )}
      <div className={styles.filter2}>
        <h4>Coffee beans types</h4>
        <div className={styles.filterOptions}>
          <div className={styles.filterOption}>
            <Checkbox tick={true} onChange={tickHandler} />
            <span>Robusta</span>
          </div>
          <div className={styles.filterOption}>
            <Checkbox tick={true} onChange={tickHandler} />
            <span>Arabica</span>
          </div>
          <div className={styles.filterOption}>
            <Checkbox tick={true} onChange={tickHandler} />
            <span>Excelsa</span>
          </div>
          <div className={styles.filterOption}>
            <Checkbox tick={true} onChange={tickHandler} />
            <span>Liberica</span>
          </div>
        </div>
      </div>
      <div className={styles.filter3}>
        <h4>Region</h4>
        <div className={styles.filterOptions}>
          <div className={styles.filterOption}>
            <Checkbox tick={true} onChange={tickHandler} />
            <span>Middle East</span>
          </div>
          <div className={styles.filterOption}>
            <Checkbox tick={true} onChange={tickHandler} />
            <span>Africa</span>
          </div>
          <div className={styles.filterOption}>
            <Checkbox tick={true} onChange={tickHandler} />
            <span>Central & South America</span>
          </div>
          <div className={styles.filterOption}>
            <Checkbox tick={true} onChange={tickHandler} />
            <span>South Asia</span>
          </div>
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
            onChange={handleSliderChange}
            valueLabelFormat={(n) => `${n}$`}
            valueLabelDisplay="on"
            color="primary"
            // getAriaValueText={slidertooltip}
            disableSwap
          />
        </ThemeProvider>
      </div>
      <Button>Apply Filter</Button>
    </div>
  );
};

export default ShopFilter;
