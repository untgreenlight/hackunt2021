import React from "react";
import styled from "styled-components";
import sponsors from "../content/sponsors.json";
import assets from "./Buildings";
import BuildingWrapper from "./BuildingWrapper";
import { Card, InverseCard } from "./Header";
import About from "./About";

const Bottom = assets.building9;

const Roundup = () => {
  return (
    <Wrapper>
      <Column>
        <InverseCard>
          <Label>HackUNT Recap</Label>
        </InverseCard>
        <StaggerColumn>
          <Card>
            <Item>Over 500 students applied</Item>
          </Card>
          <Card>
            <Item>Over 200 students competed</Item>
          </Card>
          <Card>
            <Item>Over 300 resumes delivered to sponsors</Item>
          </Card>
          <Card>
            <Item>600 Insomnia Cookies eaten</Item>
          </Card>
          <Card>
            <Item>69 pizzas consumed</Item>
          </Card>
          <Card>
            <Item>11 workshops hosted</Item>
          </Card>
          <Card>
            <Item>28 projects submitted</Item>
          </Card>
          <Card>
            <Item>Over $6,000 worth of prizes awarded</Item>
          </Card>
        </StaggerColumn>
        <br />
        <br />
        <br />
        <br />
        <InverseCard>
          <Label>2020 Winners</Label>
        </InverseCard>
        <StaggerColumn>
          <Card>
            <Item>RoadFocus</Item>
          </Card>
          <Card>
            <Item>Respec Slack Lunchbot</Item>
          </Card>
          <Card>
            <Item>OptiState</Item>
          </Card>
        </StaggerColumn>
        <br />
        <br />
        {/* </BuildingWrapper> */}
      </Column>
    </Wrapper>
  );
};
export default Roundup;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10vh;
`;

const StaggerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:nth-child(odd) {
    transform: translate(200px);
    margin: 64px 0;
  }
  > div:nth-child(even) {
    transform: translate(-200px);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.h2`
  font-size: 64px;
  text-align: center;
  z-index: 100;
  margin: 0;
`;

const Item = styled.p`
  font-size: 32px;
  margin: 0 0 16px 0;
  text-align: center;
  z-index: 100;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

const SponsorLogo = styled.div`
  display: block;
  width: 200px;
  margin: 10px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: scale(1) rotate(0deg);
  transition: transform 0.15s ease-in-out, filter 0.3s;
`;

const Bigger = styled.div`
  margin-bottom: 40px;
  > .sponsorlogo {
    width: 40vw;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
