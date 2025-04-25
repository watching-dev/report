import { SerializedStyles } from "@emotion/react";

export interface IButtonBase {
  width: string;
  height: string;
  radius: string;
  bgColor: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export interface IFilterButton {
  width: string;
  height: string;
  radius: string;
  bgColor: string;
  text: string;
  color: string;
  paddingLeft?: string;
  paddingRight?: string;
  styles?: SerializedStyles;
  onClick: () => void;
}
