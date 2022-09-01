import { ActionTypes } from "./actions/index";
import { addNewTask } from "./functions";

export interface ITask {
  title: string;
  desc?: string;
}

export interface IAction {
  type: ActionTypes
  title: string;
  desc?: string;
}

export const taskReducer = (state: ITask[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK :
      addNewTask(action, state);
    case ActionTypes.DELETE_TASK :
      
  }
  return state;
};
