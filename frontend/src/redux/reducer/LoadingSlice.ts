import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const loadingSlice = createSlice ({
    name: "loading",
    initialState: false,
    reducers: {
        updateLoading:(state, action: PayloadAction<boolean>) => {
            return action.payload
        }
    }
})
export const {updateLoading} = loadingSlice.actions

export const loadingReducer = loadingSlice.reducer

