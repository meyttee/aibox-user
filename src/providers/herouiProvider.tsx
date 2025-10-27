"use client";

import { HeroUIProvider } from "@heroui/react";

const HerouiProvider = ({ children }: { children: React.ReactNode }) => (
  <HeroUIProvider>{children}</HeroUIProvider>
);

export default HerouiProvider;
