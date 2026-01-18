import downicon from "../assets/chevron-down.svg";
import calendar from "../assets/calendar.svg";

const Toolbar = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-white rounded-2xl w-3/4">
        {/* Ttile Container */}
        <div className="pt-5 pl-4">
          {/* In tailwind css the heading doesnot have any values by default, its like a normal text */}
          <h1 className="text-xl">My Dashboard</h1>
          <span className="font-thin">
            Overview of your leads, tasks, and bookings
          </span>
        </div>
        {/* Month and filter container */}
        <div className="flex justify-between px-5">
          {/* Month Container */}
          <div className="w-28 bg-orange-500 rounded-2xl h-7 flex justify-center">
            <div className="w-24 flex items-center">
              <span className="text-sm">This Month</span>
              <img src={downicon} alt="Chevron down icon" />
            </div>
          </div>
          {/* date filter container */}
          <div className="flex">
            <span>Filter by Date</span>
            <div className="flex">
              <span>24/02/2022</span>
              <img src={calendar} alt="Calendar icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
