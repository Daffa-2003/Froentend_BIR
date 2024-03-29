import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, CheckBox } from "../../components";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Damar galih aji pradana's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pt-[18px] gap-[78px] md:gap-[58px] sm:gap-[39px] overflow-auto bg-white-A700">
        <div className="flex flex-col items-end">
          <header className="w-[90%] md:w-full pb-[5px] md:p-5">
            <div className="flex flex-col items-center justify-center w-full mx-auto max-w-[939px]">
              <a href="Register" target="_blank" rel="noreferrer" className="self-end z-[1]">
                <Text as="p" className="!text-blue_gray-900 uppercase text-center">
                  Register
                </Text>
              </a>
              
            </div>
          </header>
        </div>
        <div className="flex flex-col items-center">
  <div className="flex flex-col items-end w-[93%] md:w-full mt-[78px] gap-[149px] md:gap-[111px] md:p-5 sm:gap-[74px]">
    <div className="flex md:flex-col justify-end items-center w-[91%] md:w-full gap-[27px]">
      <div className="flex flex-col items-center md:self-stretch px-14 py-[59px] md:p-5 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] border-green-A700 border border-solid bg-white-A700 shadow-xs flex-1">
        <Heading size="xs" as="h1" className="mt-8 !text-green-A700 text-center">
          Login to Your Account
        </Heading>
        <div className="flex justify-between items-center w-[60%] md:w-full mt-[87px] gap-5">
          <div className="h-px w-[20%] my-[7px] opacity-0.64 bg-black-900_94" />
          <div className="h-px w-[20%] opacity-0.64 bg-black-900_94" />
        </div>
        <div className="self-stretch mt-[43px]">
          <div className="flex flex-col items-start gap-[5px]">
          <div className="mt-11 pb-[9px] pr-[35px] sm:pr-5 text-green-A700 text-left text-[11px] border-b border-green-A700 border-solid">
            Name
          </div>
          <input type="Name" placeholder="Enter your Name" className="self-stretch mt-[30px] px-4 py-2 border border-green-A700 rounded bg-transparent text-green-A700 text-left text-[11px]" />
          </div>
          <div className="mt-11 pb-[9px] pr-[35px] sm:pr-5 text-green-A700 text-left text-[11px] border-b border-green-A700 border-solid">
            Password
          </div>
          <input type="password" placeholder="Enter your password" className="self-stretch mt-[30px] px-4 py-2 border border-green-A700 rounded bg-transparent text-green-A700 text-left text-[11px]" />
          <div className="flex justify-between items-center mt-[30px] gap-5">
            <CheckBox
              name="remember"
              label="Remember"
              id="remember"
              className="gap-[17px] p-px text-black-900_dd text-left text-lg"
            />
            <a href="#">
              <Text size="s" as="p" className="text-right">
                Forgot Password?
              </Text>
            </a>
          </div>
          <Button shape="round" className="w-full mt-[49px] sm:px-5">
            Continue
          </Button>
        </div>
      </div> 

              <div className="h-[485px] w-[42%] md:w-full relative">
                <div className="flex justify-end w-[90%] bottom-[0.89px] right-[0.36px] m-auto absolute">
                  <div className="h-[380px] w-full md:h-auto relative">
                    <Img src="images/img_deco.svg" alt="deco_one" className="h-[380px]" />
                    <Img
                      src="images/img_artwork_login.png"
                      alt="artworklogin"
                      className="h-[220px] w-[65%] bottom-[11%] right-0 left-0 m-auto object-cover absolute"
                    />
                  </div>
                </div>
                <Heading
                  as="h2"
                  className="w-[96%] top-[0.00px] right-0 left-0 m-auto text-center leading-[38px] absolute"
                >
                  <span className="text-green_800">
                    <>
                      Login BIR
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-900 text-7xl font-medium">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="text-black-900_89 text-xl font-medium">
                    Buku Interaktif Remaja Adalah Sebuah website yang menyediakan seputar permasalahan remaja masa kini.
                  </span>
                </Heading>
              </div>
            </div>
            <Img
              src="images/img_footer_menu.png"
              alt="footermenu_one"
              className="h-[320px] w-full md:h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
