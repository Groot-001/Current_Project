import { X } from "lucide-react";
import { Calendar } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Clock } from "lucide-react";

const ModifyAppointmentBooking = () => {
  return (
    <div className="rounded-xl border-[0.4px] border-[#AFAFAF] bg-[#FFFFFF] px-6 py-5 flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-2 relative">
        <span className="text-[#292929] font-normal text-[18px] leading-[26px]">
          Schedule Message
        </span>
        <span className="text-[#5C5C5C] font-light text-xs">
          Time zone: Kathmandu
        </span>
        <X size={20} className="absolute right-0 top-0" />
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-[#3B3B3B] font-normal text-sm">Category</span>
          <div className="rounded-lg border-[0.5px] border-[#DEDEDE] shadow-[0px_0px_2px_0px_#FFBDB6] py-[10px] px-3 flex gap-[10px] justify-between items-center">
            <div className="flex gap-[10px] items-center">
              <Calendar size={20} />
              <span className="text-[#292929] font-light text-base">Today</span>
            </div>
            <ChevronDown size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[#3B3B3B] font-normal text-sm">Category</span>
          <div className="rounded-lg border-[0.5px] border-[#DEDEDE] shadow-[0px_0px_2px_0px_#FFBDB6] py-[10px] px-3 flex gap-[10px] justify-between items-center">
            <div className="flex gap-[10px] items-center">
              <Clock size={20} />
              <span className="text-[#292929] font-light text-base">
                3:00 PM
              </span>
            </div>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>
      <div className="flex gap-3 w-full justify-end">
        <span className="text-[#8D8D8D] font-light text-sm text-center rounded-full border-[#9F9F9F] border-[0.6px] py-[6px] px-6">
          Cancel
        </span>
        <span className="text-[#FFFFFF] bg-[#A03879] font-light text-sm text-center rounded-full border-[#9F9F9F] border-[0.6px] py-[6px] px-6">
          Schedule Message
        </span>
      </div>
    </div>
  );
};

export default ModifyAppointmentBooking;
