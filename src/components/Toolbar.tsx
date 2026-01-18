import downicon from "../assets/chevron-down.svg";
import calendar from "../assets/calendar.svg";
import check from "../assets/check.svg";
import x from "../assets/x.svg";

const Toolbar = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-white rounded-2xl w-3/4 relative">
        {/* Ttile Container */}
        <div className="pb-3 pl-5 pt-8 flex flex-col gap-3">
          {/* In tailwind css the heading doesnot have any values by default, its like a normal text */}
          <h1 className="text-xl text-[#3B3B3B]">My Dashboard</h1>
          <span className=" text-[#5C5C5C]">
            Overview of your leads, tasks, and bookings
          </span>
        </div>

        {/* popup Notification */}
        <div className="rounded-md border-2 w-56 h-9 shadow-[#00000029] shadow-sm absolute right-0 top-4">
          <div className="flex relative">
            <img
              src={check}
              alt="Check icon"
              className="bg-[#07BC0C] rounded-3xl w-4 h-4"
            />
            <span className="text-[#5C5C5C]">Success Notification !</span>
            <img
              src={x}
              alt="cross icon"
              className="w-3 h-3 absolute right-0 top-0"
            />
          </div>
        </div>

        {/* Month and filter container */}
        <div className="flex justify-between px-5 pb-3 pt-7">
          {/* Month Container */}
          <div className="w-28 border-[0.5px] rounded-2xl h-7 flex justify-center">
            <div className="w-24 flex items-center gap-2 p-1">
              <span className="text-xs">This Month</span>
              <img src={downicon} alt="Chevron down icon" className="w-5" />
            </div>
          </div>
          {/* date filter container */}
          <div className="flex w-64 items-center gap-1">
            <span className="text-sm">Filter by Date</span>
            <div className="flex 600 rounded-3xl border-[0.5px] h-10 w-40 justify-between py-2 px-5 items-center">
              <span className="text-[#585858]">24/02/2022</span>
              <img src={calendar} alt="Calendar icon" className="w-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
