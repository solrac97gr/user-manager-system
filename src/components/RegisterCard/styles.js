import styled from "styled-components";
import { Card } from "antd";
import { device } from "../../styles/device";

export const StyledCard = styled(Card)`
  display:flex;
  flex-direction:column;
  margin: auto;
  height: 100%;
  
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }
  @media ${device.laptop} {
    max-width: 400px;
    max-height: 400px;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  vertical-align: middle;
  align-items: center;
  align-content: center;
  justify-content:center;
`;
