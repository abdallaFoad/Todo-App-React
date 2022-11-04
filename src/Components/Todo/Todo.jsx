import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { DivTodo, H1, Span } from './style';
import { theme } from '../Config';


export default function Todo(props) {

  return (
    <DivTodo key={props.pTo.id}>
      <H1
        onClick={props.toggle}
        style={{
        textDecoration: props.pTo.complete ? 'line-through' : '',
        color: props.pTo.complete ? `${theme.fontColor}` : `${theme.blueColor}`
        }}
      >{props.pTo.text}</H1>
      <Span onClick={props.Delete}>
        <FontAwesomeIcon icon={faXmark} color={theme.blueColor}
          fontSize={'1.5rem'} />
      </Span>
    </DivTodo>
  )
}
