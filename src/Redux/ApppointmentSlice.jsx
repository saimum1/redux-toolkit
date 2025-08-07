import { createSlice } from "@reduxjs/toolkit";


const initialState={appointments:[]}

const AppointSliceR=createSlice({
    name:'appointmnetName',
    initialState,

    reducers:{
        addAppointment: (state, action) => {
            console.log("dasdasd",action.payload,state)
        state.appointments.push(action.payload);
        },
        updateAppointment: (state, action) => {
        const { id, title, date } = action.payload;
        const appointment = state.appointments.find((app) => app.id === id);
        if (appointment) {
            appointment.title = title;
            appointment.date = date;
        }
            console.log("zs333",action.payload,appointment)

        },
        deleteAppointment: (state, action) => {
        state.appointments = state.appointments.filter((app) => app.id !== action.payload);
        },
    }

}) 


export const {deleteAppointment,updateAppointment,addAppointment} = AppointSliceR.actions;
export default AppointSliceR.reducer 