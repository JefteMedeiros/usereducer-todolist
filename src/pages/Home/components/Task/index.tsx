import { Trash } from 'phosphor-react'
import { Box, Typography } from "@mui/material";
import { AlterTask, DeleteTask, TaskBox } from "./styles";
import { ITask } from '../../../../reducer';
import { EditTaskModal } from '../Modals/EditTaskModal';

interface TaskProps {
  id: string;
  title: string;
  desc: string | undefined;
  data?: ITask;
  handleDeleteTask: (id: string) => void;
  editTask: (id: string, data: ITask) => void;
}

export function Task({ id, title, desc, handleDeleteTask }: TaskProps) {
  return (
    <TaskBox>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">- {desc}</Typography>
      </Box>
      <AlterTask>
        <DeleteTask color="secondary" onClick={() => handleDeleteTask(id)}>
          <Trash size={20} />
        </DeleteTask>
        <EditTaskModal id={id} />
      </AlterTask>
    </TaskBox>
  );
}
