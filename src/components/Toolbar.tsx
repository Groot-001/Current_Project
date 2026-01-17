import downicon from "../assets/chevron-down.svg";

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
        <div>
          <div className="flex">
            <span>This Month</span>
            <img src={downicon} alt="Chevron down icon" />
          </div>
          {/* date filter container */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
