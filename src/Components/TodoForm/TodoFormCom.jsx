import React from 'react'
import { useState } from 'react';
import { Button, Content, Form, H2, Head, Input, TodoPar } from './style'
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../Config';
import { ButtonRemove } from '../style';

export default function TodoFormCom(props) {
  const [values, setValues] = useState('');

  const prev = (e) => {
    e.preventDefault();
    if(values === ''){return false}
    props.onSub({
      id: shortid.generate(),
      text: values,
      complete: false,
    });
    setValues('');
  }

  return (
    <TodoPar>
      <Content>
        <Head>
          <H2>AWESOME TODO LIST</H2>
          <FontAwesomeIcon
            icon={faClipboardList}
            color={theme.colorLogo}
            fontSize={'3rem'}
            className="icon"
          />
        </Head>
        <Form onSubmit={prev}>
          <Input
            type="text"
            name="add"
            id="add"
            value={values}
            placeholder='Add New ...'
            onFocus={(e) => e.target.placeholder = ""} 
            onBlur={(e) => e.target.placeholder = "Add New..."}
            onChange={(e) => { setValues(e.target.value)}}
          />
          <Button
            type="submit"
            value="Add Todo"
          />
        </Form>
      </Content>
    </TodoPar>
  )
}
