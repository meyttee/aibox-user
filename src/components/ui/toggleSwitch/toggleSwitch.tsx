import { Tab, Tabs, TabsProps } from "@heroui/react";
import { IToggleSwitch } from "./interface";

const ToggleSwitch = ({
  items,
  onToggleChange,
  mode,
  ...rest
}: IToggleSwitch & TabsProps) => {
  return (
    <Tabs
      variant="bordered"
      onSelectionChange={onToggleChange}
      size="sm"
      classNames={{
        base: "aria-readonly:[&>div]:outline-dashed aria-readonly:[&>div]:pointer-events-none",
        tabList:
          "outline aria-readonly:outline-dashed! outline-primary-600 border-0 p-0.5 rounded-md gap-0",
        cursor: "bg-primary-600 peer",
        tab: "px-3 py-1 hover:text-primary-600/60 data-[hover-unselected=true]:opacity-100  data-[hover-unselected=true]:bg-gray-100 data-[disabled=true]:opacity-40",
        tabContent:
          "text-primary-600/60 text-sm group-data-[selected=true]:text-white group-disabled:text-primary-600/32",
      }}
      {...rest}
    >
      {items.map(({ key, title, disabled }, index) => (
        <Tab key={key} title={title} disabled={disabled} />
      ))}
    </Tabs>
  );
};

export default ToggleSwitch;
