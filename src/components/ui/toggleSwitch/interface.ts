import { Key } from "react";

interface IToggleSwitch {
  onToggleChange: (key: Key) => void;
  items: { key: Key; title: string; disabled?: boolean }[];
  mode: "normal" | "on/off";
}

export type { IToggleSwitch };
