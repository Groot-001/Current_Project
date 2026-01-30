import alert_circle from "../assets/alert-circle.svg";

const TasksOverview = () => {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col rounded-t-[10px] gap-6">
        {/* Overdue Tasks */}
        <div className="flex flex-col rounded-[10px] border-[0.8px] bg-[#FFFFFF] shadow-[0_0_16px_-1px_rgba(22, 22, 22, 0.04)]">
          {/* The rgba value is the arbitary value in the shadow */}

          {/* First Sub Container */}
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

          {/* Second sub container */}
          <div className="flex flex-col gap-3 p-4">
            {/* first box of second container */}
            <div className="bg-[#F6EBF23D] border-[#FFF1EF] border-[0.8px] rounded-[10px] p-4 flex flex-col gap-3">
              <div>first</div>
              <div>second</div>
            </div>
            <div>two</div>
            <div>third</div>
          </div>

          {/* Third sub container */}
          <div>third</div>
        </div>
        {/* 
        box-shadow: 0px 0px 16px -1px #1616160A;
 */}
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
