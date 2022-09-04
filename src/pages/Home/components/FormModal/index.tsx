import { Modal } from "@mui/material";
import { TaskForm } from "../TaskForm";
import { TaskContext } from "../../../../contexts";
import { useContext } from "react";
import { OpenModal } from "./styles";

export function FormModal() {
  const { openModal, handleToggleModal } = useContext(TaskContext);

  return (
    <>
      <OpenModal onClick={() => handleToggleModal()}>Criar Task</OpenModal>
      <Modal
        open={openModal}
        onClose={handleToggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TaskForm />
      </Modal>
    </>
  );
}
