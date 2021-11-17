import { useMemo, useState } from "react";
import { TasksContext } from "./TasksContext";

const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks(tasks => [...tasks, { ...task, id: tasks.length }]);
    };
    const editTask = (task) => {
        setTasks(tasks => tasks.map(x => x.id === task.id ? task : x));
    };
    const doneTask = (task) => {
        setTasks(tasks => tasks.map(x => x.id === task.id ? { ...task, done: true } : x));
    };
    const deleteTask = (task) => {
        setTasks(tasks => tasks.filter(x => x.id !== task.id));
    };
    const valCon = useMemo(() => {
        return {
            tasks,
            addTask,
            editTask,
            doneTask,
            deleteTask
        };
    }, [tasks]);
    return <TasksContext.Provider value={valCon}>{children}</TasksContext.Provider>;
};
export default TasksProvider;