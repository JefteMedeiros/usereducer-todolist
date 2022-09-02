import { IAction, ITask } from "..";
import {v4 as uuidv4} from 'uuid';

export const addNewTask = (action: IAction, state: ITask[]) => {
  const newTask: ITask = {
    id: uuidv4(),
    title: action.title,
    desc: action.desc,
  };

  return [...state, newTask];
}

export const deleteTask = (action: IAction, state: ITask[]) => {
  return state.filter((state) => state.id !== action.id)
}