import Image from 'next/image';
import React, { useState } from 'react'
import classNames from 'classnames';
import { repeatStringNumTimes } from '@/utils/helper';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen)
    const coinsText = document.querySelector('#nav-icon4')
    coinsText?.classList?.toggle('open')
  }

  return (
    <div className={classNames("relative", toggle && "")}>
      <nav
        className={classNames(
          "flex justify-center items-center w-full bg-black",
          toggle ? "fixed top-0 z-[99]" : ""
        )}
      >
        <div
          className={classNames(
            "max-w-[90%] flex justify-between items-center w-full h-full py-1",
            toggle && ""
          )}
        >
          <div className="flex gap-2 justify-center items-center">
            <Link href="/">
            <Image
              src="/assets/nodearmy-logo.svg"
              width={40}
              height={40}
              alt="node-army-logo"
              />
            </Link>
            <p className="text-base text-bold text-white">
              {toggle ? "MENU" : " We're on a Mission"}
            </p>
          </div>
          <div>
            <p className="hidden xl:flex text-base text-bold text-white">
              LOGO
            </p>
            <div className="flex xl:hidden flex-col justify-center">
              <div className="relative sm:max-w-xl mx-auto">
                <nav>
                  <button
                    className="w-12 h-12 relative focus:outline-none"
                    onClick={() => {
                      toggleClass();
                      setToggle(!toggle);
                    }}
                  >
                    <div className="block w-5 absolute left-6 top-1/2 transform  -translate-x-1/2 -translate-y-1/2 z-50">
                      <span
                        className={classNames(
                          "block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out",
                          toggle ? "rotate-45" : "-translate-y-1.5"
                        )}
                      ></span>
                      <span
                        className={classNames(
                          "block absolute h-0.5 w-7 text-white bg-current transform  transition duration-300 ease-in-out",
                          toggle ? "-rotate-45" : "translate-y-1.5"
                        )}
                      ></span>
                    </div>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative">
        <div
          className={classNames(
            "xl:invisible w-full h-full flex flex-wrap flex-col justify-center items-center fixed left-0 top-[25px]",
            toggle ? "visible z-[3]" : "invisible -z-10"
          )}
        >
          <div
            className={classNames(
              "xl:invisible w-full h-full flex flex-wrap absolute left-0 top-[10px]",
              toggle ? "fixed z-[3]" : "invisible -z-10"
            )}
          >
            <span
              className={classNames(
                "absolute top-5 bg-black h-full transition before:content-[''] before:w-[150%] before:h-full before:bg-black before:absolute before:top-0 before:-left-[149%] -z-10",
                toggle
                  ? "-left-1/2 w-1/2  delay-[0s] skew-x-[45deg]"
                  : "left-0 w-0  delay-[0.3s] skew-x-0"
              )}
            ></span>
            <span
              className={classNames(
                "absolute top-5 bg-black h-full transition -z-10",
                toggle
                  ? "left-0 w-1/2  delay-[0s] skew-x-[45deg]"
                  : "left-1/4 w-0  delay-[0.3s] skew-x-0"
              )}
            ></span>
            <span
              className={classNames(
                "absolute top-5 bg-black h-full transition -z-10",
                toggle
                  ? "left-1/2 w-1/2  delay-[0s] skew-x-[45deg]"
                  : "left-1/2 w-0  delay-[0.3s] skew-x-0"
              )}
            ></span>
            <span
              className={classNames(
                "absolute top-5 bg-black h-full transition  before:content-[''] before:w-[150%] before:h-full before:bg-black before:absolute before:top-0 before:-right-[149%] -z-10",
                toggle
                  ? "left-full w-1/2  delay-[0s] skew-x-[45deg]"
                  : "lleft-3/4 w-0  delay-[0.3s] skew-x-0"
              )}
            ></span>
          </div>
          <div className="absolute top-[90%] z-[60] w-full flex gap-8 justify-center items-center p-2 bg-gradient-to-r from-[#fbd29c] to-[#dad9bb] ">
            {repeatStringNumTimes.map((text: string) => (
              <>
                <p className="text-black font-extrabold whitespace-nowrap">
                  {text}
                </p>
              </>
            ))}
          </div>
        </div>
        <div
          data-tilt
          data-tilt-perspective="2000"
          className={classNames(
            "navbar_menu will-change-transform xl:hidden",
            toggle ? "block" : "hidden"
          )}
        >
          <div
            className={classNames(
              " transform transition w-full h-full ",
              toggle
                ? "block opacity-100 -translate-y-1/3 delay-[0.45s]"
                : "hidden opacity-0 -translate-y-0 delay-[0s]"
            )}
          >
            <ul
              className={classNames(
                "transition flex flex-col gap-5 my-5 items-start w-full px-[5%] h-full ",
                toggle ? "delay-[0.45s]" : "delay-[0s]"
              )}
            >
              <li
                onClick={() => {
                  setIsNavOpen(false);
                  router.push("/genesis-pass");
                  setToggle(false);
                  const closeAfterClick = document.querySelector("#nav-icon4");
                  closeAfterClick?.classList?.remove("open");
                }}
                className="text-lg uppercase text-white"
              >
                Genesis pass
              </li>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                  router.push("/services");
                  setToggle(false);
                  const closeAfterClick = document.querySelector("#nav-icon4");
                  closeAfterClick?.classList?.remove("open");
                }}
                className="text-lg uppercase text-white"
              >
                services
              </li>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                  router.push("/projects");
                  setToggle(false);
                  const closeAfterClick = document.querySelector("#nav-icon4");
                  closeAfterClick?.classList?.remove("open");
                }}
                className="text-lg uppercase text-white"
              >
                projects
              </li>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                  router.push("/nft");
                  setToggle(false);
                  const closeAfterClick = document.querySelector("#nav-icon4");
                  closeAfterClick?.classList?.remove("open");
                }}
                className="text-lg uppercase text-white"
              >
                nft
              </li>
              <ul
                onClick={() => {
                  setIsNavOpen(false);
                  router.push("/faq");
                  setToggle(false);
                  const closeAfterClick = document.querySelector("#nav-icon4");
                  closeAfterClick?.classList?.remove("open");
                }}
                className="flex justify-between items-center w-full h-full"
              >
                <li
                  className="text-lg uppercase text-white opacity-40"
                >
                  faq
                </li>
                <li className="text-lg uppercase text-white opacity-40">
                  Coming Soon
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar