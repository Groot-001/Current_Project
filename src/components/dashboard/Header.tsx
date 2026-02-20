import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.svg";
import minimize from "../../assets/minimize.svg";
import bell from "../../assets/bell.svg";
import profileimage from "../../assets/short image.svg";
import down from "../../assets/chevron-down.svg";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-10 pt-5 pb-[10px] border-b-[0.6px] border-[#EBEBEB] bg-[#FFFFFF] ">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Logo Image" className="w-[169px] h-[66px]" />
          <img src={hamburger} alt="hamburger icon" className="w-6 h-6" />
        </div>

        <div className="flex items-center gap-[32px] relative">
          <img src={minimize} alt="minimize icon" className="w-5 h-5" />
          <div className="rounded-lg p-2 bg-[#FFF1EF]">
            <img src={bell} alt="bell" className="w-5 h-5" />
            <div className="bg-[#FF6F61] rounded-[20px] py-[2px] px-[6px] absolute top-[8px] left-[68px] flex items-center">
              <span className="text-[#FFFFFF] font-medium text-[10px] leading-3">
                99+
              </span>
            </div>
          </div>
          {/* Third image */}
          <div className="flex p-[6px] gap-[10px] bg-[#FFF1EF] rounded-full items-center">
            <img
              src={profileimage}
              alt="profile icon"
              className="w-[42px] h-[42px]"
            />
            <img src={down} alt="Down Arrow" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
