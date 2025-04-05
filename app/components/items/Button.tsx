import React, { ReactNode } from "react";

interface props {
  text: string;
  icon: ReactNode;
}

function Button(props: props) {
  return (
    <>
      <div className="h-full w-full border rounded-3xl bg-gray-900">
        <div className="py-2 px-4 h-full w-auto flex justify-center items-center gap-2 text-[14px] text-[#b1b1b1] hover:text-[#fff] hover:cursor-pointer ">
          <div className="">{props.icon}</div>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Button;
