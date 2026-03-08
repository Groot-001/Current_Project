const AgentStatusTable = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] shadow-[0px_0px_16px_0px_#0000000A] rounded-[20px] p-6 flex flex-col gap-[18px]">
        <div className="flex flex-col gap-3">
          <span className="text-[#292929] font-normal text-[18px] leading-[26px]">
            Agent Status (Now)
          </span>
          <div className="flex gap-[16px]">
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-[#00C950] rounded-full" />
              <span className="text-[#5C5C5C] font-light text-sm">Online:</span>
              <span className="text-[#3B3B3B] font-semibold text-sm">8</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-[#2B7FFF] rounded-full" />
              <span className="text-[#5C5C5C] font-light text-sm">
                On call::
              </span>
              <span className="text-[#3B3B3B] font-semibold text-sm">3</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-[#FF6900] rounded-full" />
              <span className="text-[#5C5C5C] font-light text-sm">Break:</span>
              <span className="text-[#3B3B3B] font-semibold text-sm">1</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-[#99A1AF] rounded-full" />
              <span className="text-[#5C5C5C] font-light text-sm">
                Offline:
              </span>
              <span className="text-[#3B3B3B] font-semibold text-sm">2</span>
            </div>
          </div>
        </div>
        <span className="border-[0.4px] border-[#AFAFAF] h-0" />
        <div className="flex flex-col gap-3">
          <div className="flex gap-[10px]"> </div>
        </div>
      </div>
    </>
  );
};

export default AgentStatusTable;
