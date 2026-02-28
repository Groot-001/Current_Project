import { LayoutGrid, type LucideIcon } from "lucide-react";
import { Clock } from "lucide-react";
import { Users } from "lucide-react";
import { Book } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Handshake } from "lucide-react";
import { CalendarClock } from "lucide-react";
import { Target } from "lucide-react";
import { FileText } from "lucide-react";
import { Settings } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { useState } from "react";

const sidebarItems: sidebarItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Leads",
    path: "/leads",
    icon: Users,
    extraInfo: "06",
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Book,
  },
  {
    name: "Appointment",
    path: "/appointment",
    icon: CalendarCheck,
  },
  {
    name: "Deal",
    path: "/deal",
    icon: Handshake,
  },
  {
    name: "Visitor Log",
    path: "/visitorlog",
    icon: Clock,
  },
  {
    name: "Follow Up",
    path: "/followup",
    icon: CalendarClock,
  },
  {
    name: "Target Task",
    path: "/targettask",
    icon: Target,
  },
  {
    name: "Team Member",
    path: "/teammember",
    icon: Users,
  },
  {
    name: "Report",
    path: "/report",
    icon: FileText,
    extraIcon: ChevronDown,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: Settings,
    extraIcon: ChevronDown,
  },
];

type sidebarItem = {
  name: string;
  path: string;
  icon: LucideIcon;
  extraIcon?: LucideIcon;
  extraInfo?: string;
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <>
      <div className="flex flex-col border-r-[0.6px] border-[#EBEBEB] bg-[#FFFFFF] py-4 gap-3 w-60">
        {sidebarItems.map((item, ind) => {
          const isActive = item.name === activeItem;
          const Icon = item.icon;
          const ExtraIcon = item.extraIcon;

          return (
            <div
              key={ind}
              className="w-full flex items-center pr-[18px] gap-2"
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
                    ? "flex justify-center items-center w-full bg-[#A03879] rounded-[4px] py-[10px] pl-1 pr-2"
                    : "flex justify-center items-center w-full py-[10px] pl-1 pr-2"
                }
              >
                <div
                  className={
                    isActive
                      ? "flex gap-3 items-center w-full "
                      : "flex gap-3 items-center w-full"
                  }
                >
                  <Icon
                    className={isActive ? "text-[#EBEBEB]" : "text-[#242424]"}
                    strokeWidth={isActive ? 1.5 : 1}
                    size={24}
                  />
                  <span
                    className={
                      isActive
                        ? "font-normal text-sm text-[#EBEBEB]"
                        : "font-normal text-sm"
                    }
                  >
                    {item.name}
                  </span>
                  {/* true && something = something */}
                  {/* False && something = false */}

                  {item.extraInfo && (
                    <div className="rounded-[20px] py-[2px] px-[6px] bg-[#FFBDB6] flex items-center">
                      <span className="font-medium text-[10px] leading-3 text-[#A03879]">
                        {item.extraInfo}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  {/* JSX Cannot be undefined, ExtraIcon is conditional so it won't render like normal icon */}
                  {ExtraIcon && (
                    <ExtraIcon
                      size={24}
                      className={
                        isActive
                          ? "text-[#EBEBEB] -rotate-90 "
                          : "text-[#242424] -rotate-90"
                      }
                      strokeWidth={isActive ? 1.5 : 1}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
