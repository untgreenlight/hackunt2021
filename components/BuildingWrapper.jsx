import React from "react";
import styled from "styled-components";

const BuildingWrapper = ({ Building1, Building2, children }) => {
  return (
    <Wrapper>
      <div>
        <Building1 />
      </div>
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <div>
        <Building2 />
      </div>
    </Wrapper>
  );
};
export default BuildingWrapper;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const ChildrenWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
