import logo from "../assets/logo.png";
const Login = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-32 ">
          <div className="justify-center items-center">
            <img src={logo} alt="Brand Logo" className="w-64" />
          </div>
          <h3 className="">Log In</h3>
          <form action="login form">
            <div>
              <label htmlFor="Email">Email / User Id</label>
              <input type="email" placeholder="Enter Your Email or User ID" />
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <input type="password" placeholder="**********" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
