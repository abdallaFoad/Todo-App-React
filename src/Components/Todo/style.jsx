import styled from "@emotion/styled";
import { theme } from "../Config";

export const DivTodo = styled.div`
  label:DivTodo;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:.6rem auto;
  padding:.4rem;
  box-shadow: ${theme.boxShadow};
  :hover{
    box-shadow:${theme.hoverBoxShadow};
  }
`
export const H1 = styled.h1`
  label:H1;
  margin:0;
  padding:0;
  line-height: 0;
  color:${theme.blueColor};
  font-size:1rem;
  cursor: pointer;
`
export const Span = styled.span`
  label:Span;
  width:25px;
  height:25px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius:50%;
  border:2px solid ${theme.blueColor};
  cursor: pointer;
  font-weight: bold;
  transition: all .5s;
  :hover{
    border:2px solid ${theme.fontColor};

  }
`