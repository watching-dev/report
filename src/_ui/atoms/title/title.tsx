import * as S from "./title.styles";
import { ILearnMore, IText } from "./title.types";

export const ProfileLearnMore = ({ text, styles, onClick }: ILearnMore) => {
  return (
    <S.BodyBoldLargeE css={styles} onClick={onClick} color="#18A0FB">
      {text}
    </S.BodyBoldLargeE>
  );
};

export const HeaderTitle = ({ text }: IText) => {
  return <S.HeaderLargeE>{text}</S.HeaderLargeE>;
};

export const ProfileName = ({ text }: IText) => {
  return <S.TitleBoldSmallM>{text}</S.TitleBoldSmallM>;
};

export const ProfileDescription = ({ text }: IText) => {
  return <S.BodyLargeM>{text}</S.BodyLargeM>;
};

export const FullBleedTitle = ({ text }: IText) => {
  return <S.TitleBoldSmallM>{text}</S.TitleBoldSmallM>;
};

export const FullBleedDescription = ({ text, styles }: IText) => {
  return <S.BodyLargeM css={styles}>{text}</S.BodyLargeM>;
};

export const FullBleedSubDescription = ({ text, color }: IText) => {
  return <S.BodySmallM color={color ?? ""}>{text}</S.BodySmallM>;
};

export const FullBleedSubscribe = ({ text }: IText) => {
  return <S.BodyBoldMediumE>{text}</S.BodyBoldMediumE>;
};

export const SectionTitle = ({ text }: IText) => {
  return <S.HeaderLargeE>{text}</S.HeaderLargeE>;
};

export const CountryFilterLabel = ({ text, color }: IText) => {
  return <S.BodyMediumE color={color ?? "white"}>{text}</S.BodyMediumE>;
};

export const YearFilterLabel = ({ text, color }: IText) => {
  return <S.BodySmallM color={color ?? "white"}>{text}</S.BodySmallM>;
};

export const TravelCardDescriptionLabel = ({ text, color, styles }: IText) => {
  return (
    <S.BodySmallM color={color ?? "white"} css={styles}>
      {text}
    </S.BodySmallM>
  );
};

export const TravelCardNameLabel = ({ text, color, styles }: IText) => {
  return (
    <S.BodyBoldMediumE color={color ?? "white"} css={styles}>
      {text}
    </S.BodyBoldMediumE>
  );
};

export const TravelCardYearLabel = ({ text, color, styles }: IText) => {
  return (
    <S.BodyMediumE color={color ?? "white"} css={styles}>
      {text}
    </S.BodyMediumE>
  );
};
