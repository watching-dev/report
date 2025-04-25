import styled from "@emotion/styled";
import { ITitle } from "./title.types";

export const HeaderLargeE = styled.h2`
  font-family: "Exo 2";
  font-size: var(--header-L-400-Size);
  line-height: var(--header-L-400-LineHeight);
  letter-spacing: var(--header-L-400-LetterSpacing);
  font-weight: var(--header-L-400-Weight);

  margin-left: 5rem; // 80px
  white-space: pre-wrap;

  &:hover {
    /* cursor: pointer; */
  }
`;

export const TitleBoldSmallM = styled.span`
  font-family: "Montserrat";
  font-size: var(--title-S-800-Size);
  line-height: var(--title-S-800-LineHeight);
  letter-spacing: var(--title-S-800-LetterSpacing);
  font-weight: var(--title-S-800-Weight);

  white-space: pre-wrap;

  &:hover {
    /* cursor: pointer; */
  }
`;

export const BodyLargeM = styled.span`
  font-family: "Montserrat";
  font-size: var(--body-L-400-Size);
  line-height: var(--body-L-400-LineHeight);
  letter-spacing: var(--body-L-400-LetterSpacing);
  font-weight: var(--body-L-400-Weight);

  white-space: pre-wrap;

  &:hover {
    /* cursor: pointer; */
  }
`;

export const BodyBoldLargeE = styled.span<ITitle>`
  font-family: "Exo 2";
  font-size: var(--body-L-800-Size);
  line-height: var(--body-L-800-LineHeight);
  letter-spacing: var(--body-L-800-LetterSpacing);
  font-weight: var(--body-L-800-Weight);
  color: ${(props) => props.color};

  white-space: pre-wrap;

  &:hover {
    /* cursor: pointer; */
  }
`;

export const BodyBoldMediumE = styled.span`
  font-family: "Exo 2";
  font-size: var(--body-M-800-Size);
  line-height: var(--body-M-800-LineHeight);
  letter-spacing: var(--body-M-800-LetterSpacing);
  font-weight: var(--body-M-800-Weight);

  white-space: pre-wrap;

  &:hover {
    /* cursor: pointer; */
  }
`;

export const BodyMediumE = styled.span<ITitle>`
  font-family: "Exo 2";
  font-size: var(--body-M-400-Size);
  line-height: var(--body-M-400-LineHeight);
  letter-spacing: var(--body-M-400-LetterSpacing);
  font-weight: var(--body-M-400-Weight);
  color: ${(props) => props.color};

  white-space: pre-wrap;

  &:hover {
    /* cursor: pointer; */
  }
`;

export const BodySmallM = styled.span<ITitle>`
  font-family: "Montserrat";
  font-size: var(--body-S-400-Size);
  line-height: var(--body-S-400-LineHeight);
  letter-spacing: var(--body-S-400-LetterSpacing);
  font-weight: var(--body-S-400-Weight);
  color: ${(props) => props.color};

  white-space: pre-wrap;

  &:hover {
    /* cursor: pointer; */
  }
`;
