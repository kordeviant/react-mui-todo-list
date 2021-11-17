import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { GreenButton } from "components/buttons/GreenButton";
import { YellowButton } from "components/buttons/YellowButton";
import { useContext } from "react";
import PriorityView from "./PriorityView";
import { TasksContext } from "./TasksContext";

export default function TaskItemMainList({ task, editClick, viewClick }) {
    const tasksService = useContext(TasksContext);

    return (
        <Grid component={Paper} onClick={viewClick} item xs={12} sx={{ marginY: 1, padding: 2, position: "relative" }} >
            <PriorityView priority={task.priority} dir="ltr" />
            <Grid item xs={12} className="preview-text">
                <Typography variant="h6" sx={{ marginY: 0, marginBottom: 1 }} >{task.title}</Typography>
                <Typography variant="body1" sx={{ marginY: 0, marginBottom: 2 }}>{task.description}</Typography>
            </Grid>
            <Grid item>
                <div className="item-action-btns">
                    <YellowButton size="small" variant="outlined" onClick={(e) => {
                        e.stopPropagation();
                        tasksService.doneTask(task);
                    }}>Done Task</YellowButton>
                    <GreenButton size="small" variant="outlined" onClick={editClick}>Edit Task</GreenButton>

                </div>
            </Grid>
        </Grid>
    );
}
