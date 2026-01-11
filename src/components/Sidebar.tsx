import grid from "../assets/grid.svg";

const Sidebar = () => {
  return (
    <>
      {/* Main Container */}
      <div>
        {/* Containers */}
        <div className="flex gap-2">
          <div className="bg-[#A03879] w-1 rounded-2xl"></div>
          <div className="bg-[#A03879] flex justify-center">
            <img src={grid} alt="grid icon" className="w-4" />
            <span>Dashboard</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
