import { createContext, ReactNode, useReducer, useState } from "react";
import { ITask, taskReducer } from "../reducer";
import { ActionTypes } from "../reducer/actions";
import {v4} from 'uuid';

interface TaskContext {
  tasks: ITask[];
  handleCreateNewTask: (data: ITask) => void;
  handleDeleteTask: (id: string | undefined) => void;
}

interface TaskProvider {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContext);

export function TaskProvider({ children }: TaskProvider) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const handleCreateNewTask = (data: ITask) => {
    dispatch({
      type: ActionTypes.ADD_TASK,
      title: data.title,
      desc: data.desc,
    });
    console.log(tasks)
  };

  const handleDeleteTask = (id: string | undefined) => {
    dispatch({ type: ActionTypes.DELETE_TASK, id: id });
  };

  return (
    <TaskContext.Provider value={{ tasks, handleDeleteTask, handleCreateNewTask }}>
      {children}
    </TaskContext.Provider>
  );
}
