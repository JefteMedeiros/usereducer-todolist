import { IAction, ITask } from "..";
import {v4 as uuidv4} from 'uuid';

export enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  EDIT_TASK = "EDIT_TASK"
}

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

export const editTask = (action: IAction, state: ITask[]) => {
  const toBeUsedTask = state.filter((state) => state.id === action.id)

  const newTask = {
    id: toBeUsedTask[0].id,
    title: action.title,
    desc: action.desc
  }

  return [ ...state.filter(state => state.id !== action.id), newTask ]
}