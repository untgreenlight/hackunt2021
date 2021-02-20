import React from "react";
import styled from "styled-components";
import sponsors from "../content/sponsors.json";
import assets from "./Buildings";
import { Card } from "./Header";

const Roundup = () => {
  return (
    <Wrapper>
      <BuildingWrapper BuildingLeft={assets.building9} BuildingRight={assets.building4}>
        <Column>
          <Label>HackUNT Recap</Label>
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
          <Label>2020 Winners</Label>
          <Item>RoadFocus</Item>
          <Item>Respec Slack Lunchbot</Item>
          <Item>OptiState</Item>
          <br />
          <LogoWrapper>
            <Label>2020 Sponsors</Label>

            {/* <p>Interested in <a href='/2020_Sponsorship_Doc.pdf' style={{ color: 'rgb(49, 199, 69)', textDecoration: 'underline' }}>sponsoring</a> 2020?</p> */}
            <Bigger>
              <Logos>
                {sponsors.slice(0, 2).map((sponsor, i) => (
                  <a key={`sponsor_${i}`} href={sponsor.link}>
                    <SponsorLogo
                      style={{ backgroundImage: `url(${sponsor.image})` }}
                      alt={sponsor.name}
                    />
                  </a>
                ))}
              </Logos>
            </Bigger>

            <Label>Other Sponsors</Label>
            <Logos style={{ marginTop: 0 }}>
              {sponsors.slice(2).map((sponsor, i) => (
                <a key={`other_sponsor_${i}`} href={sponsor.link}>
                  <SponsorLogo
                    style={{ backgroundImage: `url(${sponsor.image})` }}
                    alt={sponsor.name}
                  />
                </a>
              ))}
            </Logos>
          </LogoWrapper>
          <br />
          <br />
        </Column>
      </BuildingWrapper>
    </Wrapper>
  );
};
export default Roundup;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const StaggerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
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
  max-width: 1600px;
`;

const Label = styled.h2`
  font-size: 64px;
`;

const Item = styled.p`
  font-size: 32px;
  margin: 0 0 16px 0;
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

const BuildingWrapper = styled.div``;
