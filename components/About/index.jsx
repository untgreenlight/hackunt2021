import React, { useState } from "react";
import styled from "styled-components";
import BuildingWrapper from "../BuildingWrapper";
import assets from "../Buildings"


const About = () => {
  const [value, setValue] = useState("");

  return (
      <Root>
        <BuildingWrapper BuildingLeft={assets.building2} BuildingRight={assets.building1} background={false}>
        <Container>
          <Card>
            <Paragraph>
              HackUNT is the University of North Texas' annual hackathon. A hackathon is a 24-hour development competition for coders, designers, and anyone with a good idea! Don't worry if you aren't experienced either, HackUNT is a great place to learn! We will have mentors and professionals from the industry to help along the way.
            </Paragraph>
          </Card>
        </Container>
        </BuildingWrapper>
      </Root>
  );
};
export default About;

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10vh;
`;

const Paragraph = styled.p`
  font-size: large;
`

const Card = styled.div`
  padding: 30px;
  background-color: #C38ECD;
  box-shadow: 10px 10px #a455b4;
  margin: 20px;
  width: 30%;
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-items: center;
  justify-content: center;
`
