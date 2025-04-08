import clsx from "clsx";
import { ReactNode, useState } from "react";
import { motion } from "motion/react";

interface props {
  icon: ReactNode;
  active?: boolean | false;
  isButton?: boolean | false;
  isCollapse?: boolean | false;
}

function MenuItem(props: props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen((pre) => !pre);
  };
  return (
    <>
      <div
        className={clsx(
          `flex items-center justify-center my-1 h-10 w-10 text-2xl hover:cursor-pointer`,
          props.active ? "bg-[#434752] text-white rounded-lg" : undefined,
          props.isButton ? "text-white" : "text-gray-600 hover:text-white"
        )}
      >
        {props.isCollapse ? (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            onAnimationComplete={() => setIsAnimating(false)}
            className="flex justify-center w-16 h-auto"
            onClick={handleClick}
          >
            {props.icon}
          </motion.div>
        ) : (
          <>
            <span className="hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              {props.icon}
            </span>
          </>
        )}
      </div>
    </>
  );
}

export default MenuItem;
