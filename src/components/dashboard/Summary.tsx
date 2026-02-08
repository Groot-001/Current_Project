import users from "../../assets/boldusers.svg";
import phone from "../../assets/phone.svg";
import appointment from "../../assets/appointmentpink.svg";
import check from "../../assets/checkgreen.svg";

const Summary = () => {
  return (
    <>
      {/* Main Container */}
      <div className="w-3/4 flex gap-6">
        {/* Particular containers */}
        <div className="w-64 h-32 shadow-[0_0_16px_#0000000A] rounded-2xl py-8 px-5 bg-white">
          {/* semi Container */}
          <div className="w-[220px] h-14 flex items-center gap-[10px]">
            <div className="w-40 h-14 flex flex-col">
              <h1 className="text-3xl font-semibold">220</h1>
              <span className="text-[#8D8D8D] text-sm">New Leads Assigned</span>
            </div>
            <div className="w-11 h-11 rounded-3xl p-2 bg-[#EBEBEB] flex  justify-center items-center">
              <img src={users} alt="users icon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="w-64 h-32 shadow-[0_0_16px_#0000000A] rounded-2xl py-8 px-5 bg-white">
          {/* semi Container */}
          <div className="w-[220px] h-14 flex items-center gap-[10px]">
            <div className="w-40 h-14 flex flex-col">
              <h1 className="text-3xl font-semibold">220</h1>
              <span className="text-[#8D8D8D] text-sm">Follow-up Task</span>
            </div>
            <div className="w-11 h-11 rounded-3xl p-2 bg-[#EFF6FF] flex  justify-center items-center">
              <img src={phone} alt="phone icon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="w-64 h-32 shadow-[0_0_16px_#0000000A] rounded-2xl py-8 px-5 bg-white">
          {/* semi Container */}
          <div className="w-[220px] h-14 flex items-center gap-[10px]">
            <div className="w-40 h-14 flex flex-col">
              <h1 className="text-3xl font-semibold">220</h1>
              <span className="text-[#8D8D8D] text-sm">
                Appointments Booked
              </span>
            </div>
            <div className="w-11 h-11 rounded-3xl p-2 bg-[#FAF5FF] flex  justify-center items-center">
              <img
                src={appointment}
                alt="appointment icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        <div className="w-64 h-32 shadow-[0_0_16px_#0000000A] rounded-2xl py-8 px-5 bg-white">
          {/* semi Container */}
          <div className="w-[220px] h-14 flex items-center gap-[10px]">
            <div className="w-40 h-14 flex flex-col">
              <h1 className="text-3xl font-semibold">220</h1>
              <span className="text-[#8D8D8D] text-sm">
                Appointments Completed
              </span>
            </div>
            <div className="w-11 h-11 rounded-3xl bg-[#F0FDFA] flex  justify-center items-center">
              <img src={check} alt="check icon" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
