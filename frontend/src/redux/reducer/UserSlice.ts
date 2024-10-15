import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../models/User";

const initState: {user: any , token: string | null} =  {
    user: null,
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser: (state ,action: PayloadAction<{user: any, token: string}>) => {
            console.log("action:", action.payload)
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logout: () => initState
    }
})

export const {setUser, logout} = userSlice.actions

export default userSlice.reducer