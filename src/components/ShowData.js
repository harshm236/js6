// import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { UpdateStudent } from "./UpdateStudent";

export const ShowData = () => {
  // const state=useState(state)
  const users = useSelector((state) => state.users);
  // const id=useSelector((state) => state.users.id);
  const navigate= useNavigate()
  console.log(users);
  return (
    <>
      <table>
        <thead>
        <tr>
          <th>S.No</th>
          <th>name</th>
          <th>age</th>
          <th>course</th>
          <th>batch</th>
          <th>update</th>
        </tr>
        </thead>

        {users.map((item) => {
          return (
            <tbody>
            <tr>
              <td>{item.id+1}</td>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td><button onClick={()=>{ navigate('/edit',{state:{id:item.id}})}}>edit</button></td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};
