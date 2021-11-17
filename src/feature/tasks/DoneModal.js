import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { FunnyDialog } from "components/FunnyDialog";
import { useContext } from "react";
import TaskItemDoneList from "./TaskItemDoneList";
import { TasksContext } from "./TasksContext";

export default function DoneModal({ open, close }) {
    const tasksService = useContext(TasksContext);

    return (
        <FunnyDialog open={open} onClose={close}>
            <DialogContent>
                <Typography variant="h6" textAlign="center">Done Tasks</Typography>
                {tasksService.tasks.filter(x => x.done).map(x => <TaskItemDoneList key={x.id} task={x} />)}
            </DialogContent>

        </FunnyDialog>
    );
}
