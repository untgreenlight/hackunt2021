import React, { useState } from "react";
import styled from "styled-components";
import { Card, InverseCard } from "../Header";
// import BuildingWrapper from "../BuildingWrapper";
// import assets from "../Buildings"


const About = () => {
  const [value, setValue] = useState("");

  return (
      <Root>
        <Wrapper>
        <InverseCard>
          <Label>What is HackUNT?</Label>
        </InverseCard>
        <Container>
          <StyledCard>
            <Paragraph>
              HackUNT is the University of North Texas' annual hackathon. A hackathon is a 24-hour development competition for coders, designers, and anyone with a good idea! Don't worry if you aren't experienced either, HackUNT is a great place to learn! We will have mentors and professionals from the industry to help along the way.
            </Paragraph>
          </StyledCard>
          <StyledCard>
            <Label>We've gone virtual!</Label>
          </StyledCard>
        </Container>
        </Wrapper>
      </Root>
  );
};
export default About;

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
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: large;
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-items: center;
  justify-content: center;
`
const Label = styled.h2`
  font-size: 64px;
  text-align: center;
  z-index: 100;
  margin: 0;
`;

const StyledCard = styled(Card)`
  max-width: 50%;
`