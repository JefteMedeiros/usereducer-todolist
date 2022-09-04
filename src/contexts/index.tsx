import { createContext, ReactNode, useReducer, useState } from "react";
import { ITask, taskReducer } from "../reducer";
import { ActionTypes } from "../reducer/actions";

interface TaskContext {
  tasks: ITask[];
  openModal: boolean;
  search: string;
  handleCreateNewTask: (data: ITask) => void;
  handleDeleteTask: (id: string | undefined) => void;
  handleToggleModal: () => void;
  handleSetSearch: (search: string) => void;
  searchTask: (title: string, search: string) => void;
}

interface TaskProvider {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContext);

export function TaskProvider({ children }: TaskProvider) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const [openModal, setOpenModal] = useState(false);
  
  const handleToggleModal = () => setOpenModal(!openModal);
  
  const handleCreateNewTask = (data: ITask) => {
    dispatch({
      type: ActionTypes.ADD_TASK,
      title: data.title,
      desc: data.desc,
    });
    console.log(tasks);
  };

  const handleDeleteTask = (id: string | undefined) => {
    dispatch({ type: ActionTypes.DELETE_TASK, id: id });
  };

  const [search, setSearch] = useState("");

  const handleSetSearch = (search: string) => {
    setSearch(search)
  }

  const searchTask = (title: string, search: string) => {
    const titleLower = title.toLowerCase();
    const searchLower = search.toLowerCase();
    return searchLower.includes(titleLower);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        search,
        openModal,
        handleDeleteTask,
        handleCreateNewTask,
        handleToggleModal,
        handleSetSearch,
        searchTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
