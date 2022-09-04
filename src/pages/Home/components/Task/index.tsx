import { Trash } from 'phosphor-react'
import { Box, Typography } from "@mui/material";
import { PurpleButton } from "../../../../styles/global";
import { AlterTask, DeleteTask, EditTask, TaskBox } from "./styles";

interface TaskProps {
  id: string | undefined;
  title: string;
  desc: string | undefined;
  handleDeleteTask: (id: string | undefined) => void;
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
        <EditTask>
          Edit task
        </EditTask>
      </AlterTask>
    </TaskBox>
  );
}
