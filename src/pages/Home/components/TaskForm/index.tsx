import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TaskContext } from "../../../../contexts";
import { InputsBox, CloseButton, CreateTask, Footer } from "./styles";
import { Input } from "../../../../styles/global";

export function TaskForm() {
  const { handleToggleModal, handleCreateNewTask } = useContext(TaskContext);

  const taskValidationSchema = zod.object({
    title: zod.string().min(1, "The title should not be empty"),
    desc: zod.string().min(1, "The description should not be empty"),
  });

  type TaskInputs = zod.infer<typeof taskValidationSchema>;

  const { register, handleSubmit, reset } = useForm<TaskInputs>({
    resolver: zodResolver(taskValidationSchema),
  });

  const handleCreateTask = (data: TaskInputs) => {
    handleCreateNewTask(data);
    handleToggleModal();
    reset();
  };

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
        <Footer>
          <CreateTask type="submit" variant="outlined">
            Criar task
          </CreateTask>
          <CloseButton onClick={() => handleToggleModal()}>Fechar</CloseButton>
        </Footer>
      </InputsBox>
    </form>
  );
}
