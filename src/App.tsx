import React, { useCallback, useReducer, useEffect } from 'react';
import Input from './components/Input';
import List from './components/List'
import { ACTION_TYPE, ITodo } from './components/typings';
import './App.css';
import { todoReducer } from './reduex';

function init(initTodoList: ITodo[]) {
  return {
    todoList: initTodoList
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]')
    dispatch({
      type: ACTION_TYPE.INIT_TODO,
      payload: todoList
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state.todoList || '[]'))
  }, [state.todoList])

  const addTodo = useCallback(
    (data: ITodo): void => {
      dispatch({
        type: ACTION_TYPE.ADD_TODO,
        payload: data
      })
    }, []
  )

  const delTodo = useCallback((id: number): void => {
      dispatch({
        type: ACTION_TYPE.DEL_TODO,
        payload: id
      })
  }, [])

  return (
    <>
      <Input addTodo={addTodo} />
      <List todoList={state.todoList} delTodo={delTodo} />
    </>
  )
}

export default App
