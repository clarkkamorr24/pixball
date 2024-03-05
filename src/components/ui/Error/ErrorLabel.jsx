import { IoAlertCircle } from "react-icons/io5";

export const ErrorLabel = ({ name }) => {
  return (
    <div className="flex items-center gap-1 text-[10px] text-red">
      <IoAlertCircle size={15} />
      {name}
    </div>
  );
};
