import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Root>
      <h1>Title</h1>
    </Root>
  );
};
export default Header;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
