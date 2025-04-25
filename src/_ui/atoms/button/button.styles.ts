import styled from "@emotion/styled";
import { IButtonBase } from "./button.types";

export const ButtonBase = styled.button<IButtonBase>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.bgColor};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  &:hover {
    cursor: pointer;
  }
`;
