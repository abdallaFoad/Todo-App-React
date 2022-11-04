import React from 'react'
import { useState } from 'react';
import { Button, ButtonRemove, Buttons, Parent } from './style';
import Todo from './Todo/Todo';
import TodoFormCom from './TodoForm/TodoFormCom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashCan, faSliders, faGlobe, faListCheck, faFileWaveform } from '@fortawesome/free-solid-svg-icons'
import { theme } from './Config';



export default function ParentComponent() {
  let [todos, setTodos] = useState([]);
  const [toShowTodos, setToShowTodos] = useState('all');
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  const addValues = (e) => {
    setTodos([e, ...todos])
  }

  const toggleCheck = () => {
    setTodos(todos.map((e) => ({
      ...e,
      complete: toggleAllComplete
    })));
    setToggleAllComplete(!toggleAllComplete)
  }

  const handelDelete = (id) => { 
    setTodos(todos.filter((e) => e.id !== id))
  }

  const removeAllComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete))
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
         if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
         } else {
           return todo;
        }
      })
    )
  }

  const updateTodoShow = (text) => {
    setToShowTodos(text);
  }

  if (toShowTodos === 'active') {
    todos = todos.filter((e) => !e.complete)
  } else if (toShowTodos === 'complete') {
    todos = todos.filter((e) => e.complete)
  }

  const DeleteCheckButton = 
          <ButtonRemove
            onClick={removeAllComplete}>
            <FontAwesomeIcon
              icon={faTrashCan}
              color={theme.colorLogo}
              fontSize={'1rem'}
              className="icon"
            />
          </ButtonRemove>
  
  return (
    <Parent>
      <TodoFormCom onSub={addValues} />
      {
        todos.map((e) => 
          <Todo
            key={e.id}
            pTo={e}
            Delete={() => handelDelete(e.id)}
            toggle={() => toggleComplete(e.id)}
          />  
        )
      }
      <Buttons>
        <Button onClick={() => updateTodoShow('all')}>
          <FontAwesomeIcon
            icon={faGlobe}
            color={theme.blueColor}
            fontSize={'1rem'}
            className="icon"
          />
        </Button>
        <Button onClick={() => updateTodoShow('active')}>
          <FontAwesomeIcon
            icon={faFileWaveform}
            color={theme.blueColor}
            fontSize={'1.2rem'}
            className="icon"
          />
        </Button>
        <Button onClick={() => updateTodoShow('complete')}>
          <FontAwesomeIcon
            icon={faListCheck}
            color={theme.blueColor}
            fontSize={'1rem'}
            className="icon"
          />
        </Button>
        <Button onClick={() => toggleCheck()}>
          <FontAwesomeIcon
            icon={faSliders}
            color={theme.blueColor}
            fontSize={'1rem'}
            className="icon"
          />
        </Button>
      </Buttons>
      {
        // todos.some((e) => e.complete) ? (DeleteCheckButton) : null
        todos.map((e) => e.complete ? (DeleteCheckButton) : null) 
      }
    </Parent>
  )
}
