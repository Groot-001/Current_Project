import { ChevronRight } from "lucide-react";

const SelectCategory = () => {
  return (
    <div className="bg-[#FFFFFF] shadow-[0px_0px_2px_0px_#0000004D] rounded-[14px] py-1 flex flex-col">
      <span className="text-[#5C5C5C] font-normal text-xs py-2 pl-[10px] pr-5 ">
        Schedule Message
      </span>
      <div className="border-b-[0.5px] border-[#AFAFAF] flex flex-col">
        <span className="text-[#5C5C5C] font-normal text-sm py-3 px-5 ">
          Tomorrow 9:00 AM
        </span>
        <span className="text-[#5C5C5C] font-normal text-sm py-3 px-5 ">
          Today 9:00 PM
        </span>
      </div>
      <div className="py-3 px-5 flex justify-between">
        <span className="text-[#5C5C5C] font-normal text-sm ">Custom Time</span>
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

export default SelectCategory;
