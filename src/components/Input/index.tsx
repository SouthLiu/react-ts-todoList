import React, { memo, useRef, useState } from 'react'
import { Button, Input } from 'antd'
import { ITodo } from '../typings'

interface IProps {
  addTodo: (data: ITodo) => void;
}

function Inputs(props: IProps) {
  const { addTodo } = props
  const inputRef = useRef<any>(null)
  const [inputVal, setInputVal] = useState<string>('')

  const addItem = (): void => {
    const { value } = inputRef.current.state
    setInputVal(() => value)

    if (inputVal === value) {
      console.log('重复值')
    }

    addTodo({
      id: new Date().getTime(),
      contant: value,
      completed: false
    })
    inputRef.current.setValue('')
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Input ref={inputRef} style={{ width: 300 }} />
      <Button onClick={addItem}>添加</Button>
    </div>
  )
}

export default memo(Inputs)
