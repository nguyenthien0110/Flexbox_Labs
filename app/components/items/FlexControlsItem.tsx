import { ReactNode } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

interface props {
  title: string;
  icon: ReactNode;
  option: string[];
  toolTip: {
    id: number;
    designation: string;
    icon: ReactNode;
  };
}

function FlexControlsItem(props: props) {
  return (
    <>
      <div className="relative flex items-center my-4 h-20 mx-2 border rounded-2xl bg-[#24292d] gap-4 hover:cursor-pointer">
        <div className="text-[#b1b1b1] text-xl h-12 w-12 flex items-center justify-center bg-[#24292d] ml-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-l-xl">
          {props.icon}
        </div>
        <div className="text-amber-50 w-auto relative">
          <div>{props.title}</div>
          <div>
            <select
              id="select-1"
              className="mt-2 py-1 px-4 pe-0 block w-full rounded-lg text-sm bg-black shadow-2xl"
            >
              {props.option.map((option) => (
                <option
                  color="#b1b1b1"
                  className="bg-black"
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-6 w-6 text-2xl text-white absolute right-0 flex justify-center items-center mr-4 bg-[#121212] rounded-4xl inset-shadow-zinc-500">
          <AnimatedTooltip
            id={props.toolTip.id}
            designation={props.toolTip.designation}
            icon={props.toolTip.icon}
          />
        </div>
      </div>
    </>
  );
}

export default FlexControlsItem;
