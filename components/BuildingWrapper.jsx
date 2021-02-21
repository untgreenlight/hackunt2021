import React from "react";
import styled from "styled-components";
import Image from "next/image"

const BuildingWrapper = ({ BuildingRight, BuildingLeft, children, background }) => {
  return (
    background ?
    <Wrapper>
        <BackgroundChildren>{children}</BackgroundChildren>
        <ForegroundBuilding style={{ zIndex: 1}}>
            <Building>
              <BuildingLeft style={{ position: 'absolute', bottom: 0,}}/>
            </Building>
            <Building>
              <BuildingRight style={{ position: 'absolute', bottom: 0, }}/>
            </Building>
        </ForegroundBuilding>
    </Wrapper>
    :
    <Wrapper>
        <BackgroundBuilding>
            <Building>
              <BuildingLeft style={{ position: 'absolute', bottom: 0,}}/>
            </Building>
            <Building>
              <BuildingRight style={{ position: 'absolute', bottom: 0, }}/>
            </Building>
        </BackgroundBuilding>
        <ForegroundChildren style={{ zIndex: 1}}>{children}</ForegroundChildren>
    </Wrapper>
  );
};
export default BuildingWrapper;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const BackgroundChildren = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: none;
`;

const Building = styled.div`
  width: 50%;
  position: relative;
`

const ForegroundBuilding = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: none;
  display: flex;
  margin-left: -100%;
`

const BackgroundBuilding = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: none;
  display: flex;
`;

const ForegroundChildren = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: none;
  margin-left: -100%;
`;
