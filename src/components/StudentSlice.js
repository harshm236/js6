import { createSlice } from "@reduxjs/toolkit";
import stu from "./data";


const studentSlice=createSlice({
    name:'users',
    initialState: stu ,
    reducers:{
        AddStudents:(state,action)=>{state.push(action.payload)},
        UpdateStudents:(state,action)=>{
            const {id,Name,Age,Course,Batch}=action.payload
            const existStudent=state.find((user)=>user.id===id)
            if(existStudent)
            {
                existStudent.Name= Name;
                existStudent.Age=Age;
                existStudent.Course=Course;
                existStudent.Batch=Batch;
            }

        }
    }
})
export default studentSlice.reducer;
export const {AddStudents,UpdateStudents} =studentSlice.actions;