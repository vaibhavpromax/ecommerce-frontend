import { useEffect, useRef, useState } from "react";
import TabNavBtn from "./TabNavBtn/TabNavBtn";
import styles from "./TabNavSlider.module.scss";
const TabNavSlider = ({
  width = "100%",
  className,
  buttons,
  value,
  setValue,
}) => {
  const [activeButton, setActiveButton] = useState(0);
  const [btnWidth, setBtnWidth] = useState(0);
  const tabNavRef = useRef(null);
  useEffect(() => {
    let index;
    buttons.forEach((button, i) => {
      if (button.value === value) index = i;
    });
    setActiveButton(index);
  }, [value]);
  const setButtonWidth = () => {
    let tabNavWidth = tabNavRef.current?.clientWidth;
    setBtnWidth(tabNavWidth / buttons.length - 5);
  };
  useEffect(() => {
    window.addEventListener("resize", setButtonWidth);
    setButtonWidth();
  }, []);
  return (
    <div>
      <div
        ref={tabNavRef}
        className={`${styles.tabNavContainer}  ${className}`}
        style={{ width }}
      >
        {buttons.map((button) => (
          <TabNavBtn
            active={value === button.value}
            onClick={() => setValue(button.value)}
            width={`${btnWidth}px`}
            key={button.value}
          >
            {button.label}
            {button.pillValue && (
              <div
                className={styles.pill}
                style={{
                  background: button.pillColor,
                  borderRadius: "9px",
                  display: "flex",
                  padding: "2px 5px 2px 6px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  width: "29px",
                  height: "18px",
                  fontFamily: "Jost",
                  fontSize: "12px",
                  marginLeft: "10px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  lineHeight: "normal",
                }}
              >
                {button.pillValue}
              </div>
            )}
          </TabNavBtn>
        ))}
        <div
          className={`${styles.activePill}`}
          style={{
            left: `calc(0.35rem + ${activeButton * btnWidth}px)`,
            width: `${btnWidth}px`,
          }}
        />
      </div>
    </div>
  );
};

export { TabNavSlider, TabNavBtn };
