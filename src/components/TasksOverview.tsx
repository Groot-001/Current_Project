import alert_circle from "../assets/alert-circle.svg";

const TasksOverview = () => {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col rounded-t-[10px] gap-6">
        {/* Overdue Tasks */}
        <div className="flex flex-col rounded-[10px] border-[0.8px] bg-[#FFFFFF] shadow-[0_0_16px_-1px_rgba(22, 22, 22, 0.04)]">
          {/* The rgba value is the arbitary value in the shadow */}

          {/* Sub Containers */}
          <div className="">
            <div>
              <img
                src={alert_circle}
                alt="alert-circle icon"
                className="w-5 h-5"
              />
              <span>Overdue Tasks</span>
            </div>
            <span>Tasks that are past their due date</span>
          </div>
          <div>second</div>
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
