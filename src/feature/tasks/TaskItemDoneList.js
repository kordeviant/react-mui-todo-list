import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import PriorityView from "./PriorityView";

export default function TaskItemDoneList({ task }) {

    return (
        <Grid item xs={12} sx={{ marginY: 1, padding: 2, position: "relative", border: '1px solid #000' }} >
            <PriorityView priority={task.priority} dir="ltr" />
            <Grid item xs={12} className="preview-text">
                <Typography variant="h6" sx={{ marginY: 0, marginBottom: 1 }} >{task.title}</Typography>
                <Typography variant="body1" sx={{ marginY: 0 }}>{task.description}</Typography>
            </Grid>

        </Grid>
    );
}
