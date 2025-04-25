import * as S from "./travelCard.styles";
import * as TAtom from "../../atoms/title/title";
import * as IAtoms from "../../atoms/image/image";
import { TravelData } from "./travelCard.constants";
import { css } from "@emotion/react";
import { ITravelCard } from "./travelCard.types";

export const TravelCard = ({ category }: ITravelCard) => {
  return (
    <S.Container>
      {TravelData.map((data, index: number) => {
        return category === data.category || category === "All" ? (
          <S.TravelCardWrapper key={index}>
            <S.HeaderWrapper>
              <TAtom.TravelCardNameLabel
                text={data.name}
                color="#000000"
                styles={css``}
              />
              <TAtom.TravelCardYearLabel
                text={data.year}
                color="#000000"
                styles={css``}
              />
            </S.HeaderWrapper>
            <IAtoms.ThumbNail imageUrl={data.thumbnail} />
            <TAtom.TravelCardDescriptionLabel
              text={data.description}
              color="#000000"
              styles={css`
                padding: 0rem 1.25rem 0rem 1.43rem; // 0px 20px 0px 23px
                margin-bottom: 1.43rem; // 23px
                box-sizing: border-box;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 6;
                -webkit-box-orient: vertical;
              `}
            />
          </S.TravelCardWrapper>
        ) : undefined;
      })}
    </S.Container>
  );
};
