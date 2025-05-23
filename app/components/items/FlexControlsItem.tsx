"use client";

import { ReactNode, useState } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { useStore } from "@/app/store/useStore";
import { changeGridState } from "@/app/utils/helpers";

interface props {
  title: string;
  icon: ReactNode;
  option: string[];
  isGap?: boolean;
  toolTip?: {
    id: number;
    designation: string;
    icon: ReactNode;
  };
}

function FlexControlsItem(props: props) {
  const [valueOption, setValueOption] = useState("");
  const [gap, setGap] = useState(0);
  const state = useStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueOption(event.target.value);
    const newValue = changeGridState(
      state.grids,
      props.title,
      event.target.value
    );
    state.setGrids(newValue);
  };

  return (
    <>
      <div className="relative flex items-center my-4 h-20 mx-2 border rounded-2xl bg-[#24292d] gap-4 hover:cursor-pointer">
        <div className="text-[#b1b1b1] text-xl h-12 w-12 flex items-center justify-center bg-[#24292d] ml-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-l-xl">
          {props.icon}
        </div>
        <div className="text-amber-50 w-auto relative">
          <div>{props.title}</div>
          <div className="flex gap-1 items-center">
            {props.isGap ? (
              <input
                type="number"
                max={9999}
                value={gap}
                onChange={(e) => {
                  setGap(Number(e.target.value));
                  state.setGrids({
                    ...state.grids,
                    ["sizeGap"]: e.target.value,
                  });
                }}
                className="bg-black text-center max-w-8 rounded-lg text-sm shadow-2xl h-6 mt-2 flex justify-center no-spinners focus:outline-none"
              />
            ) : (
              <></>
            )}
            <select
              id="select-1"
              onChange={handleChange}
              value={valueOption}
              className="mt-2 py-1 px-4 pe-0 block w-full rounded-lg text-sm bg-black shadow-2xl focus:outline-none"
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
          {props.toolTip && (
            <>
              <AnimatedTooltip
                id={props.toolTip.id}
                designation={props.toolTip.designation}
                icon={props.toolTip.icon}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default FlexControlsItem;
