import { createSlice } from "@reduxjs/toolkit";

export const pcBuilderSlice = createSlice({
    name: 'pcBuilder',
    initialState: {
        processor: [],
        motherboard: [],
        powerSupply: [],
        monitor: [],
        ram: [],
        storage: [],
        build: []
    },
    reducers: {
        addToBuild: (state, action) => {
            const {category, component} = action.payload;
            console.log(category)
            state[category].push(component);
            state.build.push(category)
        }
    }
})

export const {addToBuild} = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;