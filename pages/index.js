import About from "../components/About";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";
// import BuildingRoot from "../components/Building"
import BuildingWrapper from "../components/BuildingWrapper";
import assets from "../components/Buildings";
import styled from "styled-components";

export default function Home() {
  const BuildingLeft = assets.building7
  const BuildingRight = assets.building4
  return (
    <Wrapper>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');`}
      </style>
      <BuildingWrapper BuildingLeft={BuildingLeft} BuildingRight={BuildingRight} background={true}>
        <Header />
        <About />
        <Sponsors />
      </BuildingWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(rgba(87,138,205,1) 12%, rgba(109,60,145,1) 38%, rgba(13,1,18,1) 84%);
`

// flex: 1;
// display: flex;
// flex-direction: column;
