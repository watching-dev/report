import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 2.5rem; // 40px
  padding-left: 5rem; // 80px
  margin-top: 4.25rem; // 68px
  box-sizing: border-box;
  overflow: scroll;
  margin-bottom: 5rem; // //80px

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TravelCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26rem; // 400px -> 416px
  height: 27.93rem; // 415px -> 446.88px
  border-radius: 1.56rem; // 10px
  background-color: #d9d9d9;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.93rem 1.56rem 0.56rem 1.43rem; // 15px 25px 9px 23px
  box-sizing: border-box;
`;
