"use client";

import AnimatedLogo from "@/components/icons/animatedLogo";

const LoginPage = () => {
  return (
    <div className="flex items-center gap-16">
      <div className="flex w-120 flex-col gap-7">
        <AnimatedLogo />
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-gray-800">
            بی‌نهایت پردازش کن
          </h2>
          <p className="text-lg font-normal text-gray-700">
            زیرساخت پردازش ابری مبتنی بر GPU با دسترسی آنی، پایداری بالا و
            هزینه‌ای مقرون‌به‌صرفه؛ طراحی‌شده برای توسعه‌دهندگان و تیم‌های هوش
            مصنوعی.
          </p>
        </div>
      </div>
      <div className="w-120 rounded-lg bg-gray-200 outline outline-gray-300">
        123
      </div>
    </div>
  );
};

export default LoginPage;
