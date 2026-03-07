import users from "../../assets/boldusers.svg";
import phone from "../../assets/phone.svg";
import appointment from "../../assets/appointmentpink.svg";
import check from "../../assets/checkgreen.svg";

const Summary = () => {
  return (
    <>
      <div className="flex gap-6">
        <div className="shadow-[0px_0px_16px_0px_#0000000A] bg-[#FFFFFF] rounded-[20px] p-[22px]">
          <div className="flex gap-[10px] items-center">
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-[28px] leading-10 font-semibold text-[#3A3A3A]">
                220
              </h1>
              <span className="text-[#8D8D8D] text-sm font-light">
                New Leads Assigned
              </span>
            </div>
            <div className="p-[10px] bg-[#EBEBEB] rounded-[22px]">
              <img src={users} alt="users icon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="shadow-[0px_0px_16px_0px_#0000000A] bg-[#FFFFFF] rounded-[20px] p-[22px]">
          <div className="flex gap-[10px] items-center">
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-[28px] leading-10 font-semibold text-[#3A3A3A]">
                220
              </h1>
              <span className="text-[#8D8D8D] text-sm font-light">
                Follow-up Task
              </span>
            </div>
            <div className="p-[10px] bg-[#EFF6FF] rounded-[22px]">
              <img src={phone} alt="Phone icon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="shadow-[0px_0px_16px_0px_#0000000A] bg-[#FFFFFF] rounded-[20px] p-[22px]">
          <div className="flex gap-[10px] items-center">
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-[28px] leading-10 font-semibold text-[#3A3A3A]">
                220
              </h1>
              <span className="text-[#8D8D8D] text-sm font-light">
                Appointments Booked
              </span>
            </div>
            <div className="p-[10px] bg-[#FAF5FF] rounded-[22px]">
              <img
                src={appointment}
                alt="Appointment icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        <div className="shadow-[0px_0px_16px_0px_#0000000A] bg-[#FFFFFF] rounded-[20px] p-[22px]">
          <div className="flex gap-[10px] items-center">
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-[28px] leading-10 font-semibold text-[#3A3A3A]">
                220
              </h1>
              <span className="text-[#8D8D8D] text-sm font-light">
                Appointments Completed
              </span>
            </div>
            <div className="p-[10px] bg-[#F0FDFA] rounded-[22px]">
              <img src={check} alt="Check icon" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
