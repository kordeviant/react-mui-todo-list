import { Add } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { YellowButton } from "components/buttons/YellowButton";
import { colorizeElem } from "hoc/colorizeButton";
import { useContext, useState } from "react";
import { BlueButton } from "../../components/buttons/BlueButton";
import DoneModal from "./DoneModal";
import { EditModal } from "./EditModal";
import TaskItemMainList from "./TaskItemMainList";
import { TasksContext } from "./TasksContext";
import { ViewModal } from "./ViewModal";


const RedFab = colorizeElem(IconButton, 'red', '#fff');

function Tasks() {
  const [editModalState, setEMS] = useState({ state: undefined, data: undefined });
  const [doneTaskModal, setDTM] = useState(false);
  const tasksService = useContext(TasksContext);
  const openDoneModal = (e) => {
    setDTM(true);
  };
  const openAddModal = (e) => {
    setEMS({ state: 'add', data: undefined });
  };
  const openViewModal = task => (e) => {
    setEMS({ state: 'view', data: task });
  };
  const openEditModal = (task) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEMS({ state: 'edit', data: task });
  };
  const saveTask = (task) => {
    // console.log('saveTask', task, editModalState);
    if (editModalState.state === 'add') {
      tasksService.addTask(task);
    } else if (editModalState.state === 'edit') {
      tasksService.editTask(task);
    }

    setEMS({ state: undefined, data: undefined });
  };
  const closeEMSModal = () => {
    setEMS({ state: undefined, data: undefined });

  };
  return (


    <Container maxWidth="md" >
      <DoneModal open={doneTaskModal} close={() => {
        setDTM(false);
      }} />
      <ViewModal open={editModalState.state == 'view'} close={closeEMSModal} task={editModalState.data} handleEdit={openEditModal(editModalState.data)} />
      <EditModal save={saveTask} close={closeEMSModal} open={editModalState.state == 'add' || editModalState.state == 'edit'} task={editModalState.data} />
      <Grid container sx={{ justifyContent: "center", paddingY: '40px' }}  >
        <Grid item xs={12} sx={{ textAlign: "center", position: "relative", marginBottom: 5 }} >
          {tasksService && tasksService.tasks.length > 0 && <BlueButton sx={{ position: 'absolute', left: 0 }} variant="outlined" size="small" onClick={openDoneModal}>View Done Tasks</BlueButton>}
          Hello World
        </Grid>

        <Grid item container xs={12} >
          {tasksService && !tasksService.tasks.length && <Grid item xs={12} sx={{ minHeight: 200, alignItems: 'center', display: 'flex', justifyContent: 'center' }}>

            <YellowButton variant="outlined" onClick={openAddModal} >Create Your First Task ;)</YellowButton>
          </Grid>}
          {tasksService && tasksService.tasks.filter(x => !x.done).map(x => <TaskItemMainList key={x.id} task={x} editClick={openEditModal(x)} viewClick={openViewModal(x)} />)}

        </Grid>
        {tasksService && tasksService.tasks.length > 0 && <Grid item container xs={12} justifyContent="flex-end">

          <RedFab onClick={openAddModal}><Add /></RedFab>
        </Grid>}

      </Grid>
    </Container>
  );
}

export default Tasks;
