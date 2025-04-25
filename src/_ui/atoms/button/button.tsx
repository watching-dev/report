import * as S from "./button.styles";
import { IFilterButton } from "./button.types";
import * as TAtoms from "../../atoms/title/title";

export const YearFilterButton = ({
  width,
  height,
  radius,
  bgColor,
  text,
  color,
  styles,
  onClick,
}: IFilterButton) => {
  return (
    <S.ButtonBase
      width={width}
      height={height}
      radius={radius}
      bgColor={bgColor}
      onClick={onClick}
      css={styles}
    >
      <TAtoms.YearFilterLabel text={text} color={color} />
    </S.ButtonBase>
  );
};

export const CountryFilterButton = ({
  width,
  height,
  radius,
  bgColor,
  text,
  color,
  paddingLeft,
  paddingRight,
  onClick,
}: IFilterButton) => {
  return (
    <S.ButtonBase
      width={width}
      height={height}
      radius={radius}
      bgColor={bgColor}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      onClick={onClick}
    >
      <TAtoms.CountryFilterLabel text={text} color={color} />
    </S.ButtonBase>
  );
};
