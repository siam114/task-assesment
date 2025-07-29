"use client";

import Lottie from "lottie-react";
import signupLottieData from "../../assets/lottie/signup.json";

const SignUpPage = () => {
  return (
    <section className="w-full h-screen flex font-sans">
      {/* Left Section (Illustration) */}
      <div className="w-1/2 h-full bg-gradient-to-br bg-[#040612] flex items-center justify-center">
        <Lottie className="w-[80%]" animationData={signupLottieData}></Lottie>

      </div>

      {/* Right Section (Form) */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-[80%] max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-center">Sign Up</h2>
          <p className="text-gray-500 mb-6 text-center">To Create Account, Please Fill in the Form Below.</p>

          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="Retype password"
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            <span>Or</span>
            <br />
            <span>
              Already have an account?{' '}
              <a href="#" className="text-black font-medium hover:underline">
                Log in
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
