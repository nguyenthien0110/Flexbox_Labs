import { Grids, typeKey } from "./type";

export const changeGridState = (
  grids: Grids,
  title: string,
  valueOption: string
): Partial<Grids> => {
  let key!: keyof Grids;
  switch (title) {
    case "Display":
      key = "display";
      break;
    case "Flex Direction":
      key = "flexDirection";
      break;
    case "Flex Wrap":
      key = "flexWrap";
      break;
    case "Justify Content":
      key = "justifyContent";
      break;
    case "Align Items":
      key = "alignItems";
      break;
    case "Align Content":
      key = "alignContent";
      break;
    case "Gap":
      key = "gap";
      break;
  }
  return { ...grids, [key]: valueOption };
};

export const getStytleTailwind = (grids: Grids): string => {
  let style;
  let key!: keyof Grids;
  for (key in grids) {
    const valueKey = grids[key];
    const objKey = typeKey[key];
    if (valueKey in objKey)
      style = style + " " + objKey[valueKey as keyof typeof objKey];
  }
  return style ?? "";
};
