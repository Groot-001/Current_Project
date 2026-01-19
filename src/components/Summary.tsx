import users from "../assets/boldusers.svg";
import phone from "../assets/phone.svg";

const Summary = () => {
  return (
    <>
      {/* Main Container */}
      <div className="w-3/4">
        {/* Particular containers */}
        <div className="w-64 h-32 shadow-[0_0_16px_#0000000A] rounded-2xl py-8 px-5">
          {/* semi Container */}
          <div className="w-52 h-14 flex items-center">
            <div className="w-40 h-14 flex flex-col gap-[2px]">
              <h1 className="text-3xl font-semibold">220</h1>
              <span className="text-[#8D8D8D] text-sm">New Leads Assigned</span>
            </div>
            <div className="w-11 h-11 rounded-3xl p-2 bg-[#EBEBEB] flex  justify-center">
              <img src={users} alt="users icon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="w-64 h-32 shadow-[0_0_16px_#0000000A] rounded-2xl py-8 px-5">
          {/* semi Container */}
          <div className="w-52 h-14 flex items-center">
            <div className="w-40 h-14 flex flex-col gap-[2px]">
              <h1 className="text-3xl font-semibold">220</h1>
              <span className="text-[#8D8D8D] text-sm">Follow-up Task</span>
            </div>
            <div className="w-11 h-11 rounded-3xl p-2 bg-[#EFF6FF] flex  justify-center">
              <img src={phone} alt="phone icon" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
