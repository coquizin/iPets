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
        className=" w-full max-h-[62px] rounded-md text-base p-5 border-[2px] border-solid border-[#C1CCD6] focus-visible:outline-none"
      />
      <div className="self-start text-sm text-red-500">
        {Boolean(errors) && errors?.message}
      </div>
    </>
  );
}
