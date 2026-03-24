import profile from "../../assets/Profile.svg";

const Notifications = () => {
  return (
    <div className="bg-[#FFFAF9] shadow-[0px_0px_2px_0px_#0000004D] py-3 rounded-[14px] flex flex-col">
      <div className="border-b-[0.8px] border-[#E5E7EB] py-3 px-4 flex flex-col gap-2">
        <span className="text-[#3B3B3B] text-xl font-medium">
          Notifications
        </span>
        <div className="flex gap-3">
          <span className="bg-[#A03879] rounded-full py-[6px] px-4 font-normal text-sm text-[#FFFFFF]">
            All
          </span>
          <span className="rounded-full border-[0.4px] border-[#BEBEBE] py-[6px] px-4 bg-[#FFFFFF] font-light text-sm text-[#581F43]">
            Unread
          </span>
        </div>
      </div>
      {/* Second Div */}
      <div className="">
        <span className="font-normal text-sm text-[#6B7280]">Today</span>
        <div className="py-3 px-4 flex gap-3">
          <img src={profile} alt="ProfileIcon" className="w-[28px] h-[28px]" />
          <div className="flex flex-col gap-[2px]">
            <span className="text-[#292929] font-normal text-base">
              3 new leads assigned to you
            </span>
            <span className="text-[#6B7280] font-light text-sm">
              Latest: Sunita Gupta · Kathmandu (Naxal)
            </span>
            <span className="text-[#8D8D8D] font-light text-[10px] leading-4">
              2 min ago
            </span>
          </div>
          <span className="rounded-full bg-[#9B2972] w-2 h-2" />
        </div>
        <div className="py-3 px-4 flex gap-3">
          <img src={profile} alt="ProfileIcon" className="w-[28px] h-[28px]" />
          <div className="flex flex-col gap-[2px]">
            <span className="text-[#292929] font-normal text-base">
              3 new leads assigned to you
            </span>
            <span className="text-[#6B7280] font-light text-sm">
              Reschedule canceled appointment on 12 Feb,...
            </span>
            <span className="text-[#8D8D8D] font-light text-[10px] leading-4">
              2 min ago
            </span>
          </div>
          <span className="rounded-full bg-[#9B2972] w-2 h-2" />
        </div>
      </div>
      {/* Third Container */}
      <div className="border-b-[1px]">
        <span className="font-normal text-sm text-[#6B7280]">Yesterday</span>
        <div className="py-3 px-4 flex gap-3">
          <img src={profile} alt="ProfileIcon" className="w-[28px] h-[28px]" />
          <div className="flex flex-col gap-[2px]">
            <span className="text-[#3B3B3B] font-light text-base">
              3 new leads assigned to you
            </span>
            <span className="text-[#8D8D8D] font-light text-sm">
              Latest: Sunita Gupta · Kathmandu (Naxal)
            </span>
            <span className="text-[#8D8D8D] font-light text-[10px] leading-4">
              40 min ago
            </span>
          </div>
          <span className="rounded-full bg-[#9B2972] w-2 h-2" />
        </div>
        <div className="py-3 px-4 flex gap-3">
          <img src={profile} alt="ProfileIcon" className="w-[28px] h-[28px]" />
          <div className="flex flex-col gap-[2px]">
            <span className="text-[#3B3B3B] font-light text-base">
              3 new leads assigned to you
            </span>
            <span className="text-[#6B7280] font-light text-sm">
              Latest: Sunita Gupta · Kathmandu (Naxal)
            </span>
            <span className="text-[#8D8D8D] font-light text-[10px] leading-4">
              42 min ago
            </span>
          </div>
          <span className="rounded-full bg-[#9B2972] w-2 h-2" />
        </div>
      </div>
      {/* Fourth Container */}
      <div className="border-[#EBEBEB] border-t-[0.4px] p-4 flex">
        <span className="text-[#292929] font-normal text-xs text-center rounded-full border-[#8D8D8D] border-t-[0.4px] border-r-[0.2px] border-b-[0.4px] border-l-[0.2px] py-[10px] px-5 w-full">
          See previous notifications
        </span>
      </div>
    </div>
  );
};

export default Notifications;
