import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../Redux/ApppointmentSlice';


export  const Store =configureStore({

    reducer:{
        appointmentR:appointmentReducer,
    }

})