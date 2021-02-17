import React from "react";
import styled from "styled-components";
import assets from "../../assets/building";

const Header = () => {
  const RightBuilding = assets.building4;
  return (
    <Root>
      <h1>Title</h1>
      {/* <RightBuilding /> */}
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
