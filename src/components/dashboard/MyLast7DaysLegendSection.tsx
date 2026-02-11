import green_surface from "../../assets/green surface.svg";
import pink_surface from "../../assets/pink surface.svg";

const MyLast7DaysLegendSection = () => {
  return (
    <>
      <div className="flex gap-[10px]">
        <div className="flex">
          <img
            src={pink_surface}
            alt="Pink Surface icon"
            className="w-[14px] h-[14px]"
          />
          <span className="font-normal text-xs tracking-normal text-center text-[#9B2972]">
            Calls Logged
          </span>
        </div>

        <div className="flex">
          <img
            src={green_surface}
            alt="Green Surface Icon"
            className="w-[14px] h-[14px]"
          />
          <span className="font-normal text-xs tracking-normal text-center text-[#00A78F]">
            L1 Booked
          </span>
        </div>
      </div>
    </>
  );
};

export default MyLast7DaysLegendSection;
