import downicon from "../../assets/chevron-down.svg";
import calendar from "../../assets/calendar.svg";
import check from "../../assets/check.svg";
import x from "../../assets/x.svg";

const Toolbar = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] rounded-3xl pt-8 px-6 pb-4 shadow-[0_0_16px_#0000000A] flex flex-col items-start gap-3 relative">
        <div className="flex flex-col justify-center gap-[14px]">
          <h2 className="font-normal text-[24px] leading-[30px] text-[#3B3B3B]">
            My Dashboard
          </h2>
          <span className="font-light text-sm text-[#5C5C5C]">
            Overview of your leads, tasks, and bookings
          </span>
        </div>

        {/* popup Notification */}
        <div className="rounded-sm pt-1 gap-1 bg-[#FFFFFF] shadow-[0px_2px_8px_0px_#00000029] absolute right-0 w-56">
          <div className="flex gap-2 pt-1 px-2 pb-[6px] items-center ">
            <img
              src={check}
              alt="Check icon"
              className="w-[14px] h-[14px] bg-[#07BC0C] rounded-full p-[2px]"
            />
            <span className="text-[#5C5C5C] font-light text-sm text-center items-start">
              Success Notification !
            </span>

            <img
              src={x}
              alt="cross icon"
              className="w-3 h-3 absolute right-1 top-1"
            />
          </div>
          <div className="w-40 border-[#07BC0C] border-[2.5px] absolute bottom-0"></div>
        </div>

        {/* Month and filter container */}
        <div className="flex justify-between px-5 py-[3px] w-full">
          <div className="flex gap-[10px] rounded-full border-[0.6px] border-[#EBEBEB] py-[6px] px-3">
            <div className="flex gap-2 items-center">
              <span className="font-normal text-sm text-[#3B3B3B]">
                This Month
              </span>
              <img src={downicon} alt="Chevron down icon" className="w-5 h-5" />
            </div>
          </div>
          {/* date filter container */}
          <div className="flex gap-1 items-center">
            <span className="text-sm text-[#3B3B3B] font-normal">
              Filter by Date
            </span>
            <div className="flex border-[0.5px] border-[#EBEBEB] rounded-full py-3 px-6 gap-[10px]">
              <span className="text-[#585858] font-light text-sm">
                24/02/2022
              </span>
              <img src={calendar} alt="Calendar icon" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
