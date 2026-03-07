import profile from "../../assets/Ellipse 3.svg";
import { User } from "lucide-react";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";

const Profile = () => {
  return (
    <div className="rounded-[14px] bg-[#FFFAF9] shadow-[0px_0px_2px_0px_#0000004D] py-3 flex flex-col">
      <div className="px-5 py-[10px] flex flex-col gap-[7px] border-b-[1px]">
        <div className="flex gap-[10px] py-[10px]">
          <img src={profile} alt="Profilepic" className="w-11 h-11" />
          <div className="flex flex-col">
            <span className="font-normal text-base text-[#292929]">
              Sadip Khadka
            </span>
            <span className="font-normal text-[10px] leading-[14px] text-[#8D8D8D]">
              Sadipdaihoma @gmail.com
            </span>
          </div>
        </div>
        <span className="font-normal text-sm text-center text-[#FFFFFF] rounded-full bg-[#A03879] py-1 px-[26px]">
          Branch Manager
        </span>
      </div>
      <div className="border-b-[1px] flex flex-col">
        <div className="flex gap-2 py-3 px-5">
          <User size={20} />
          <span className="font-light text-sm text-[#5C5C5C]">Profile</span>
        </div>
        <div className="flex gap-2 py-3 px-5">
          <Settings size={20} />
          <span className="font-light text-sm text-[#5C5C5C]">
            Change Password
          </span>
        </div>
      </div>
      <div className="flex gap-2 py-3 px-5">
        <LogOut size={20} />
        <span className="font-light text-sm text-[#3B3B3B]">Log out</span>
      </div>
    </div>
  );
};

export default Profile;
