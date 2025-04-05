import { FaEquals } from "react-icons/fa";
import { IoAlertCircleOutline, IoSaveSharp } from "react-icons/io5";
import {
  LuAlignHorizontalJustifyStart,
  LuAlignVerticalJustifyCenter,
  LuAlignVerticalJustifyEnd,
  LuLayoutGrid,
  LuLayoutPanelLeft,
  LuSettings2,
} from "react-icons/lu";
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
  {
    icon: <LuAlignHorizontalJustifyStart />,
    title: "Justify Content",
    option: [
      "start",
      "center",
      "end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    toolTip: {
      id: 4,
      designation:
        "Aligns items along the main axis, controlling horizontal spacing.",
      icon: <IoAlertCircleOutline />,
    },
  },
  {
    icon: <LuAlignVerticalJustifyEnd />,
    title: "Align Items",
    option: ["stretch", "start", "center", "end", "baseline"],
    toolTip: {
      id: 5,
      designation:
        "Aligns items along the cross axis, affecting vertical alignment.",
      icon: <IoAlertCircleOutline />,
    },
  },
  {
    icon: <LuAlignVerticalJustifyCenter />,
    title: "Align Content",
    option: [
      "stretch",
      "start",
      "center",
      "end",
      "space-between",
      "space-around",
    ],
    toolTip: {
      id: 6,
      designation:
        "Defines the spacing between flex lines when wrapping occurs.",
      icon: <IoAlertCircleOutline />,
    },
  },
  {
    icon: <FaEquals />,
    title: "Gap",
    option: ["px", "%"],
    isGap: true,
    toolTip: {
      id: 7,
      designation:
        "Specifies the spacing between flex items within the container.",
      icon: <IoAlertCircleOutline />,
    },
  },
];
