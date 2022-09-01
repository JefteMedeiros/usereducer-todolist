import {createContext, ReactNode, useReducer, useState} from 'react';
import { ITask, taskReducer } from '../reducer';
import { ActionTypes } from '../reducer/actions';

interface TaskContext {
  tasks: ITask[]
  handleDeleteTask: (title: string) => void;
}

interface TaskProvider {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContext)

export function TaskProvider({children}: TaskProvider) {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const [tasks, dispatch] = useReducer(taskReducer, []);

  const handleCreateNewTask = (title: string, desc: string): void => {
    dispatch({type: ActionTypes.ADD_TASK, title: title, desc: desc})
  };

  const handleDeleteTask = (title: string) => {
    dispatch({type: ActionTypes.DELETE_TASK, title: title})
  }

  return (
    <TaskContext.Provider value={{ tasks, handleDeleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}