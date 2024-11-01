import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../models/User";

const initState: UserState | null = null;

const userSlice = createSlice({
    name: 'users',
    initialState: initState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            console.log("action", action.payload);
            return action.payload
        },
        logout: () => initState
    }
});

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;