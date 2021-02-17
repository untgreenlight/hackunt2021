import About from "../components/About";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";
import BuildingRoot from "../components/Building"
import BuildingWrapper from "../components/BuildingWrapper";
import assets from "../assets/building";
import styled from "styled-components";

export default function Home() {
  const BuildingLeft = assets.building3
  const BuildingRight = assets.building4
  return (
    <Wrapper>
      <BuildingWrapper Building1={BuildingLeft} Building2={BuildingRight}>
        <Header />
        <About />
        <Sponsors />
      </BuildingWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
