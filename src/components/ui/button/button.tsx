import { Button, ButtonProps } from "@heroui/react";
import { JSX } from "react";

const CustomButton = (props: ButtonProps): JSX.Element => {
  return <Button {...props}></Button>;
};

export default CustomButton;
