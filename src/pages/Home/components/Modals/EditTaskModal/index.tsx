import { Modal } from "@mui/material";
import { TaskContext } from "../../../../../contexts";
import { useContext, useState } from "react";
import { OpenEditTask } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputsBox, CloseButton, Footer } from "../styles";
import { EditTask } from "./styles";
import { Input } from "../../../../../styles/global";
import { ITask } from "../../../../../reducer";

interface EditTaskProps {
  id: string;
}

export function EditTaskModal({ id }: EditTaskProps) {
  const { editTask } = useContext(TaskContext);

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

  const handleEditTask = (data: ITask) => {
    editTask(id, data);
    handleToggleModal();
    reset();
  };

  return (
    <>
      <OpenEditTask onClick={() => handleToggleModal()}>Editar Task</OpenEditTask>
      <Modal open={openModal} onClose={handleToggleModal}>
        <form onSubmit={handleSubmit(handleEditTask)}>
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
              <EditTask type="submit" variant="outlined">
                Editar task
              </EditTask>
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
