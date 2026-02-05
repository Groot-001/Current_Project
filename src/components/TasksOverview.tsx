import alert_circle from "../assets/alert-circle.svg";
import clock from "../assets/clock.svg";
import external_link from "../assets/external-link.svg";

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

          {/* Second sub container of 1st container*/}
          <div className="flex flex-col gap-3 p-4">
            {/* first box of 2nd cont of 1st cont*/}
            <div className="flex flex-col bg-[#F6EBF23D] border-[#FFF1EF] border-[0.8px] rounded-[10px] p-4 gap-3">
              {/* inner cont for text / Main div / upper one */}
              <div className="flex justify-between items-start">
                {/* upper one for wrapping those 2 text box vertically / left one */}
                <div className="flex flex-col gap-1">
                  <div className="max-w-[125px]">
                    <span className="text-[#3B3B3B] font-light text-sm tracking-normal">
                      Follow-up on initial consultation
                    </span>
                  </div>

                  {/* lower line text / 2nd line */}
                  <div>
                    <span className="text-[#FF6F61] font-normal text-sm tracking-normal">
                      Sunita Rana
                    </span>
                  </div>
                </div>

                {/* text for in top corner / Right one */}
                <div className="px-2 pt-[2px] pb-1 bg-[#FFD2CE] rounded-full">
                  <span className="text-[#B00020] font-light text-[10px] leading-[16px]">
                    2 days overdue
                  </span>
                </div>
              </div>

              {/* lower container for 2 buttons*/}
              <div className="flex gap-2 items-end">
                <div className="flex rounded-full px-5 py-[6px] gap-[10px] bg-[#A03879] items-center">
                  <img
                    src={external_link}
                    alt="external_link icon"
                    className="w-[14px] h-[14px]"
                  />
                  <button className="text-[#FFFFFF] font-normal text-sm tracking-normal text-center">
                    Open
                  </button>
                </div>

                <div className="flex rounded-full px-6 py-[6px] gap-[10px] border-[#A03879] border-[0.6px] items-center">
                  <img
                    src={clock}
                    alt="clock icon"
                    className="w-[14px] h-[14px]"
                  />
                  <button className="text-[#A03879] font-normal text-sm tracking-normal text-center">
                    Reschedule
                  </button>
                </div>
              </div>
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
