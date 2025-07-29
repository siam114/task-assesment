"use client";
import loginLottieData from "../../assets/lottie/login.json";
import Lottie from "lottie-react";



const LoginPage = () => {
  return (
    <section className="w-full h-screen flex">
      {/* Left Section (Image/Illustration) */}
      <div className="w-[50%] h-full bg-[#040612] flex items-center justify-center">
        <Lottie className="w-[80%]" animationData={loginLottieData}></Lottie>
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-[80%] max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-center">Login</h2>
          <p className="text-gray-500 mb-6 text-center">
            Welcome back, Please enter your details to Log In.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="m32220@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="********"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-green-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-green-500 transition"
            >
              Log In
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 pt-2">
              <span>Don't have an account?</span>
              <a href="#" className="text-black font-medium hover:underline">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
