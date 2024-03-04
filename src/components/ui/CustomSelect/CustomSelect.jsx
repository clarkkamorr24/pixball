import clsx from "clsx";
import React from "react";
import Select from "react-select";

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
}) => {
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value,
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : "";
    }
  };

  const optionStyles = {
    base: "hover:cursor-pointer px-3 py-2 rounded",
    focus: "bg-secondary dark:bg-primary",
    selected:
      "after:content-['✔'] after:ml-2 after:text-white text-white bg-primary",
  };

  const menuStyles = "mt-1 bg-primary dark:bg-stroke rounded-md p-1";
  const multiValueStyles =
    "bg-secondary dark:bg-primary rounded items-center py-0.5 pl-2 pr-1 gap-2 mb-1 mt-1 mr-2";

  const multiValueLabelStyles = "leading-5";
  const multiValueRemoveStyles = "dark:bg-primary rounded-md";
  const noOptionsMessageStyles = "py-4 rounded-sm bg-secondary dark:bg-stroke";
  const clearIndicatorStyles =
    "text-white rounded-md hover:bg-red cursor-pointer";
  const indicatorStyles = "cursor-pointer";
  return (
    <Select
      classNames={{
        control: () =>
          clsx("items-center rounded-md bg-primary px-2 dark:bg-stroke"),
        menu: () => menuStyles,
        option: ({ isFocused, isSelected }) =>
          clsx(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base,
          ),
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        noOptionsMessage: () => noOptionsMessageStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorsContainer: () => indicatorStyles,
      }}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      unstyled
      className={className}
    />
  );
};
