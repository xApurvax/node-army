import React from 'react'

type AccordianProps = {
  name: string;
  content: string;
  toggle: (key: number) => void;
  open: boolean;
  isOpen: number,
}

const Accordion = ({ name, content, toggle, open, isOpen}: AccordianProps) => {
  return (
    <div className='h-full w-full flex flex-col justify-between items-center py-2'>
      <div className='flex flex-col justify-between items-center w-full h-full'>
          <div onClick={() => toggle(Number(isOpen))}
                className={`flex justify-between items-center w-full h-full px-[10%] ${open ? "text-white xl:text-black bg-transparent xl:bg-gradient-to-r from-[#fbd29c] to-[#dad9bb] " :"text-white"}`}>
            <p className='text-xl xl:text-3xl font-bold max-w-[85%] xl:max-w-max whitespace-normal'>{name}</p>
            <p className='text-3xl font-bold cursor-pointer'>{!open ? "+" : "-"}</p>
          </div>
          <div className={` ${open ? " max-h-[1800px] ": "max-h-[0px] " } overflow-hidden transition-all ease-in-out duration-500 px-[10%]`}>
              <p className='text-base xl:text-lg font-normal text-white opacity-80'>{content}</p>
          </div>
      </div>
    </div>
  )
}

export default Accordion