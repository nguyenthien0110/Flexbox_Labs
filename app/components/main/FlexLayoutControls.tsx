import FlexControlsItem from "../items/FlexControlsItem";
import { flexLayoutList } from "@/app/utils/type";

function FlexLayoutControls() {
  return (
    <>
      <div className="w-full pt-4 relative overflow-y-auto no-scrollbar">
        {flexLayoutList.map((layout, index) => (
          <FlexControlsItem
            key={index}
            icon={layout.icon}
            title={layout.title}
            option={layout.option}
            toolTip={layout.toolTip}
          />
        ))}
      </div>
    </>
  );
}

export default FlexLayoutControls;
