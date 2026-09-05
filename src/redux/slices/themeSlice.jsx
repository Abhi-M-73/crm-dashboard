import { createSlice } from "@reduxjs/toolkit";

const initialTheme = sessionStorage.getItem("theme") || "light";
const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: initialTheme,
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            sessionStorage.setItem("theme", state.theme);
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
            sessionStorage.setItem("theme", action.payload);
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;