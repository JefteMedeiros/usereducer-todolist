import { useForm } from "react-hook-form";
import { PurpleButton } from "../../../../styles/global";
import { InputsBox, Input } from "./styles";
import * as zod from 'zod';

export function TaskForm() {
  const taskValidationSchema = zod.ZodSchema
  
  const {register, handleSubmit} = useForm({

  })
  
  return (
    <form>
      <InputsBox>
        <Input
          onChange={(e) => setTaskTitle(e.target.value)}
          label="Nome da task"
          type="text"
          variant="outlined"
        />
        <Input
          onChange={(e) => setTaskDesc(e.target.value)}
          label="Descrição da task"
          type="text"
          variant="outlined"
        />
        <PurpleButton
          onClick={() => handleCreateNewTask(taskTitle, taskDesc)}
          variant="outlined"
        >
          Criar task
        </PurpleButton>
      </InputsBox>
    </form>
  );
}
