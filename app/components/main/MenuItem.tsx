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
          `flex items-center justify-center my-1 h-10 w-10 text-2xl rounded-lg hover:cursor-pointer`,
          props.active ? "bg-[#434752] text-white" : undefined,
          props.isButton ? "text-white" : "text-gray-600 hover:text-white"
        )}
      >
        {props.icon}
      </div>
    </>
  );
}

export default MenuItem;
