import { InputProps } from "./types";

export default function Input(props: InputProps) {
  const { label, type, name, id, placeholder, errors } = props;

  return (
    <>
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        {...props.register}
        className={`${
          Boolean(errors) ? "border-red-600" : " border-[#C1CCD6]"
        } w-full max-h-[62px] rounded-md text-base duration-300 p-5 border-[2px] border-solid focus-visible:outline-none `}
      />
      <div className="self-start text-sm text-red-600">
        {Boolean(errors) && errors?.message}
      </div>
    </>
  );
}
