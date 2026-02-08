import clock from "../../assets/purple_clock.svg";
import external_link from "../../assets/external-link.svg";

const TaskCard = () => {
  return (
    <>
      <div className="flex flex-col rounded-[10px] bg-[#F6EBF23D] border-[0.8px] border-[#FFF1EF] p-4 gap-3">
        <div className="flex justify-between pr-0 items-start">
          <div className="flex flex-col gap-1 max-w-[125px]">
            <span className="font-light text-sm tracking-normal text-[#3B3B3B]">
              Follow-up on initial consultation
            </span>
            <span className="text-[#FF6F61] font-normal text-sm tracking-normal">
              Sunita Rana
            </span>
          </div>

          <div className="bg-[#FFD2CE] rounded-full pt-[2px] px-2 pb-1">
            <span className="text-[#B00020] font-light text-[10px] leading-[16px] tracking-normal">
              2 days overdue
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="bg-[#A03879] rounded-full px-10 py-[6px] gap-[10px] flex items-center">
            <img
              src={external_link}
              alt="External_link Icon"
              className="w-[14px] h-[14px]"
            />
            <span className="text-[#FFFFFF] font-normal text-sm tracking-normal">
              Open
            </span>
          </div>

          <div className="flex items-center rounded-full border-[0.6px] border-[#A03879] px-6 py-[6px] gap-[10px]">
            <img src={clock} alt="Clock_icon" className="w-[14px] h-[14px]" />
            <span className="font-normal text-sm tracking-normal text-[#A03879]">
              Reschedule
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
