import { IoAlertCircleOutline, IoSaveSharp } from "react-icons/io5";
import { LuLayoutGrid, LuLayoutPanelLeft, LuSettings2 } from "react-icons/lu";
import { MdEdit, MdOutlineWrapText } from "react-icons/md";
import { TbArrowLoopLeft } from "react-icons/tb";

export const menuItemsList = [
  { title: "Edit", icon: <MdEdit /> },
  { title: "Save", icon: <IoSaveSharp /> },
  { title: "Layout", icon: <LuLayoutGrid /> },
  { title: "Settings", icon: <LuSettings2 /> },
];

export const flexLayoutList = [
  {
    icon: <LuLayoutPanelLeft />,
    title: "Display",
    option: ["flex", "block"],
    toolTip: {
      id: 1,
      designation: "Defines the layout type, such as flex or block.",
      icon: <IoAlertCircleOutline />,
    },
  },
  {
    icon: <TbArrowLoopLeft />,
    title: "Flex Direction",
    option: ["row", "row-reverse", "column", "column-reverse"],
    toolTip: {
      id: 2,
      designation: "Specifies the direction of the main axis for item layout.",
      icon: <IoAlertCircleOutline />,
    },
  },
  {
    icon: <MdOutlineWrapText />,
    title: "Flex Wrap",
    option: ["nowrap", "wrap", "wrap-reverse"],
    toolTip: {
      id: 3,
      designation:
        "Determines whether items wrap onto multiple lines or stay on one line.",
      icon: <IoAlertCircleOutline />,
    },
  },
];
