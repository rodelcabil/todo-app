import { createSlice } from "@reduxjs/toolkit";

function taskList() {
    const taskList = localStorage.getItem('taskList');
    if (taskList) {
        return JSON.parse(taskList);
    }
    localStorage.setItem('taskList', JSON.stringify([]));
    return []
}

const initialState = {
    task: taskList(),
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload);

            const taskList = window.localStorage.getItem('taskList');

            if (taskList) {
                const taskListArr = JSON.parse(taskList);
                taskListArr.push({ ...action.payload });
                window.localStorage.setItem('taskList', JSON.stringify(taskListArr));

            }
            else {
                window.localStorage.setItem(
                    'taskList',
                    JSON.stringify([

                        {
                            ...action.payload,
                        },
                    ])
                );
            }

        },
        updateTask(state, action) {
            const taskList = window.localStorage.getItem('taskList');
            if (taskList) {
                const taskListArr = JSON.parse(taskList);

                // for (var task in taskListArr) {
                //     if (taskListArr[task].id == action.payload.id) {
                //         taskListArr[task].task = action.payload.task;
                //         taskListArr[task].status = action.payload.status;
                //         break;
                //     }
                // }

                // taskListArr.forEach((task) => {
                //     if (task.id === action.payload.id) {
                //         task.status = action.payload.status;
                //         task.task = action.payload.task;
                //     }
                // });

                // const newList = [...taskListArr];
                // const objIndex = taskListArr.findIndex((obj => obj.id === action.payload.id));
                // const newItem = newList[objIndex];
                // newItem.id = action.payload.id;
                // newItem.task = action.payload.task;
                // newItem.status = action.payload.status;
                // newList[objIndex] = newItem;

                const objIndex = taskListArr.findIndex((obj => obj.id === action.payload.id));
                taskListArr[objIndex].task = action.payload.task;
                taskListArr[objIndex].status = action.payload.status;


                window.localStorage.setItem('taskList', JSON.stringify(taskListArr));
                state.task = [...taskListArr];
            }

        },
        deleteTask(state, action) {
            const taskList = window.localStorage.getItem('taskList');
            if (taskList) {
                const taskListArr = JSON.parse(taskList);
                console.log("before delete: ",taskListArr)
                const removeTask = taskListArr.filter(task => task.id !== action.payload);
                window.localStorage.setItem('taskList', JSON.stringify(removeTask));
                console.log("after delete: ", removeTask)
                state.task = [...removeTask];
            }

        },
    },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
