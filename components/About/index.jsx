import React, { useState } from "react";
import styled from "styled-components";

const About = () => {
  const [value, setValue] = useState("");
  return (
    <Root>
      <h1>About</h1>
      <p>{value}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Root>
  );
};
export default About;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
