import logo from "../assets/logo.png";
import eye from "../assets/eye.svg";
const Login = () => {
  return (
    <>
      <div className="flex justify-center bg-slate-100 min-h-screen w-screen">
        <div className="">
          <div className="mt-28 mb-8">
            <img src={logo} alt="Brand Logo" className="w-44" />
          </div>
          <div className="bg-white p-6 w-96">
            <h3 className="">Log In</h3>
            <form action="login form">
              <div className="flex flex-col">
                <label htmlFor="Email">Email / User ID</label>
                <input
                  className="border-2 rounded-md p-1"
                  type="email"
                  id="Email"
                  placeholder="Enter Your Email or User ID"
                  required
                />
              </div>
              <div className="flex flex-col relative">
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
                  className="w-4 absolute right-4 top-8"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-4 border-gray-400 h-4 bg-gray-500"></div>
                  <span>Remember me</span>
                </div>
                <div className="">
                  <span className="text-[#A03879]">Forget Password?</span>
                </div>
              </div>
              <button className="text-white bg-[#A03879] w-full p-1 rounded-md">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
