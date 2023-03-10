import { useState } from "react";
import { CheckBox, CheckMark } from "./styles";
import { CheckboxProps } from "./types";

export default function Checkbox(props: CheckboxProps) {
  const { checked, name, id, children } = props;

  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label
      className="group cursor-pointer relative leading-5 text-[#474F60] font-medium"
      htmlFor={name}
    >
      <div className="ml-6">{children}</div>
      <CheckBox
        className="group-hover:bg-[#e9d1a0] duration-200"
        type="checkbox"
        name={name}
        id={id}
        {...props.register(name, {
          onChange: (e) => {
            setIsChecked(e.target.checked);
          },
        })}
      />
      <CheckMark
        checked={isChecked}
        className="group-hover:bg-[#e9d1a0] duration-200"
      />
    </label>
  );
}
