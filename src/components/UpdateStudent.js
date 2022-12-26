import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateStudents } from "./StudentSlice";


 export function UpdateStudent(){
    const location= useLocation()
  const data= useSelector((state)=>state.users.filter((item)=>{return item.id===location.state.id }).map((item)=>item))
  const sName=data[0].Name
  const sAge=data[0].Age
  const sCourse=data[0].Course
  const sBatch=data[0].Batch
  const [Name,setName]=useState(sName)
  const [Age,setAge]=useState(sAge)
  const [Course,setCourse]=useState(sCourse)
  const [Batch,setBatch]=useState(sBatch)
  const dispatch= useDispatch()
  const navigate=useNavigate()
  console.log(data)
  const submitHandler=()=>{
    alert("are you sure?")
    if(Name && Age && Course && Batch){
        dispatch(
            UpdateStudents({
                id:location.state.id,
                Name,
                Age,
                Course,
                Batch
            })
            )
            navigate("/student")
    }
  }
    return(
        <>
        <form onSubmit={submitHandler} style={{display:"flex" ,flexDirection:"column", alignItems:"center" }}>
            <input type={"text"} value={Name} onChange={(e)=>setName(e.target.value)} ></input>
            <input type={"number"} value={Age} onChange={(e)=>setAge(e.target.value)} ></input>
            <input type={"text"} value={Course} onChange={(e)=>setCourse(e.target.value)} ></input>
            <input type={"text"} value={Batch} onChange={(e)=>setBatch(e.target.value)} ></input>
            <input type={"submit"}></input>
            
            
        </form>
        </>
    )
}