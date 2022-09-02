import { useForm } from "react-hook-form";
import { PurpleButton } from "../../../../styles/global";
import { InputsBox, Input } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TaskContext } from "../../../../contexts";

export function TaskForm() {
  const { handleCreateNewTask } = useContext(TaskContext);
  
  const taskValidationSchema = zod.object({
    title: zod.string().min(2, "The title should have at least 2 characters"),
    desc: zod.string()
  });

  type TaskInputs = zod.infer<typeof taskValidationSchema>
  
  const {register, handleSubmit, reset} = useForm<TaskInputs>({
    resolver: zodResolver(taskValidationSchema)
  })

  const handleCreateTask = (data: TaskInputs) => {
    handleCreateNewTask(data);
  }
  
  return (
    <form onSubmit={handleSubmit(handleCreateTask)}>
      <InputsBox>
        <Input
          {...register("title")}
          label="Nome da task"
          type="text"
          variant="outlined"
        />
        <Input
        {...register("desc")}
          label="Descrição da task"
          type="text"
          variant="outlined"
        />
        <PurpleButton
          type="submit"
          variant="outlined"
        >
          Criar task
        </PurpleButton>
      </InputsBox>
    </form>
  );
}
