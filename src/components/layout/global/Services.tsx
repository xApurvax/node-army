import { faqArr, repeatStringNumTimes } from "@/utils/helper";
import Image from "next/image";
import React, { useState } from "react";
import Accordion from "./Accordion";

type faqProps = {
  question: string;
  answer: string;
};

const Services = () => {
  const [openKey, setOpenKey] = useState();

  const handleToggle = (key: any) => {
    setOpenKey(openKey !== key ? key : null);
  };

  return (
    <div className="h-full w-full bg-[#0E0E0E] flex flex-col justify-center items-center">
      <div className="h-full w-full max-w-[95%] xl:max-w-[80%]">
        <div className="my-5">
          <p className="text-[45px] leading-[92%] xl:text-[120px] xl:leading-[92%] font-bold text-white">
            SERVICES
          </p>
        </div>
        <div className="flex flex-col gap-10 h-full w-full">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-[5%] justify-between w-full h-full">
            <div className="flex flex-col gap-5 xl:gap-2 h-full w-full xl:max-w-[30%]">
              <div className="flex flex-col gap-2 xl:gap-3">
                <p className="text-2xl font-bold text-white">
                  Co-Nodes<sup>®</sup>
                </p>
                <p className="text-base xl:text-lg font-normal opacity-70 text-white">
                  Collaborative staking among users to pool to achieve threshold
                  stake and operate collectively. This democratises
                  participation and allows sub-stake holders to benefit from
                  reward protocols. It also enables compounding as participants
                  can sweep earned rewards into further Co-Nodes{" "}
                </p>
              </div>
              <Image
                src="/assets/people.svg"
                width={20}
                height={18}
                alt="people-icon"
              />
            </div>
            <div className="flex flex-col gap-5 xl:gap-2 h-full w-full xl:max-w-[30%]">
              <div className="flex flex-col gap-2 xl:gap-3">
                <p className="text-2xl font-bold text-white">Managed nodes</p>
                <p className="text-base xl:text-lg font-normal opacity-70 text-white">
                  Outsource node deployment, management, and maintenance to Node
                  Army for a small commission of earned rewards. Develop a
                  passive yield portfolio with minimum time and skill
                  commitment.
                </p>
              </div>
              <Image
                src="/assets/manage.svg"
                width={20}
                height={18}
                alt="manage-icon"
              />
            </div>
            <div className="flex flex-col gap-2 h-full w-full xl:max-w-[30%]">
              <Image
                src="/assets/nodes-connect.png"
                width={410}
                height={410}
                alt="people-icon"
              />
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-white">
                  Nodes as a service
                </p>
                <p className="text-base xl:text-lg font-normal opacity-70 text-white">
                  An industrial node solution for projects requiring robust
                  decentralised node infrastructures at scale. Node Army
                  collaborates with projects during development phase and
                  through a blockchain lifecycle.
                </p>
              </div>
              <Image
                src="/assets/shield.svg"
                width={20}
                height={18}
                alt="shield-icon"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-[5%] justify-start items-start w-full h-full">
            <div className="flex justify-self-star flex-col gap-5 xl:gap-2 flex-grow-0 h-full w-full xl:max-w-[30%]">
              <div className="flex flex-col gap-2 xl:gap-3">
                <p className="text-2xl font-bold text-white">Rewards</p>
                <p className="text-base xl:text-lg font-normal opacity-70 text-white">
                  Collaborative staking among users to pool to achieve threshold
                  stake and operate collectively. This democratises
                  participation and allows sub-stake holders to benefit from
                  reward protocols. It also enables compounding as participants
                  can sweep earned rewards into further Co-Nodes{" "}
                </p>
              </div>
              <Image
                src="/assets/rewards.svg"
                width={20}
                height={18}
                alt="rewards-icon"
              />
            </div>
            <div className="flex justify-self-star flex-col gap-5 xl:gap-2 flex-grow-0 h-full w-full xl:max-w-[30%]">
              <div className="flex flex-col gap-2 xl:gap-3">
                <p className="text-2xl font-bold text-white">
                  Node build templates
                </p>
                <p className="text-base xl:text-lg font-normal opacity-70 text-white">
                  Outsource node deployment, management, and maintenance to Node
                  Army for a small commission of earned rewards. Develop a
                  passive yield portfolio with minimum time and skill
                  commitment.
                </p>
              </div>
              <Image
                src="/assets/builtin.svg"
                width={20}
                height={18}
                alt="builtin-icon"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-[5%] justify-end items-start w-full h-full">
            <div className="flex justify-self-star flex-col gap-2 flex-grow-0 h-full w-full xl:max-w-[30%]">
              <Image
                src="/assets/rack-room.png"
                width={410}
                height={410}
                alt="rack-room-icon"
              />
            </div>
            <div className="flex justify-self-star flex-col gap-5 xl:gap-2 flex-grow-0 h-full w-full xl:max-w-[30%]">
              <div className="flex flex-col gap-2 xl:gap-3">
                <p className="text-2xl font-bold text-white">Managed nodes</p>
                <p className="text-base xl:text-lg font-normal opacity-70 text-white">
                  Outsource node deployment, management, and maintenance to Node
                  Army for a small commission of earned rewards. Develop a
                  passive yield portfolio with minimum time and skill
                  commitment.
                </p>
              </div>
              <Image
                src="/assets/box.svg"
                width={20}
                height={20}
                alt="box-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full my-5 flex gap-8 justify-center items-center p-2 bg-gradient-to-r from-[#fbd29c] to-[#dad9bb] ">
        {repeatStringNumTimes.map((text: string) => (
          <>
            <p className="text-black font-extrabold whitespace-nowrap">
              {text}
            </p>
          </>
        ))}
      </div>
      <div className=" w-full h-full flex justify-start items-start">
        <p className="hidden xl:flex text-white font-normal opacity-70 whitespace-nowrap">
          FAQs
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full h-full max-w-[80%]">
          <p className="text-[45px] leading-[92%] xl:text-[120px] xl:leading-[92%] font-bold text-white uppercase">
            Frequently Asked
          </p>
        </div>
        <div className="h-full w-full py-10">
          {faqArr.map(({ question, answer }: faqProps, id: number) => (
            <div key={id}>
              <Accordion
                isOpen={id}
                name={question}
                content={answer}
                toggle={handleToggle}
                open={openKey === id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
