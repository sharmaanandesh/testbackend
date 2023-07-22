import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";

const LoginPage: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="h-[1080px] md:h-[781px] sm:h-[840px] p-[205px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[22%] w-[37%]">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              <div className="backdrop-opacity-[0.5] bg-deep_purple-A200_7e blur-[100.00px] h-[270px] sm:mt-0 mt-[260px] w-[44%]"></div>
              <div className="backdrop-opacity-[0.5] bg-purple-500_7e blur-[100.00px] h-[270px] mb-[260px] w-[44%]"></div>
            </div>
          </div>
          <Img
            className="absolute h-[45px] inset-x-[0] mx-auto top-[19%] w-[25px]"
            src="images/img_fire.svg"
            alt="fire"
          />
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto max-w-[856px] w-full">
            <div className="bg-gray-900_99 flex md:flex-col flex-row md:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[52px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-start justify-start pb-[7.88px] md:pr-10 sm:pr-5 pr-[75px] w-[300px]">
                  <Text
                    className="bg-clip-text bg-gradient  sm:text-2xl md:text-[26px] text-[28px] text-transparent w-auto"
                    size="txtInterMedium28"
                  >
                    Log in to fastgen
                  </Text>
                </div>
                <div className="flex flex-col gap-[7.49px] items-start justify-start mt-[22px] w-[300px] sm:w-full">
                  <Input
                    name="input"
                    placeholder="Email"
                    className="leading-[normal] p-0 placeholder:text-gray-700 sm:pr-5 text-gray-700 text-left text-xs w-full"
                    wrapClassName="border border-indigo-A100 border-solid pl-3 pr-[35px] py-[7px] rounded-[3px] w-full"
                    type="email"
                  ></Input>
                  <Input
                    name="input_One"
                    placeholder="Password"
                    className="leading-[normal] p-0 placeholder:text-gray-700 sm:pr-5 text-gray-700 text-left text-xs w-full"
                    wrapClassName="border border-gray-800 border-solid pl-3 pr-[35px] py-2 rounded-[3px] w-full"
                    type="password"
                  ></Input>
                </div>
                <Button className="bg-deep_purple-A200_01 border border-deep_purple-A200_01 border-solid cursor-pointer font-medium min-w-[300px] mt-[9px] py-2 rounded-[3px] shadow-bs1 text-[12.19px] text-center text-white-A700">
                  Log in
                </Button>
                <div className="flex flex-col items-start justify-center mt-[9px] pb-[0.25px] pl-[110.28px] pr-[110.72px] md:px-10 sm:px-5 w-[300px]">
                  <a
                    href="javascript:"
                    className="text-blue_gray-400 text-xs w-auto"
                  >
                    <Text size="txtInterMedium12">Reset password</Text>
                  </a>
                </div>
                <Button
                  className="common-pointer bg-blue_gray-900 border border-gray-800 border-solid cursor-pointer font-medium min-w-[300px] mt-[27px] py-2 rounded-[3px] shadow-bs1 text-[12.19px] text-blue_gray-100 text-center"
                  onClick={() => googleSignIn()}
                >
                  Log in with Google
                </Button>
                <Button className="bg-blue_gray-900 border border-gray-800 border-solid cursor-pointer font-medium min-w-[300px] mt-[7px] py-2 rounded-[3px] shadow-bs1 text-[12.19px] text-blue_gray-100 text-center">
                  Log in with Github
                </Button>
                <div className="flex flex-col items-start justify-center mt-[9px] pb-[0.25px] pl-[131.11px] pr-[131.89px] md:px-10 sm:px-5 w-[300px]">
                  <a
                    href="javascript:"
                    className="text-blue_gray-400 text-xs w-auto"
                  >
                    <Text size="txtInterMedium12">Sign up</Text>
                  </a>
                </div>
              </div>
              <Img
                className="h-[420px] md:h-auto object-cover"
                src="images/img_spherewebp.png"
                alt="spherewebp"
              />
            </div>
          </div>
          <div className="absolute bottom-[26%] flex flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto w-[45%]">
            <Img
              className="h-[19px] w-[75px]"
              src="images/img_logowhitesvg.svg"
              alt="logowhitesvg"
            />
            <div className="flex flex-row gap-[5.62px] items-center justify-start pl-[13.19px] pr-[16.47px] py-[8.5px] w-auto">
              <Img
                className="h-3.5 w-[17px]"
                src="images/img_star.svg"
                alt="star"
              />
              <Text
                className="text-[12.19px] text-blue_gray-100 text-center w-auto"
                size="txtInterMedium1219"
              >
                Switch to light mode
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
