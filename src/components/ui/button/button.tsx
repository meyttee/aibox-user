import { Button, ButtonProps } from "@heroui/button";
import { JSX } from "react";

const CustomButton = (props: ButtonProps): JSX.Element => {
  return <Button {...props}></Button>;
};

export default CustomButton;
