import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem('theme'),
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkTheme(state) {   
            state.theme = "dark";
            localStorage.setItem('theme', "dark");
            
        },
        setLightTheme(state) {
            state.theme = "light";
            localStorage.setItem('theme', "light");
           
        },
    },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
