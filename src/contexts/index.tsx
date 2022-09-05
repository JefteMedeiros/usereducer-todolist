import { createContext, ReactNode, useReducer, useState } from "react";
import { ITask, taskReducer } from "../reducer";
import { ActionTypes } from "../reducer/functions";

interface TaskContext {
  tasks: ITask[];
  search: string;
  createNewTask: (data: ITask) => void;
  handleDeleteTask: (id: string) => void;
  editTask: (id: string, data: ITask) => void;
  handleSetSearch: (search: string) => void;
  searchTask: (title: string, search: string) => void;
}

interface TaskProvider {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContext);

export function TaskProvider({ children }: TaskProvider) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const createNewTask = (data: ITask) => {
    dispatch({
      type: ActionTypes.ADD_TASK,
      title: data.title,
      desc: data.desc,
    });
    console.log(tasks);
  };

  const handleDeleteTask = (id: string) => {
    dispatch({ type: ActionTypes.DELETE_TASK, id: id });
  };

  const editTask = (id: string, data: ITask) => {
    dispatch({
      type: ActionTypes.EDIT_TASK,
      id: id,
      title: data.title,
      desc: data.desc
    });
  };

  const [search, setSearch] = useState("");

  const handleSetSearch = (search: string) => {
    setSearch(search);
  };

  const searchTask = (title: string, search: string) => {
    const titleLower = title.toLowerCase();
    const searchLower = search.toLowerCase();
    return titleLower.includes(searchLower);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        search,
        handleDeleteTask,
        editTask,
        createNewTask,
        handleSetSearch,
        searchTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
