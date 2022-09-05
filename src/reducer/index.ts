import { ActionTypes } from "./functions";
import { addNewTask, deleteTask, editTask } from "./functions";

export interface ITask {
  id: string;
  title: string;
  desc?: string;
}

export interface IAction {
  id: string;
  type: ActionTypes;
  title: string;
  desc?: string;
}

export const taskReducer = (state: ITask[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return addNewTask(action, state);
    case ActionTypes.DELETE_TASK:
      return deleteTask(action, state);
    case ActionTypes.EDIT_TASK:
      return editTask(action, state);
  }
  return state;
};
