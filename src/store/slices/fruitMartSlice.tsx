import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IFruitMartState {
    userEmail: string;
    defaultItems: string[];
    userSelectedItems: string[];
    status: "wait" | "done";
}

const initialState: IFruitMartState = {
    userEmail: "shantanu@hcl.com",
    status: "done",
    defaultItems: ["Apple", "Cherry", "Guava", "Lychee", "Mango", "Star fruit"],
    userSelectedItems: []
};

export const fruitMartSlice = createSlice({
    name: "fruitMart",
    initialState,
    reducers: {
        eventFruitMartSetUserSelectedItem: (state, action: PayloadAction<string[]>) => {
            state.userSelectedItems = action.payload;
        },

        eventFruitMartSetDefaultSelectedItem: (state, action: PayloadAction<string[]>) => {
            state.defaultItems = action.payload;
        },

        eventFruitMartSetStatus: (state, action: PayloadAction<IFruitMartState>) => {
            state.status = action.payload.status;
        },


    }
});

export const { eventFruitMartSetStatus, eventFruitMartSetUserSelectedItem, eventFruitMartSetDefaultSelectedItem, } = fruitMartSlice.actions;
export default fruitMartSlice.reducer;