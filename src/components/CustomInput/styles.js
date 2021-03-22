import styled from "styled-components";
import { Input as InputAnt } from "antd";

export const Input = styled(InputAnt)`
  border: none;
  border-bottom: 2px solid #3b6cb3;
  margin-bottom:5px;
  &:focus {
    border:none;
    outline: none !important;
  }
`;
