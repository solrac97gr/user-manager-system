import styled from "styled-components";
import { Card } from "antd";
import { device } from "../../styles/device";

export const StyledCard = styled(Card)`
  margin: auto;
  height: 100%;
  background-color:white;
  
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }
  @media ${device.laptop} {
    max-width: 400px;
    max-height: 500px;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  vertical-align: middle;
  align-items: center;
  align-content: center;
`;
