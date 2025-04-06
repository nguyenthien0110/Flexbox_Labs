import clsx from "clsx";
import { ReactNode } from "react";

interface props {
  icon: ReactNode;
  active?: boolean | false;
  isButton?: boolean | false;
}

function MenuItem(props: props) {
  return (
    <>
      <div
        className={clsx(
          `flex items-center justify-center my-1 h-10 w-10 text-2xl hover:cursor-pointer`,
          props.active ? "bg-[#434752] text-white rounded-lg" : undefined,
          props.isButton ? "text-white" : "text-gray-600 hover:text-white"
        )}
      >
        <span className="hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          {props.icon}
        </span>
      </div>
    </>
  );
}

export default MenuItem;
