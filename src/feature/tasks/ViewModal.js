import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { GreenButton } from "components/buttons/GreenButton";
import { RedButton } from "components/buttons/RedButton";
import { YellowButton } from "components/buttons/YellowButton";
import { FunnyDialog } from "components/FunnyDialog";
import { useContext } from "react";
import PriorityView from "./PriorityView";
import { TasksContext } from "./TasksContext";


export const ViewModal = ({ open, task, close, handleEdit }) => {
    const tasksService = useContext(TasksContext);


    return <FunnyDialog open={open} onClose={close}>
        {task && <DialogContent className="view-modal">
            <PriorityView priority={task.priority} dir="rtl" />
            <Typography variant="h6" textAlign="center">{task.title}</Typography>
            <Box sx={{ paddingX: 7 }}>

                <Typography variant="body1" >{task.description}</Typography>
            </Box>
        </DialogContent>}
        <DialogActions>
            <YellowButton variant="outlined" size="small" onClick={handleEdit}>Edit Task</YellowButton>
            <GreenButton variant="outlined" size="small" onClick={() => {
                tasksService.doneTask(task);
                close();
            }}>Done Task</GreenButton>
            <RedButton variant="outlined" size="small" onClick={() => {
                tasksService.deleteTask(task);
                close();

            }}>Delete Task</RedButton>
        </DialogActions>
    </FunnyDialog>;
};
