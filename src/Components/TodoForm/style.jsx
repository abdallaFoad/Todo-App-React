import styled from '@emotion/styled';
import {theme} from '../Config';

export const TodoPar = styled.div`
  label:TodoPar;
  `
export const Content = styled.div`
  label:Content;
`
export const Head = styled.div`
  label:Head;
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin: 0  0 2rem 0 ;
`

export const H2 = styled.h2`
  label:H2;
  text-align:left;
  color:${theme.colorLogo};
  font-family:   'Arial Narrow';
  font-weight: bold;
  font-size: 2rem;
`
export const Form = styled.form`
  label:Form;
  margin:1rem auto;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:1rem;
`
export const Input = styled.input`
  label:Input;
  width:100%;
  padding:.9rem;
  border:none;
  outline: none;
  box-shadow: ${theme.boxShadow};
  caret-color:${theme.blueColor};
  color:${theme.blueColor};
  transition:all .5s;
  font-size:1.5rem;
  ::placeholder{
    font-size:1.5rem;
    color:${theme.colorLogo};
  }
  :hover{
    box-shadow: ${theme.hoverBoxShadow};
  }
`
export const Button = styled.input`
  label:Button;
  background-color: ${theme.blueColor};
  color:white;
  padding:.9rem .9rem;
  border:none;
  outline: none;
  font-size:1.5rem;
  cursor: pointer;
  transition: all .6s;
  box-shadow:${theme.boxShadow};
  :hover{
    background-color:#3f51b5;
    box-shadow:${theme.hoverBoxShadow};
  }
`