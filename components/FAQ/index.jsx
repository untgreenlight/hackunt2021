import React from "react";
import styled from "styled-components";
import sponsors from "../../content/sponsors.json";
import { Card, InverseCard } from "../Header";

const FAQ = () => {
  return (
    <Root>
      <Wrapper>
        <InverseCard>
          <Label>FAQs</Label>
        </InverseCard>
        <Row>
            <StyledCard>
                <SmolLabel>What is a Hackathon?</SmolLabel>
                <Paragraph>A Hackathon is a programming marathon, where teams of 1-4 put their ideas together to create something exciting in only 24 hours. It gives teams of creators a chance to turn their ideas into reality.</Paragraph>
            </StyledCard>
            <StyledCard>
                <SmolLabel>How long is HackUNT?</SmolLabel>
                <Paragraph>HackUNT 2021 is from Saturday March 13th to Sunday March 14th. Students will be hacking for 24 hours.</Paragraph>
            </StyledCard>
            <StyledCard>
                <SmolLabel>Who can attend?</SmolLabel>
                <Paragraph>To attend as a hacker, you need to be a student and at least 18 years old. If you're not 18 yet, go check out <a class="green" href="https://hacktams.org">hackTAMS</a>!</Paragraph>
            </StyledCard>
            <StyledCard>
                <SmolLabel>Who is accepted?</SmolLabel>
                <Paragraph>UNT students get automatic acceptance. Applicants from other schools will get randomly selected. Don't worry if you haven't heard back, we send out acceptances in waves.</Paragraph>
            </StyledCard>
            <StyledCard>
                <SmolLabel>Any Rules?</SmolLabel>
                <Paragraph>All work must be done at HackUNT 2021. We also adhere by MLH's Code of Conduct, which you can find here.</Paragraph>
            </StyledCard>
            <StyledCard>
                <SmolLabel>Got more questions?</SmolLabel>
                <Paragraph>Reach out to us at <a class="green" href="mailto:officialhackunt@gmail.com">officialhackunt@gmail.com</a> with your questions!</Paragraph>
            </StyledCard>
            <StyledCard>
                <SmolLabel>What about COVID?</SmolLabel>
                <Paragraph>HackUNT 2021 is completely virtual this year! But don't worry, there will be plenty of opportunities to engage with other hackers and mentors at the event!</Paragraph>
            </StyledCard>
        </Row>
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

const StyledCard = styled(Card)`
    max-width: 40%;
`

const Paragraph = styled.p`
  font-size: large;
`

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

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    flex-wrap: wrap;
    justify-content: center;
`

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

const SmolLabel = styled.h2`
  font-size: 30px;
  text-align: center;
  z-index: 100;
  margin: 0;
`;

export default FAQ;
