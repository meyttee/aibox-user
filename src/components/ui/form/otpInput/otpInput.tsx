import { InputOtp, InputOtpProps } from "@heroui/react";
import { JSX } from "react";

const OtpInput = ({
  length = 5,
  ...rest
}: Omit<InputOtpProps, "length"> & {
  length?: number;
}): JSX.Element => {
  return (
    <InputOtp
      size="lg"
      radius="lg"
      length={length}
      variant="bordered"
      classNames={{
        segmentWrapper: "gap-5 py-0",
        segment:
          "is-invalid h-17 w-16 border-0 text-gray-600! outline outline-gray-400 group-hover/otp-base:outline-gray-600 data-[focus=true]:outline-primary-600 data-[has-value=true]:outline-gray-600",
        input: "!caret-black",
        caret: "caret-black",
        errorMessage: "mt-2 px-2 text-xs font-light text-red-500",
        base: "group/otp-base data-[invalid=true]:[&_.is-invalid]:text-red-500! data-[invalid=true]:[&_.is-invalid]:outline-error-500",
      }}
      {...rest}
    />
  );
};

export default OtpInput;
