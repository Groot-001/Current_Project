import alert_circle from "../assets/alert-circle.svg";
import clock from "../assets/purple_clock.svg";
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
              <div className="flex gap-2 items-start">
                <div className="flex rounded-full px-10 py-[6px] gap-[10px] bg-[#A03879] items-center">
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

            <div className="flex flex-col rounded-[10px] border-[0.8px] border-[#FFF1EF] p-4 gap-3 bg-[#F6EBF23D]">
              <div className="flex justify-between pr-0 items-start">
                <div className="flex flex-col gap-1 max-w-[125px]">
                  <span className="text-sm font-light tracking-normal text-[#3B3B3B]">
                    Follow-up on initial consultation
                  </span>
                  <span className="font-normal text-sm tracking-normal text-[#FF6F61]">
                    Sunita Rana
                  </span>
                </div>

                <div className="rounded-full pt-[2px] px-2 pb-1 bg-[#FFD2CE]">
                  <span className="text-[#B00020] font-light text-[10px] leading-4 tracking-normal">
                    2 days overdue
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex rounded-full bg-[#A03879] py-[6px] px-10 gap-[10px] items-center">
                  <img
                    src={external_link}
                    alt="External_link icon"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="font-normal text-sm tracking-normal text-[#FFFFFF]">
                    Open
                  </span>
                </div>

                <div className="flex items-center rounded-full px-6 py-[6px] gap-[10px] border-[0.6px] border-[#A03879]">
                  <img
                    src={clock}
                    alt="Clock_icon"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="font-normal text-sm tracking-normal text-[#A03879]">
                    Reschedule
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-[10px] bg-[#F6EBF23D] border-[0.8px] border-[#FFF1EF] p-4 gap-3">
              <div className="flex justify-between pr-0 items-start">
                <div className="flex flex-col gap-1 max-w-[125px]">
                  <span className="font-light text-sm tracking-normal text-[#3B3B3B]">
                    Follow-up on initial consultation
                  </span>
                  <span className="text-[#FF6F61] font-normal text-sm tracking-normal">
                    Sunita Rana
                  </span>
                </div>

                <div className="bg-[#FFD2CE] rounded-full pt-[2px] px-2 pb-1">
                  <span className="text-[#B00020] font-light text-[10px] leading-[16px] tracking-normal">
                    2 days overdue
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="bg-[#A03879] rounded-full px-10 py-[6px] gap-[10px] flex items-center">
                  <img
                    src={external_link}
                    alt="External_link Icon"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="text-[#FFFFFF] font-normal text-sm tracking-normal">
                    Open
                  </span>
                </div>

                <div className="flex items-center rounded-full border-[0.6px] border-[#A03879] px-6 py-[6px] gap-[10px]">
                  <img
                    src={clock}
                    alt="Clock_icon"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="font-normal text-sm tracking-normal text-[#A03879]">
                    Reschedule
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Third sub container */}
          <div className="border-[#F3F4F6] border-t-[0.8px] py-3 px-4">
            <button className="text-[#A03879] font-normal text-sm tracking-normal">
              View all Follow Up tasks →
            </button>
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
