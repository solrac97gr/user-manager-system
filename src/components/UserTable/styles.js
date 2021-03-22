import styled from "styled-components";
import { Table } from "antd";
import { device } from "../../styles/device";

export const StyledTable = styled(Table)`
  margin: auto;
  height: 100%;
  margin-top: 100px;
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }
  @media ${device.laptop} {
    max-width: 80%;
    max-height: 350px;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  vertical-align: middle;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
