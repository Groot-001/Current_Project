import alert_circle from "../../assets/alert-circle.svg";
import upgoing_icon from "../../assets/upgoing.svg";
import MyLast7DaysChart from "./MyLast7DaysChart";
import MyLast7DaysLegendSection from "./MyLast7DaysLegendSection";
import TaskCard from "./TaskCard";

const TasksOverview = () => {
  return (
    <>
      {/* Main Container */}
      <div className="max-w-[350px] rounded-t-[10px] flex flex-col gap-6">
        {/* Overdue Tasks */}
        <div className="flex flex-col rounded-[10px] border-[0.8px] bg-[#FFFFFF] shadow-[0_0_16px_-1px_rgba(22, 22, 22, 0.04)]">
          {/* The rgba value is the arbitary value in the shadow */}

          {/* First Sub Container of first container*/}
          <div className="px-6 pt-6 pb-4 flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <img
                src={alert_circle}
                alt="alert-circle icon"
                className="w-5 h-5"
              />
              <span className="text-[18px] font-medium text-[#292929] leading-[26px] tracking-normal">
                Overdue Tasks
              </span>
            </div>

            <div>
              <span className="text-[#6A7282] font-light text-sm tracking-normal">
                Tasks that are past their due date
              </span>
            </div>
          </div>

          {/* Second Sub container */}
          <div className="flex flex-col p-4 gap-3">
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>

          {/* Third container */}
          <div className="rounded-b-[10px] border-t-[0.8px] border-[#F3F4F6] px-4 py-3">
            <span className="font-normal text-sm tracking-normal text-[#A03879] text-center">
              View all Follow Up tasks →
            </span>
          </div>
        </div>

        {/* sub */}
        <div className="bg-[#FFFFFF] rounded-[10px] border-[0.8px] shadow-[0px_0px_16px_0px_#0000000A]">
          <div className="flex flex-col rounded-t-[10px] border-b-[0.8px] border-[#F3F4F6] px-6 pt-6 pb-4 gap-1">
            <div className="flex gap-2 items-center">
              <img src={upgoing_icon} alt="Upgoing Icon" className="w-5 h-5" />
              <span className="font-medium text-[18px] leading-[26px] tracking-normal text-[#292929]">
                My Last 7 Days
              </span>
            </div>
            <span className="font-light text-sm tracking-normal text-[#6A7282]">
              Your progress towards daily targets
            </span>
          </div>

          {/* Line Chart */}
          <div className="w-full pt-[21px] pr-[21px] pl-[26px]">
            <div className="">
              <MyLast7DaysChart />
            </div>

            <div className="mt-1 ml-5 pb-9">
              <MyLast7DaysLegendSection />
            </div>
          </div>
        </div>

        {/* sub */}
        <div>3</div>
        {/* sub */}
        <div>4</div>
      </div>
    </>
  );
};

export default TasksOverview;
