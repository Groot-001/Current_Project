import alert_circle from "../../assets/alert-circle.svg";
import TaskCard from "./TaskCard";

const TasksOverview = () => {
  return (
    <>
      {/* Main Container */}
      <div className="max-w-[350px] rounded-t-[10px]">
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
        <div>2</div>
        {/* sub */}
        <div>3</div>
        {/* sub */}
        <div>4</div>
      </div>
    </>
  );
};

export default TasksOverview;
