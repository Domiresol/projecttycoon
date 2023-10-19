import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import ProjectPage from "./pages/ProjectPage";
const MainContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100%;
  position: relative;
  margin-top: 64px;
  @media screen and (max-width: 715px) {
    margin-top: 45px;
  }
  @media screen and (max-width: 360px) {
    margin-top: 40px;
  }
`;
/** 메인 콘텐츠가 담기는 사이즈 제한 콘테이너 태그 */
const ContentsWrap = styled.div`
  max-width: 1440px;
  width: 100%;
`;
function App() {
  const [userData, setUserData] = useState("");
  const handleSetUserData = useCallback((value) => {
    setUserData(value);
  }, []);
  return (
    <MainContainer>
      <Navbar userData={userData} handleSetUserData={handleSetUserData} />
      <ContentsWrap>
        <ProjectPage userData={userData} />
      </ContentsWrap>
    </MainContainer>
  );
}

export default App;
