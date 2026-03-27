import { ChevronRight } from "lucide-react";

const Category = () => {
  return (
    <div className="bg-[#FFFFFF] shadow-[0px_0px_2px_0px_#0000004D] rounded-[14px] py-1 flex flex-col">
      <div className="py-3 px-5 flex justify-between">
        <span className="text-[#5C5C5C] font-normal text-sm ">Offer</span>
        <ChevronRight size={20} />
      </div>
      <div className="py-3 px-5 flex justify-between">
        <span className="text-[#5C5C5C] font-normal text-sm ">Appointment</span>
        <ChevronRight size={20} />
      </div>
      <div className="py-3 px-5 flex justify-between">
        <span className="text-[#5C5C5C] font-normal text-sm ">
          Reminder Message
        </span>
        <ChevronRight size={20} />
      </div>
      <div className="py-3 px-5 flex justify-between">
        <span className="text-[#5C5C5C] font-normal text-sm ">
          Trust-Building
        </span>
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

export default Category;
