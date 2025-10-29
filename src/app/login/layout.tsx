"use client";
import { useChangeTheme } from "@/hooks";
import { Button } from "@heroui/react";
import { PropsWithChildren } from "react";

const Layout = ({ children }: Readonly<PropsWithChildren>) => {
  const { changeThemeHandler, theme } = useChangeTheme();
  return (
    <>
      <div className="absolute flex w-full items-center justify-between p-6">
        <p>logo</p>
        <div className="flex items-center gap-2">
          <Button isIconOnly onPress={() => changeThemeHandler()}>
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>
          <p>button</p>
        </div>
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-background-100">
        {children}
      </div>
    </>
  );
};

export default Layout;
