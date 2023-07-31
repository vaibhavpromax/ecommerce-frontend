export const themeStyles = (
  width,
  height,
  menuOnTop,
  borderRadius,
  borderColor,
  border = true
) => {
  const normalStyles = {
    control: (current) => ({
      ...current,
      width,
      height: "40px",
      // border: !border && "none",
      // borderColor: borderColor ?? "#8d8d8d",
      backgroundColor: "#E8E4E1",
      color: "#3F373A",
      cursor: "pointer",
      fontWeight: "400",
      boxShadow: "none",
      minHeight: "initial",
      //borderRadius: borderRadius ?? "20px",
      borderRadius: borderRadius ?? "10px",
    }),
    dropdownIndicator: (current, { selectProps: { menuIsOpen } }) => ({
      ...current,
      color: "#567191",
      transition: "0.5s",
      display: "none",
      padding: "0 10px",
      ...(menuIsOpen && {
        transform: "rotate(180deg)",
      }),
    }),
    indicatorSeparator: (current) => ({
      ...current,
      display: "none",
    }),
    menu: (current) => ({
      ...current,
      width,
      zIndex: "2",
      borderRadius: "10px",
      overflowX: "hidden",
      scrollBar: "none",

      ...(menuOnTop && { bottom: "40px", top: "unset" }),
    }),
    menuList: (current) => ({
      ...current,
      padding: 0,
      maxHeight: "135px",
      overflowX: "hidden",
    }),
    option: (current, { isSelected, isFocused }) => ({
      ...current,
      ...(isSelected && {
        background: "#E8E4E1",
        color: "#3F373A",
      }),
      ...(isFocused && {
        background: isSelected ? "#f6f8f8" : "#abb1b9",
        color: "#3F373A",
      }),
      cursor: "pointer",
    }),
  };

  const whiteStyles = {
    control: (current) => ({
      ...current,
      width,
      height,
      borderColor: "rgba(129, 147, 168, 0.32)",
      backgroundColor: "white",
      cursor: "pointer",
      fontWeight: "500",
      boxShadow: "none",
      minHeight: "initial",
      borderRadius: borderRadius ?? "10px",
    }),
    dropdownIndicator: (current, { selectProps: { menuIsOpen } }) => ({
      ...current,
      color: "#567191",
      transition: "0.5s",
      padding: "0 10px",
      ...(menuIsOpen && {
        transform: "rotate(180deg)",
      }),
    }),
    indicatorSeparator: (current) => ({
      ...current,
      display: "none",
    }),
    menu: (current) => ({
      ...current,
      width,
      zIndex: "2",
      borderRadius: "10px",
      overflowX: "hidden",
      ...(menuOnTop && { bottom: "40px", top: "unset" }),
    }),
    menuList: (current) => ({
      ...current,
      padding: 0,
      maxHeight: "135px",
    }),
    option: (current, { isSelected, isFocused }) => ({
      ...current,
      ...(isSelected && {
        background: "#e8e4e1",
        color: "#3F373A",
      }),
      ...(isFocused && {
        background: isSelected ? "#f6f8f8" : "#e8e4e1",
        color: "#3F373A",
      }),
      cursor: "pointer",
    }),
  };

  const specialStyles = {
    control: (current) => ({
      ...current,
      width,
      height,
      border: "1px solid #567191",
      color: "#394759",
      background: "#F5F6F7",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "400",
      boxShadow: "none",
      minHeight: "initial",
      borderRadius: "5px",
    }),
    dropdownIndicator: (current, { selectProps: { menuIsOpen } }) => ({
      ...current,
      color: "#567191",
      transition: "0.5s",
      padding: "0 10px",
      ...(menuIsOpen && {
        transform: "rotate(180deg)",
      }),
    }),
    indicatorSeparator: (current) => ({
      ...current,
      display: "none",
    }),
    menu: (current) => ({
      ...current,
      width,
      zIndex: "2",
      borderRadius: "10px",
      overflowX: "hidden",
      ...(menuOnTop && { bottom: "40px", top: "unset" }),
    }),
    menuList: (current) => ({
      ...current,
      padding: 0,
      maxHeight: "135px",
    }),
    option: (current, { isSelected, isFocused }) => ({
      ...current,
      ...(isSelected && {
        background: "#e4e6ea",
        color: "#394759",
      }),
      ...(isFocused && {
        background: isSelected ? "#f6f8f8" : "#abb1b9",
        color: "#394759",
      }),
      cursor: "pointer",
    }),
  };

  return { normalStyles, whiteStyles, specialStyles };
};
