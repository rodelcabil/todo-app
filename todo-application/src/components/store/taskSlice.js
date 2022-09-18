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

const themeSlice2 = createSlice({
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
        // updateTsk(state) {
        //     state.theme = "light";
        //     localStorage.setItem('theme', "light");
           
        // },
        // deleteTask(state) {
        //     state.theme = "light";
        //     localStorage.setItem('theme', "light");

        // },
    },
});

export const { addTask } = themeSlice2.actions;

export default themeSlice2.reducer;
