import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import OtpInput from "./otpInput";
import { InputOtpProps } from "@heroui/react";

const ControlledOtpInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>(
  props: Omit<
    ControllerProps<TFieldValues, TName, TTransformedValues>,
    "render"
  > &
    Omit<InputOtpProps, "length">,
) => {
  return (
    <Controller
      {...props}
      render={({ field, fieldState }) => (
        <OtpInput {...field} errorMessage={fieldState.error?.message} />
      )}
    />
  );
};

export default ControlledOtpInput;
