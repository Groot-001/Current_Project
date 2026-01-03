import logo from "../assets/logo.png";
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
                  type="email"
                  id="Email"
                  placeholder="Enter Your Email or User ID"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  id="Password"
                  placeholder="************************************"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-4 border-gray-400 h-4 bg-gray-500"></div>
                  <span>Remember me</span>
                </div>
                <div>
                  <span>Forget me</span>
                </div>
              </div>
              <button className="text-white bg-blue-500 w-52">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
