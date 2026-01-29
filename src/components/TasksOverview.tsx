import alert_circle from "../assets/alert-circle.svg";

const TasksOverview = () => {
  return (
    <>
      {/* Main Container */}
      <div>
        {/* Sub containers */}
        <div className="flex">
          <div>
            <img src={alert_circle} alt="alert-circle icon" />
          </div>
          <div></div>
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
