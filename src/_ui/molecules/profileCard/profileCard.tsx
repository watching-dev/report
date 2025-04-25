import * as S from "./profileCard.styles";
import * as IAtoms from "../../atoms/image/image";
import * as TAtoms from "../../atoms/title/title";
import { css } from "@emotion/react";
import * as C from "./profileCard.constants";

export const ProfileCard = () => {
  const randomProfileCards = C.ProfileData.sort(() => Math.random() - 0.5);

  return (
    <S.Container>
      {randomProfileCards.map((data, index: number) => {
        console.log("data:", data);
        return (
          <S.Wrapper key={index}>
            <IAtoms.ProfileAvatar avatarUrl={data.avatarUrl} />
            <TAtoms.ProfileName text={data.name} />
            <TAtoms.ProfileDescription text={data.description} />
            <TAtoms.ProfileLearnMore
              text="LEARN MORE"
              styles={css`
                &:hover {
                  cursor: pointer;
                }
              `}
              onClick={() => {
                console.log("learn more");
              }}
            />
          </S.Wrapper>
        );
      })}
    </S.Container>
  );
};
