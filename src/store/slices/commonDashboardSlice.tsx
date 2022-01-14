import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ICommonDashboard {
    mobileMenuToggle: boolean;
}

const initialState: ICommonDashboard = {
    mobileMenuToggle: true
};

export const commonDashboardSlice = createSlice({
    name: "commonDashboard",
    initialState,
    reducers: {
        doToggle: (state) => {
            state.mobileMenuToggle = !state.mobileMenuToggle;
        },
        setMobileMenuDisplay: (state, action: PayloadAction<boolean>) => {
            state.mobileMenuToggle = action.payload;
        }

    }
});

export const {doToggle,setMobileMenuDisplay} =commonDashboardSlice.actions;
export default commonDashboardSlice.reducer;