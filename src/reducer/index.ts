import { ActionTypes } from "./actions/index";
import { addNewTask, deleteTask } from "./functions";

export interface ITask {
  id?: string;
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
  }
  return state;
};
