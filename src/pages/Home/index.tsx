import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TaskContext } from "../../contexts";
import { Task } from "./components/Task";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { TaskContainer } from "./styles";
import { TaskInteraction } from "./components/TaskInteraction";

export function Home() {
  const { tasks, search, handleDeleteTask, searchTask, editTask } =
    useContext(TaskContext);

  return (
    <Box>
      <Header />
      <TaskContainer>
        <TaskInteraction />
        <ul>
          <AnimatePresence mode="popLayout">
            {tasks
              .filter((task) => !search || searchTask(task.title, search))
              .map((task) => (
                <motion.li
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  key={task.id}
                >
                  <Task
                    title={task.title}
                    desc={task.desc}
                    handleDeleteTask={handleDeleteTask}
                    editTask={editTask}
                    id={task.id}
                  />
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>
      </TaskContainer>
    </Box>
  );
}
