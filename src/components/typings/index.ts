export interface ITodo {
  id: number;
  contant: string;
}

export interface IState {
  todoList: ITodo[]
}

export interface IAction {
  type: ACTION_TYPE;
  payload: ITodo | ITodo[] | number;
}

export enum ACTION_TYPE {
  INIT_TODO = 'initTodo',
  ADD_TODO = 'addTodo',
  DEL_TODO = 'delTodo'
}