import { useContext } from "react";
import { TaskContext } from "../../../../contexts";
import { CreateTaskModal } from "../Modals/CreateTaskModal";
import { InteractionContainer, SearchTask } from "./styles";

export function TaskInteraction() {
  const{ handleSetSearch } = useContext(TaskContext)

  return (
    <InteractionContainer>
      <SearchTask onChange={(e) => handleSetSearch(e.target.value)} placeholder="Procurar task" />
      <CreateTaskModal />
    </InteractionContainer>
  );
}
