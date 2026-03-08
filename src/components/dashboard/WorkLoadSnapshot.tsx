const WorkLoadSnapshot = () => {
  return (
    <div className="bg-[#FFFFFF] shadow-[0px_0px_16px_0px_#0000000A] rounded-[20px] p-6 flex flex-col gap-3 ">
      <span className="font-normal text-[18px] leading-[26px] text-[#292929]">
        Workload Snapshot
      </span>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="font-light text-sm text-[#3B3B3B]">
            New Leads today
          </span>
          <span className="text-[#3B3B3B] font-medium text-base">320</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-light text-sm text-[#3B3B3B]">
            Uncontacted leads older than 24 hours
          </span>
          <span className="text-[#F54900] font-semibold text-base">45</span>
        </div>
      </div>
    </div>
  );
};

export default WorkLoadSnapshot;
