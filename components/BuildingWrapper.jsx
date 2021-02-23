import React from "react";
import styled from "styled-components";

const BuildingWrapper = ({
  BuildingRight,
  BuildingLeft,
  Bottom,
  children,
  background,
  style,
  blur,
  height,
}) => {
  return background ? (
    <Wrapper style={style}>
      <BackgroundChildren>{children}</BackgroundChildren>
      <ForegroundBuilding
        style={{ zIndex: 1, filter: blur ? `blur(${blur}rem)` : undefined }}
      >
        <Building>
          {BuildingLeft && (
            <BuildingLeft style={{ position: "absolute", bottom: 0, height: `${height}vh` }} />
          )}
        </Building>
        <Building>
          <BuildingRight style={{ position: "absolute", bottom: 0, right: 0, height: `${height}vh`}} />
        </Building>
      </ForegroundBuilding>
      {Bottom && (
        <Bottom
          style={{
            position: "absolute",
            bottom: 0,
            // filter: blur ? `blur(${blur}rem)` : undefined,
            filter: .2,
          }}
        />
      )}
    </Wrapper>
  ) : (
    <Wrapper style={style}>
      <BackgroundBuilding
        style={{ filter: blur ? `blur(${blur}rem)` : undefined }}
      >
        <Building>
          {BuildingLeft && (
            <BuildingLeft style={{ position: "absolute", bottom: 0, height: `${height}vh` }} />
          )}
        </Building>
        <Building>
          <BuildingRight style={{ position: "absolute", bottom: 0, right: 0, height: `${height}vh` }} />
        </Building>
      </BackgroundBuilding>
      {Bottom && (
        <Bottom
          style={{
            position: "absolute",
            bottom: 0,
            // filter: blur ? `blur(${blur}rem)` : undefined,
            filter: `blur(.2rem)`,
          }}
        />
      )}
      <ForegroundChildren style={{ zIndex: 1 }}>{children}</ForegroundChildren>
    </Wrapper>
  );
};
export default BuildingWrapper;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  svg {
    z-index: 0;
  }
  overflow: hidden;
`;

const BackgroundChildren = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: none;
  z-index: 100;
`;

const Building = styled.div`
  width: 50%;
  position: relative;
`;

const ForegroundBuilding = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: none;
  display: flex;
  margin-left: -100%;
`;

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
  z-index: 100;
`;
