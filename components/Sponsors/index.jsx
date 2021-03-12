import React from "react";
import styled from "styled-components";
import sponsors from "../../content/sponsors.json";
import { Card, InverseCard } from "../Header";

const recap21 = () => (
  <>
  <LogoWrapper>
        <InverseCard>
          <Label>2020 Title Sponsors</Label>
        </InverseCard>

        <Bigger>
          <Logos>
            {sponsors.slice(0, 2).map((sponsor, i) => (
              <Card>
                <a key={`sponsor_${i}`} href={sponsor.link}>
                  <SponsorLogo
                    style={{ backgroundImage: `url(${sponsor.image})` }}
                    alt={sponsor.name}
                  />
                </a>
              </Card>
            ))}
          </Logos>
        </Bigger>
      </LogoWrapper>
      <br />
      <LogoWrapper>
        <InverseCard>
          <Label>2020 Sponsors</Label>
        </InverseCard>
        <Logos style={{ marginTop: 0 }}>
          {sponsors.slice(2).map((sponsor, i) => (
            <Card>
              <a key={`other_sponsor_${i}`} href={sponsor.link}>
                <SponsorLogo
                  style={{ backgroundImage: `url(${sponsor.image})` }}
                  alt={sponsor.name}
                />
              </a>
            </Card>
          ))}
        </Logos>
      </LogoWrapper>
    </>
)

const Sponsors = () => {
  return (
    <Root>
      <LogoWrapper>{/* </BuildingWrapper> */}</LogoWrapper>
      <LogoWrapper>
        <InverseCard>
          <Label>2021 Sponsor</Label>
        </InverseCard>
        <Bigger>
          <Logos>
              <Card>
                <a key={`streamsum`} href={'https://www.streamsum.com/'} target='blank'>
                  <SponsorLogo
                    style={{ backgroundImage: `url(/sponsors/streamsum.png)` }}
                    alt={'StreamSum'}
                  />
                </a>
              </Card>
          </Logos>
          <Card>
            <Paragraph>
              StreamSum is a Dallas based live stream analytics and advertising company, helping brands reach streamers easier and enabling content creators to earn passive income doing what they love.
            </Paragraph>
          </Card>
        </Bigger>
      </LogoWrapper>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh;
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

const Label = styled.h2`
  font-size: 64px;
  text-align: center;
  z-index: 100;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 24px;
`

export default Sponsors;
