import * as S from "./fullBleed.styles";
import * as TAtoms from "../../atoms/title/title";
import { css } from "@emotion/react";
import { IFullBleed } from "./fullBleed.types";

export const FullBleed = ({ imageUrl }: IFullBleed) => {
  console.log("saa", imageUrl);
  return (
    <S.Container imageUrl={imageUrl}>
      <S.TextWrapper>
        <TAtoms.FullBleedTitle text="Sed ut perspiciatis unde omnis" />
        <TAtoms.FullBleedDescription
          text={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which \ndon't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All \nthe Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`}
          styles={css`
            margin-top: -0.56rem; /* -9px */
          `}
        />
        <S.SeparateBarWapper>
          <S.SeparateBar />
        </S.SeparateBarWapper>
        <S.SubDescriptionWrapper>
          <TAtoms.FullBleedSubDescription text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore." />
        </S.SubDescriptionWrapper>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <TAtoms.FullBleedSubscribe text="Subscribe to our netwslettter" />
      </S.ButtonWrapper>
    </S.Container>
  );
};
