import { Trash2 } from "lucide-react";
import { X } from "lucide-react";

const DeleteUser = () => {
  return (
    <div className="rounded-3xl bg-[#FFFFFF] px-[42px] pt-[26px] pb-6 relative">
      <div className="flex flex-col gap-5 pb-[22px] items-center">
        <div className="bg-[#FFF1EF] flex justify-center rounded-full w-20 h-20 items-center">
          <Trash2 stroke="#EF2424" size={55} className="" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[#333333] font-medium text-xl text-center">
            Delete Lead?
          </span>
          <span className="text-[#AFAFAF] font-light text-base text-center">
            Are you sure you want to delete this Lead?
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="text-[#AFAFAF] font-normal text-sm text-center rounded-full border-[0.6px] border-[#9F9F9F] py-[10px] px-6 w-full">
          Cancel
        </span>
        <span className="text-[#FFFFFF] bg-[#EF2424] font-normal text-sm text-center rounded-full border-[0.6px] border-[#9F9F9F] py-[10px] px-6 w-full">
          Delete Lead
        </span>
      </div>
      <X size={20} className="absolute right-4 top-4" />
    </div>
  );
};

export default DeleteUser;
