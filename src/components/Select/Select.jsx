/* eslint-disable no-console */
import ReactSelect, { components } from "react-select";

import { themeStyles } from "./ThemeStyles";
import "./Select.scss";
import { ICONS } from "../../icons";

const themes = {
  normal: "",
  special: "",
  white: "",
};

/**
 * This component is used to render a Select Option Component.
 *
 * @component
 * @example
 * const [value, setValue] = useState("option 1")
 *
 * return (
 * 	<Select
 *  	options={{
 *      option_1: "Option 1",
 *      option_2: "Option 2",
 *      option_3: "Option 3"
 *    }}
 *		value={value}
 *		setValue={setValue}
 *	/>
 * )
 */

const   Select = ({
  options,
  value,
  setValue,
  theme = "normal",
  width,
  height,
  borderRadius,
  borderColor,
  border,
  placeholder,
  menuOnTop,
  disabled,
  dropdownarrow,
  isSearchable,
  name,
  ...rest
}) => {
  const { normalStyles, whiteStyles, specialStyles } = themeStyles(
    width,
    height,
    menuOnTop,
    borderRadius,
    borderColor,
    border
  );

  themes.normal = normalStyles;
  themes.special = specialStyles;
  themes.white = whiteStyles;
  const setSelected = (selected) => {
    if (rest.isMulti) setValue(selected?.map((opt) => opt.value));
    else if (name !== null) {
      setValue((prev) => ({ ...prev, [name]: selected.value }));
    } else {
      setValue(selected.value);
    }
  };

  let selectedOption;
  if (!Array.isArray(options)) {
    options = Object.keys(options ?? {})?.map((op) => ({
      label: options[op],
      value: op,
    }));

    options?.forEach((option) => {
      if (option.value === value) {
        selectedOption = option;
      }
    });
  } else if (rest.isMulti) {
    options?.forEach((option) => {
      const val = value[0];
      if (option.value === val) selectedOption = option;
    });
  } else {
    options?.forEach((option) => {
      const val = name ? value[name] : value;
      if (option.value === val) selectedOption = option;
    });
  }
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {dropdownarrow === "triangularDropDown" && (
          // <TriangleDown color={"black"} />
          <span>{ICONS.dropdownIcon}</span>
        )}
        {dropdownarrow === "smallfilledtraingle" && (
          // <TriangleDown color={"black"} />
          <span>{ICONS.dropDownArrow}</span>
        )}
      </components.DropdownIndicator>
    );
  };
  return (
    <ReactSelect
      options={options}
      value={selectedOption || ""}
      onChange={setSelected}
      components={{ DropdownIndicator }}
      styles={themes[theme]}
      placeholder={placeholder}
      isSearchable={isSearchable}
      isDisabled={disabled}
      classNamePrefix="special-select"
      // menuIsOpen={true}
      {...rest}
    />
  );
};

Select.defaultProps = {
  theme: "normal",
  width: "100%",
  height: "50px",
  menuOnTop: false,
  disabled: false,
  isSearchable: false,
  name: null,
};

export default Select;
