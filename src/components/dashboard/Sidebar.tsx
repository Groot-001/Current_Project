import GridIcon from "../../assets/grid.svg?react";
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
import { useState } from "react";

const sidebarItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: GridIcon,
  },
  {
    name: "Leads",
    path: "/leads",
    icon: users,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: book,
  },
  {
    name: "Appointment",
    path: "/appointment",
    icon: appointment,
  },
  {
    name: "Deal",
    path: "/deal",
    icon: deal,
  },
  {
    name: "Visitor Log",
    path: "/visitorlog",
    icon: clock,
  },
  {
    name: "Follow Up",
    path: "/followup",
    icon: calender_clock,
  },
  {
    name: "Target Task",
    path: "/targettask",
    icon: target,
  },
  {
    name: "Team Member",
    path: "/teammember",
    icon: user_group,
  },
  {
    name: "Report",
    path: "/report",
    icon: report,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: setting,
  },
];

// type items = {
//   key: string;
//   path: string;
//   icon: string;
// };

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <>
      <div className="flex flex-col border-r-[0.6px] border-[#EBEBEB] bg-[#FFFFFF] py-4 gap-3 w-60">
        {sidebarItems.map((item, ind) => {
          const isActive = item.name === activeItem;

          return (
            <div
              key={ind}
              className="flex gap-2 pr-[18px]"
              onClick={() => setActiveItem(item.name)}
            >
              <span
                className={
                  isActive
                    ? "rounded-tr-[4px] rounded-br-[4px] w-1 h-11 bg-[#A03879]"
                    : "rounded-tr-[4px] rounded-br-[4px] w-1 h-11"
                }
              />
              <div
                className={
                  isActive
                    ? "rounded-[4px] py-[10px] pl-1 pr-2 flex gap-3  items-center w-full bg-[#A03879] text-[#EBEBEB]"
                    : "rounded-[4px] py-[10px] pl-1 pr-2 flex gap-3  items-center w-full text-[#242424]"
                }
              >
                <GridIcon className="w-6 h-6" />
                <span
                  className={
                    isActive
                      ? "font-normal text-sm text-[#EBEBEB]"
                      : "font-normal text-sm"
                  }
                >
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
