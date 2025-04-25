import * as S from "./filter.styles";
import * as C from "./filter.constants";
import * as BAtoms from "../../atoms/button/button";
import * as TMolcs from "../../molecules/travelCard/travelCard";
import { useState } from "react";
import { css } from "@emotion/react";

export const Filter = () => {
  const [selectCountry, setSelectCountry] = useState("All");

  const [selectYear, setSelectYear] = useState("1300");

  return (
    <>
      <S.Container>
        <S.CountryWrapper>
          {C.CountryList.map((data, index: number) => {
            return (
              <BAtoms.CountryFilterButton
                width="100%" // 64px
                height="3.12rem" // 50px
                paddingLeft="1.56rem" // 25px
                paddingRight="1.56rem" // 25px
                radius="1.56rem" // 25px
                bgColor={selectCountry === data ? "#000000" : "transparent"}
                color={selectCountry === data ? "#ffffff" : "#000000"}
                text={data}
                key={index}
                onClick={() => setSelectCountry(data)}
              />
            );
          })}
        </S.CountryWrapper>
        <S.yearWrapper>
          {C.YearList.map((data, index: number) => {
            return data === "" ? (
              <BAtoms.YearFilterButton
                width="4.06rem" // 65px
                height="0.62rem" // 10px
                radius=""
                bgColor="#000000"
                color="#ffffff"
                text={data}
                key={index}
                styles={css`
                  &:hover {
                    cursor: default;
                  }
                `}
                onClick={() => console.log("yfilter")}
              />
            ) : (
              <BAtoms.YearFilterButton
                width="" // 64px
                height="3.12rem" // 50px
                paddingLeft="1.56rem" // 25px
                paddingRight="1.56rem" // 25px
                radius="1.56rem" // 25px
                bgColor="#000000"
                color="#ffffff"
                text={data}
                key={index}
                onClick={() => console.log("yfilter")}
              />
            );
          })}
        </S.yearWrapper>
      </S.Container>
      <TMolcs.TravelCard category={selectCountry} />
    </>
  );
};
