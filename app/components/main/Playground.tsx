import clsx from "clsx";
import SquareBlock from "../items/SquareBlock";
import { useStore } from "@/app/store/useStore";
import { getStytleTailwind } from "@/app/utils/helpers";
import { LayoutGroup, motion } from "motion/react";

function Playground() {
  const state = useStore();
  console.log(state);
  return (
    <>
      <div className="h-full w-full rounded-2xl bg-[radial-gradient(#ffffff33_1px,#131417_1px)] bg-[size:24px_24px]">
        <motion.div
          layout
          className={clsx("h-full w-full p-6", getStytleTailwind(state.grids))}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              transition={{
                layout: {
                  duration: 0.8,
                },
              }}
              key={i}
              layout={true}
              layoutId={`square-${i}`}
              className="max-h-36 max-w-36 m-2"
            >
              <LayoutGroup id={i.toString()}>
                <SquareBlock index={i} />
              </LayoutGroup>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Playground;
