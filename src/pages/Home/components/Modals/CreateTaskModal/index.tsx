import { Modal } from "@mui/material";
import { TaskContext } from "../../../../../contexts";
import { useContext, useState } from "react";
import { OpenModal } from "../styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputsBox, CloseButton, Footer } from "../styles";
import { CreateTask } from "./styles";
import { Input } from "../../../../../styles/global";
import { ITask } from "../../../../../reducer";

export function CreateTaskModal() {
  const { createNewTask } = useContext(TaskContext);

  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  }

  const taskValidationSchema = zod.object({
    title: zod.string().min(1, "The title should not be empty"),
    desc: zod.string().min(1, "The description should not be empty"),
  });

  const { register, handleSubmit, reset } = useForm<ITask>({
    resolver: zodResolver(taskValidationSchema),
  });

  const handleCreateTask = (data: ITask) => {
    createNewTask(data);
    handleToggleModal();
    reset();
  };

  return (
    <>
      <OpenModal onClick={() => handleToggleModal()}>Criar Task</OpenModal>
      <Modal open={openModal} onClose={handleToggleModal}>
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
              <CloseButton onClick={() => handleToggleModal()}>
                Fechar
              </CloseButton>
            </Footer>
          </InputsBox>
        </form>
      </Modal>
    </>
  );
}
