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
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
