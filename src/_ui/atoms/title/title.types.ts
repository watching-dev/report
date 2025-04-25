import { SerializedStyles } from "@emotion/react";

export interface IText {
  text: string;
  styles?: SerializedStyles;
  color?: string;
}

export interface ILearnMore {
  text: string;
  styles?: SerializedStyles;
  onClick?: () => void;
}

export interface ITitle {
  color: string;
}
