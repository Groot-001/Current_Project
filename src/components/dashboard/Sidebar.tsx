import grid from "../../assets/grid.svg";
import users from "../../assets/users.svg";
import book from "../../assets/book.svg";
import appointment from "../../assets/awppontment.svg";
import deal from "../../assets/deal.svg";
import clock from "../../assets/clock.svg";
import calender_clock from "../../assets/calendar clock.svg";
import target from "../../assets/target.svg";
import user_group from "../../assets/user group.svg";
import report from "../../assets/file-text.svg";
import setting from "../../assets/settings.svg";
import down from "../../assets/chevron-down.svg";

const Sidebar = () => {
  return (
    <>
      {/* Main Container */}
      <div className="py-1 flex flex-col gap-2">
        {/* Containers */}
        <div className="flex gap-2 h-9">
          <div className="bg-[#A03879] w-1 rounded-3xl"></div>
          <div className="bg-[#A03879] w-48 flex items-center rounded-md py-2 gap-2">
            <img src={grid} alt="grid icon" className="w-5 m-1" />
            <span className="text-[#EBEBEB] text-sm">Dashboard</span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={users} alt="User Icon" className="w-5 m-1" />
            <span className="text-sm">Leads</span>
            <span className="bg-[#FFBDB6] text-[#A03879] text-xs text-center rounded-3xl w-6">
              06
            </span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={book} alt="Book" className="w-5 m-1" />
            <span className="text-sm">Contact</span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={appointment} alt="Appointment Icon" className="w-5 m-1" />
            <span className="text-sm">Appointment</span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={deal} alt="Deal Icon" className="w-5 m-1" />
            <span className="text-sm">Deal</span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={clock} alt="Clock Icon" className="w-5 m-1" />
            <span className="text-sm">Visitor Log</span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img
              src={calender_clock}
              alt="Calendar Clock Icon"
              className="w-5 m-1"
            />
            <span className="text-sm">Follow Up</span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={target} alt="Target Icon" className="w-5 m-1" />
            <span className="text-sm">Target Task</span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={user_group} alt="User Group icon" className="w-5 m-1" />
            <span className="text-sm">Team Member</span>
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={report} alt="Report icon" className="w-5 m-1" />
            <span className="text-sm">Report</span>
            <img src={down} alt="chevron down" className="-rotate-90 ml-24" />
          </div>
        </div>

        <div className="flex gap-2 h-9">
          <div className="w-1 rounded-3xl"></div>
          <div className="w-48 flex items-center rounded-md py-2 gap-2">
            <img src={setting} alt="Setting icon" className="w-5 m-1" />
            <span className="text-sm">Setting</span>
            <img src={down} alt="Down Icon" className="-rotate-90 ml-24" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
