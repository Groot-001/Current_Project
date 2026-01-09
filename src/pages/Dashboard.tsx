import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.svg";
import minimize from "../assets/minimize.svg";
import bell from "../assets/bell.svg";
import profileimage from "../assets/short image.svg";
import down from "../assets/chevron-down.svg";

const Dashboard = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-slate-100 min-h-screen">
        {/* Header */}
        <div className="flex justify-between px-8 py-4">
          <div className="flex justify-center">
            <img src={logo} alt="Logo Image" className="w-44 mx-3" />
            <img src={hamburger} alt="hamburger icon" className="w-6" />
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-around items-center gap-6 mx-3">
              <img src={minimize} alt="minimize icon" className="w-4" />
              <img
                src={bell}
                alt="bell"
                className="w-6 h-7 p-1 rounded-md bg-[#FFF1EF]"
              />
              <div className="bg-[#FF6F61] rounded-lg w-7 h-4 text-white absolute top-6 right-32 text-xs flex justify-center px-1">
                <span>99+</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#FFF1EF] rounded-3xl p-1">
              <img src={profileimage} alt="profile icon" className="w-8" />
              <img src={down} alt="Down Arrow" className="w-5 mx-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
