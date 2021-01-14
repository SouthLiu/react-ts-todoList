import React, { memo, ReactElement } from 'react'
import { ITodo } from '../typings'
import { CloseCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';

interface IProps {
  todoList: ITodo[];
  delTodo: (id: number) => void;
}

function Index(props: IProps): ReactElement {
  const { todoList, delTodo } = props

  const handleDelete = (id: number): void => {
    delTodo(id)
  }

  return (
    <div style={{ width: 350 }}>
      {
        todoList.length > 0 && todoList.map((item, index) => {
          return (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
              <span>{ item.contant }</span>

              <Popconfirm title="确定删除?" cancelText="取消" okText="确定" onConfirm={() => handleDelete(item.id)}>
                <CloseCircleOutlined style={{ cursor: 'pointer', marginLeft: 15 }} />
              </Popconfirm>
            </div>
          )
        })
      }
    </div>
  )
}

export default memo(Index)
