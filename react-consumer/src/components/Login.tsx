import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="min-h-screen bg-white md:grid md:grid-cols-2 p-6 overflow-hidden">
      <div className="">
        <div className="font-semibold">
          <span>Grampro Research Solutions</span>
          <p className="font-thin text-xs">A GBS Company</p>
        </div>
        <div className="flex h-full w-full justify-center items-center">
          <div className="flex flex-col items-start w-96">
            <span className="font-bold">Hi, Nice To See You</span>
            <form action="" className="flex flex-col w-full mt-8 gap-2">
              <label htmlFor="email" className="text-xs text-gray-400">
                Email
              </label>
              <input
                type="text"
                placeholder="john@gramproindia.com"
                id="email"
                className="border outline-none p-2 rounded-lg text-xs"
              />
              <label htmlFor="password" className="text-xs text-gray-400">
                Password
              </label>
              <input
                type="password"
                placeholder="your password"
                id="password"
                className="border outline-none p-2 rounded-lg text-xs"
              />
              <Link to="/dashboard">
                <button className="bg-blue-400 text-white p-2 rounded-lg mt-4 w-full text-xs">
                  Login
                </button>
              </Link>
              <div className="flex flex-col text-center text-xs text-blue-400 mt-4">
                <span>Forget Password?</span>
                <span className="mt-2">Don't have an Account? Register</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="login-right-bg text-white relative hidden md:block">
        <div className="glass px-6 py-4 text-sm absolute bottom-10 left-0 m-12">
          <p>
            Elevate your business to unparalleled heights with our expert
            services. We specialize in understanding the unique intricacies of
            your business, offering strategic insights and innovative approach
            in a rapidly evolving landscape.
          </p>
        </div>
      </div>
    </main>
  );
}
