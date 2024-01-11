import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name:'student',
    initialState:{
        chartData:{
            lineChartData:null,
            pieChartdata:null,
        }
    },
    reducers:{
        addPieChartData:(state,action)=>{
            state.chartData.pieChartdata = action.payload;
        },
        removePieChartData:(state)=>{
            return [];
        }, 
        addLineChartData:(state,action)=>{
            state.chartData.lineChartData = action.payload;
        },
        removeLineChartData:(state)=>{
            return [];
        }
    }
})

export const {addPieChartData,removePieChartData,addLineChartData,removeLineChartData} = studentSlice.actions;
export default studentSlice.reducer;