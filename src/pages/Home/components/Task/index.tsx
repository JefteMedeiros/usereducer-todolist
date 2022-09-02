import { Typography } from "@mui/material";
import { PurpleButton } from "../../../../styles/global";
import { TaskBox } from "./styles";

interface TaskProps {
  id: string | undefined;
  title: string;
  desc: string | undefined;
  handleDeleteTask: (id: string | undefined) => void;
}

export function Task({id, title, desc, handleDeleteTask}: TaskProps) {
  return (
    <TaskBox>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h6">{desc}</Typography>
      <PurpleButton color="secondary" onClick={() => handleDeleteTask(id)}>
        Deletar task
      </PurpleButton>
    </TaskBox>
  );
}
