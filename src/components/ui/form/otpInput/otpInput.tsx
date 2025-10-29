import { InputOtp } from "@heroui/react";
import { JSX } from "react";

const OtpInput = (): JSX.Element => {
  return (
    <InputOtp
      length={5}
      variant="bordered"
      size="lg"
      classNames={{
        segmentWrapper: "gap-5 py-0",
        segment:
          "border-0 outline outline-gray-400 h-17 w-16 data-[focus=true]:outline",
        input: "!caret-black bg-red-600",
        caret: "caret-black",
      }}
      errorMessage="error"
      radius="lg"
    />
  );
};

export default OtpInput;
