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
        <div className="flex justify-between px-10 py-4">
          <div className="flex justify-center">
            <img src={logo} alt="Logo Image" className="w-44 mx-3" />
            <img src={hamburger} alt="hamburger icon" className="w-6" />
          </div>
          <div className="flex justify-center gap-5">
            <img src={minimize} alt="minimize icon" className="w-5" />
            <img src={bell} alt="bell" className="w-4" />
            <div className="bg-[#FF6F61] rounded-lg w-8 h-4 text-white text-xs">
              99+
            </div>
            <img src={profileimage} alt="profile icon" className="w-4" />
            <img src={down} alt="Down Arrow" className="w-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
