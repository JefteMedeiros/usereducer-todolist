import { IAction, ITask } from "..";

export const addNewTask = (action: IAction, state: ITask[]) => {
  const newTask: ITask = {
    title: action.title,
    desc: action.desc,
  };
  return [...state, newTask];
}

export const deleteTask = (action: IAction, state: ITask[]) => {
  return state.filter((state) => state.title !== action.title);
}