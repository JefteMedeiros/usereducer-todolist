import { useContext } from "react";
import { TaskContext } from "../../contexts";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PurpleButton } from "../../styles/global";
import { TaskForm } from "./components/TaskForm";
import { TaskBox } from "./styles";

export function Home() {
  const { tasks, handleDeleteTask } = useContext(TaskContext)

  return (
    <Box>
      <TaskForm />
      {tasks.map((task) => {
        return (
          <TaskBox>
            <Typography variant="h5">
              {task.title}
            </Typography>
            <Typography variant="h6">
              {task.desc}
            </Typography>
            <PurpleButton color="secondary" onClick={() => handleDeleteTask(task.title)}>
              Deletar task
            </PurpleButton>
          </TaskBox>
        )
      })}
    </Box>
  );
}
