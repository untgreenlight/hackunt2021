import React from "react";
import styled from "styled-components";
import Image from "next/image"

const BuildingWrapper = ({ BuildingRight, BuildingLeft, children }) => {
  return (
    <Wrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Foreground>
          <Building>
            <BuildingLeft style={{ position: 'absolute', bottom: 0,}}/>
          </Building>
          <Building>
            <BuildingRight style={{ position: 'absolute', bottom: 0,}}/>
          </Building>
      </Foreground>
  </Wrapper>
  );
};
export default BuildingWrapper;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const ChildrenWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: none;
`;

const Building = styled.div`
  width: 50%;
  position: relative;
`

const Foreground = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: none;
  display: flex;
  margin-left: -100%;
`