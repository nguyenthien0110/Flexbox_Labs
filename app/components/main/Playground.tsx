import clsx from "clsx";
import SquareBlock from "../items/SquareBlock";
import { useStore } from "@/app/store/useStore";
import { getStytleTailwind } from "@/app/utils/helpers";

function Playground() {
  const state = useStore();
  console.log(state);
  return (
    <>
      <div className="h-full w-full rounded-2xl bg-[radial-gradient(#ffffff33_1px,#131417_1px)] bg-[size:24px_24px]">
        <div
          className={
            (clsx(`h-full w-full p-6`), getStytleTailwind(state.grids))
          }
        >
          <SquareBlock index={1} />
          <SquareBlock index={2} />
          <SquareBlock index={3} />
        </div>
      </div>
    </>
  );
}

export default Playground;
