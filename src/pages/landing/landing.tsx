import { HeaderTitle, SectionTitle } from "../../_ui/atoms/title/title";
import * as S from "./landing.styles";
import * as PMolcs from "../../_ui/molecules/profileCard/profileCard";
import * as FMolcs from "../../_ui/molecules/fullBleed/fullBleed";
import * as FTMolcs from "../../_ui/molecules/filter/filter";
import { getFullBleedImage } from "../../api/landing/getFullBleedImage";
import { useEffect, useState } from "react";

export const Landing = () => {
  const [fullBleedImg, setFullBleedImg] = useState("");

  useEffect(() => {
    const existImage = localStorage.getItem("fullBleedImage");

    if (existImage) {
      setFullBleedImg(existImage);
    } else {
      getFullBleedImage().then((data) => {
        setFullBleedImg(data);
      });
    }
  }, []);

  const headerTitle = `Snap photos and share like \nnever before`;
  const sectionTitle = `Duis tincidunt ut ligula vitae mollis.`;

  return (
    <S.Container>
      <S.MarginGap />
      <HeaderTitle text={headerTitle} />
      <PMolcs.ProfileCard />
      <FMolcs.FullBleed imageUrl={`url('${fullBleedImg}')`} />
      <S.MarginGap />
      <SectionTitle text={sectionTitle} />
      <FTMolcs.Filter />
    </S.Container>
  );
};
