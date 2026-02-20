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

const sidebarItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Leads",
    path: "/leads",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Appointment",
    path: "/appointment",
  },
  {
    name: "Deal",
    path: "/deal",
  },
  {
    name: "Visitor Log",
    path: "/visitorlog",
  },
  {
    name: "Follow Up",
    path: "/followup",
  },
  {
    name: "Target Task",
    path: "/targettask",
  },
  {
    name: "Team Member",
    path: "/teammember",
  },
  {
    name: "Report",
    path: "/report",
  },
  {
    name: "Setting",
    path: "/setting",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col border-r-[0.6px] border-[#EBEBEB] bg-[#FFFFFF] py-4 gap-3">
        {sidebarItems.map((item, ind) => {
          return <div>
            
          </div>;
        })}
      </div>
    </>
  );
};

export default Sidebar;
