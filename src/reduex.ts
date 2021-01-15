import { ACTION_TYPE, ITodo, IAction, IState } from "./components/typings";

export const todoReducer = (state: IState, action: IAction): IState => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.INIT_TODO:
      console.log('state:', state)
      console.log('action:', action)
      return {
        todoList: payload as ITodo[]
      }

    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo]
      }

    case ACTION_TYPE.DEL_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== payload)
      }

    default:
      return state;
  }
}
