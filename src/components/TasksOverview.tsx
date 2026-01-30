import alert_circle from "../assets/alert-circle.svg";

const TasksOverview = () => {
  return (
    <>
      {/* Main Container */}
      <div>
        {/* Sub containers */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex">
            <img
              src={alert_circle}
              alt="alert-circle icon"
              className="w-5 h-5"
            />
            <span>Overdue Tasks</span>
          </div>
          <span>Tasks that are past their due date</span>
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
