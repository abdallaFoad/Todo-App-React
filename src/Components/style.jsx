import styled from '@emotion/styled';
import { theme } from './Config';

export const Parent = styled.div`
  label: Parent;
  border-radius: 8px;
  margin:1rem auto;
  width:60%;
  min-height:80vh;
  box-shadow:${theme.boxShadow};
  border-radius: 8px;
  padding:2rem;
  position:relative;
`
export const Buttons = styled.div`
  label:Buttons;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:2rem;
  margin-top:2rem;
`
export const Button = styled.button`
  label:Button;
  border:none;
  outline:none;
  transition: all .5s;
  background-color:white;
  border-radius: 30%;
  padding:.6rem .8rem;
  color:${theme.blueColor};
  box-shadow: ${theme.boxShadow};
  font-size:1.2rem;
  cursor: pointer;
  :hover{
    box-shadow: ${theme.hoverBoxShadow};
  }
`
export const ButtonRemove = styled.button`
  label:ButtonRemove;
  border:none;
  outline:none;
  transition: all .5s;
  background-color:white;
  border-radius: 30%;
  padding:.6rem .8rem;
  color:${theme.blueColor};
  box-shadow: ${theme.boxShadow};
  margin-right:0;
  font-size:1.2rem;
  cursor: pointer;
  position: absolute;
    right: 2rem;
    bottom: 2rem;
  :hover{
    box-shadow: ${theme.hoverBoxShadow};
  }
`