import React, { ReactNode } from "react";

interface props {
  text: string;
  icon: ReactNode;
  onclick: () => void;
}

function Button(props: props) {
  return (
    <>
      <div
        onClick={() => props.onclick()}
        className="h-full w-full border rounded-3xl bg-gray-900 hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)]"
      >
        <div className="py-2 px-4 h-full w-auto flex justify-center items-center gap-2 text-[14px] text-[#b1b1b1] hover:text-[#fff] hover:cursor-pointer">
          <div className="">{props.icon}</div>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Button;
