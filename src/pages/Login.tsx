import logo from "../assets/logo.png";
import eye from "../assets/eye.svg";
import firstline from "../assets/Vector 636.svg";
import cicrle1 from "../assets/Ellipse 1184.svg";
import cicrle2 from "../assets/Ellipse 1186.svg";
import cicrle3 from "../assets/Ellipse 1187.svg";
import thirdline from "../assets/Vector 637.svg";
import secondline from "../assets/Vector 638 (1).svg";

const Login = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-slate-100 w-screen min-h-screen flex justify-center">
        <div>
          {/* Image Container */}
          <div className="mt-28 mb-8 w-screen flex justify-center">
            <img src={logo} alt="Brand Logo" className="w-44" />
          </div>
          <div className="w-screen flex justify-center relative">
            {/* Design images */}
            <img
              src={firstline}
              alt="firstline"
              className="absolute left-0 w-20"
            />
            <img
              src={cicrle1}
              alt="circle1"
              className="absolute w-7 left-28 top-16"
            />
            {/* Login Form */}
            <div className="bg-white w-1/3 p-6 rounded-2xl">
              <h3 className="mb-5">Log In</h3>
              <form action="login form">
                <div className="flex flex-col gap-2">
                  <label htmlFor="Email">Email / User ID</label>
                  <input
                    className="border-2 rounded-md p-1"
                    type="email"
                    id="Email"
                    placeholder="Enter Your Email or User ID"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5 relative">
                  <label htmlFor="Password">Password</label>
                  <input
                    className="border-2 rounded-md p-1"
                    type="password"
                    id="Password"
                    placeholder="*********"
                    required
                  />
                  <img
                    src={eye}
                    alt="eye logo"
                    className="w-4 absolute right-5 top-11"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="border-2 border-slate-500 mr-1 rounded-sm h-4 w-4"></div>
                    <span>Remember me</span>
                  </div>
                  <div>
                    <span className="text-[#A03879]">Forget Password?</span>
                  </div>
                </div>
                <button className="text-white bg-[#A03879] w-full p-2 mt-5 rounded-md">
                  Login
                </button>
              </form>
            </div>
          </div>
          {/* Design Images */}
          <img
            src={secondline}
            alt="secondline"
            className="absolute w-28 top-40 right-0"
          />
          <img
            src={cicrle2}
            alt="circle2"
            className="absolute w-16 bottom-52 right-14"
          />
          <img
            src={cicrle3}
            alt="circle3"
            className="absolute w-7 right-56 bottom-28"
          />
          <img
            src={thirdline}
            alt="thirdline"
            className="w-40 absolute bottom-20 left-1/3"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
