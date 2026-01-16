import grid from "../assets/grid.svg";

const Sidebar = () => {
  return (
    <>
      {/* Main Container */}
      <div className="py-1">
        {/* Containers */}
        <div className="flex gap-2 h-9">
          <div className="bg-[#A03879] w-1 rounded-3xl"></div>
          <div className="bg-[#A03879] w-48 flex items-center rounded-md py-2 gap-2">
            <img src={grid} alt="grid icon" className="w-5 m-1" />
            <span className="text-[#EBEBEB] text-sm">Dashboard</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
