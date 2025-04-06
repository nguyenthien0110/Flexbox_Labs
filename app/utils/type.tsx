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

export const typeKey = {
  display: {
    flex: "flex",
    block: "block",
  },
  flexDirection: {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-col",
    "column-reverse": "flex-col-reverse",
  },
  flexWrap: {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  },
  justifyContent: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    "space-between": "justify-between",
    "space-around": "justify-around",
    "space-evenly": "justify-evenly",
  },
  alignItems: {
    stretch: "items-stretch",
    start: "items-start",
    center: "items-center",
    end: "items-end",
    baseline: "items-baseline",
  },
  alignContent: {
    stretch: "content-stretch",
    start: "content-start",
    center: "content-center",
    end: "content-end",
    "space-between": "content-between",
    "space-around": "content-around",
  },
  gap: {
    px: "gap-px",
    "%": "gap-[var(--percent)]",
  },
};

export interface Grids {
  display: string;
  flexDirection: string;
  flexWrap: string;
  justifyContent: string;
  alignItems: string;
  alignContent: string;
  gap: string;
}

export interface Store {
  grids: Grids;
  setGrids: (store: Partial<Grids>) => void;
}

export const defaultStore: Store = {
  grids: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "start",
    alignItems: "stretch",
    alignContent: "stretch",
    gap: "0",
  },
  setGrids: () => {},
};
