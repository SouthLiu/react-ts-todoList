import React, { useState, useCallback } from 'react';
import Input from './components/Input';
import List from './components/List'
import { ITodo } from './components/typings';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const addTodo = useCallback(
    (data: ITodo): void => {
      setTodoList(todoList => [...todoList, data])
    }, []
  )

  const delTodo = useCallback((id: number): void => {
    const newTodo: ITodo[] = Object.assign([], todoList)
    todoList && todoList.forEach((item, index) => {
      if (item.id === id) {
        newTodo.splice(index, 1)
      }
    })
    setTodoList(newTodo)
  }, [todoList])

  return (
    <>
      <Input addTodo={addTodo} />
      <List todoList={todoList} delTodo={delTodo} />
    </>
  )
}

export default App
