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
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-[10px]">
            <button className="rounded-full bg-[#A03879] py-[6px] px-4 text-[#FFFFFF] font-normal text-sm text-center">
              All
            </button>
            <button className="rounded-full bg-[#FFFFFF] py-[6px] px-4 border-[#BEBEBE] border-[0.4px] text-[#581F43] font-light text-sm text-center">
              Online
            </button>
            <button className="rounded-full bg-[#FFFFFF] py-[6px] px-4 border-[#BEBEBE] border-[0.4px] text-[#581F43] font-light text-sm text-center">
              On Call
            </button>
            <button className="rounded-full bg-[#FFFFFF] py-[6px] px-4 border-[#BEBEBE] border-[0.4px] text-[#581F43] font-light text-sm text-center">
              Offline
            </button>
          </div>
          <div className="pr-[15px] flex gap-3 w-full items-center justify-between">
            <div>
              <div className="rounded-[10px] p-3 flex gap-3 items-start">
                <span className="font-medium text-sm text-[#FFFFFF] bg-[#FFBDB6] rounded-full w-10 h-10 flex items-center justify-center">
                  RK
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="text-[#3B3B3B] font-normal text-sm ">
                      Rajesh Kumar
                    </span>
                    <div className="flex gap-1 items-center">
                      <span className="bg-[#2B7FFF] rounded-full w-2 h-2" />
                      <span className="font-normal text-xs text-[#8D8D8D]">
                        On Call
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8D8D8D] font-light text-xs">
                    On call now
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-[#101828] text-center">
                  38
                </span>
                <span className="font-normal text-xs text-center text-[#6A7282]">
                  Calls
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00A78F] font-semibold text-sm text-center">
                  2
                </span>
                <span className="text-[#6A7282] font-normal text-xs text-center">
                  Booked
                </span>
              </div>
            </div>
          </div>
          <div className="pr-[15px] flex gap-3 w-full items-center justify-between">
            <div>
              <div className="rounded-[10px] p-3 flex gap-3 items-start">
                <span className="font-medium text-sm text-[#FFFFFF] bg-[#FFBDB6] rounded-full w-10 h-10 flex items-center justify-center">
                  RK
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="text-[#3B3B3B] font-normal text-sm ">
                      Rajesh Kumar
                    </span>
                    <div className="flex gap-1 items-center">
                      <span className="bg-[#2B7FFF] rounded-full w-2 h-2" />
                      <span className="font-normal text-xs text-[#8D8D8D]">
                        On Call
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8D8D8D] font-light text-xs">
                    On call now
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-[#101828] text-center">
                  38
                </span>
                <span className="font-normal text-xs text-center text-[#6A7282]">
                  Calls
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00A78F] font-semibold text-sm text-center">
                  2
                </span>
                <span className="text-[#6A7282] font-normal text-xs text-center">
                  Booked
                </span>
              </div>
            </div>
          </div>
          <div className="pr-[15px] flex gap-3 w-full items-center justify-between">
            <div>
              <div className="rounded-[10px] p-3 flex gap-3 items-start">
                <span className="font-medium text-sm text-[#FFFFFF] bg-[#FFBDB6] rounded-full w-10 h-10 flex items-center justify-center">
                  RK
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="text-[#3B3B3B] font-normal text-sm ">
                      Rajesh Kumar
                    </span>
                    <div className="flex gap-1 items-center">
                      <span className="bg-[#2B7FFF] rounded-full w-2 h-2" />
                      <span className="font-normal text-xs text-[#8D8D8D]">
                        On Call
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8D8D8D] font-light text-xs">
                    On call now
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-[#101828] text-center">
                  38
                </span>
                <span className="font-normal text-xs text-center text-[#6A7282]">
                  Calls
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00A78F] font-semibold text-sm text-center">
                  2
                </span>
                <span className="text-[#6A7282] font-normal text-xs text-center">
                  Booked
                </span>
              </div>
            </div>
          </div>
          <div className="pr-[15px] flex gap-3 w-full items-center justify-between">
            <div>
              <div className="rounded-[10px] p-3 flex gap-3 items-start">
                <span className="font-medium text-sm text-[#FFFFFF] bg-[#FFBDB6] rounded-full w-10 h-10 flex items-center justify-center">
                  RK
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="text-[#3B3B3B] font-normal text-sm ">
                      Rajesh Kumar
                    </span>
                    <div className="flex gap-1 items-center">
                      <span className="bg-[#2B7FFF] rounded-full w-2 h-2" />
                      <span className="font-normal text-xs text-[#8D8D8D]">
                        On Call
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8D8D8D] font-light text-xs">
                    On call now
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-[#101828] text-center">
                  38
                </span>
                <span className="font-normal text-xs text-center text-[#6A7282]">
                  Calls
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00A78F] font-semibold text-sm text-center">
                  2
                </span>
                <span className="text-[#6A7282] font-normal text-xs text-center">
                  Booked
                </span>
              </div>
            </div>
          </div>
          <div className="pr-[15px] flex gap-3 w-full items-center justify-between">
            <div>
              <div className="rounded-[10px] p-3 flex gap-3 items-start">
                <span className="font-medium text-sm text-[#FFFFFF] bg-[#FFBDB6] rounded-full w-10 h-10 flex items-center justify-center">
                  RK
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="text-[#3B3B3B] font-normal text-sm ">
                      Rajesh Kumar
                    </span>
                    <div className="flex gap-1 items-center">
                      <span className="bg-[#2B7FFF] rounded-full w-2 h-2" />
                      <span className="font-normal text-xs text-[#8D8D8D]">
                        On Call
                      </span>
                    </div>
                  </div>
                  <span className="text-[#8D8D8D] font-light text-xs">
                    On call now
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-[#101828] text-center">
                  38
                </span>
                <span className="font-normal text-xs text-center text-[#6A7282]">
                  Calls
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00A78F] font-semibold text-sm text-center">
                  2
                </span>
                <span className="text-[#6A7282] font-normal text-xs text-center">
                  Booked
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentStatusTable;
