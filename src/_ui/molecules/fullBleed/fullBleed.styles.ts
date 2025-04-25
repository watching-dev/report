import styled from "@emotion/styled";
import { IFullBleed } from "./fullBleed.types";

export const Container = styled.div<IFullBleed>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 46.25rem; // 740px
  gap: 5.93rem; // 95px
  margin-top: 6.87rem; // 110px
  background-size: cover;
  background-image: ${(props) => props.imageUrl};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; // 32px
  margin-top: 9.5rem; // 152px
  /* padding: 0 5rem; // 80px */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem; // 16px
`;

export const SubDescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2.68rem; // 43px
`;

export const SeparateBarWapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1px;
`;

export const SeparateBar = styled.div`
  width: 95rem; // 1520px
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
`;
