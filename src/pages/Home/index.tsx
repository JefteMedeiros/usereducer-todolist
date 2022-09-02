import { useState, useRef, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { removeItem } from "./array";
import { TaskContext } from "../../contexts";
import { Task } from "./components/Task";
import { TaskForm } from "./components/TaskForm";

export function Home() {
  const { tasks, handleDeleteTask } = useContext(TaskContext);

  return (
    <>
      <TaskForm />
      <ul>
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <motion.li
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              key={task.id}
            >
              <Task title={task.title} desc={task.desc} handleDeleteTask={handleDeleteTask} id={task.id} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
}
