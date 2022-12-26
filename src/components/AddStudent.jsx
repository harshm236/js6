import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Home from "./Home";
import { AddStudents } from "./StudentSlice";

function AddStudent() {
  const user = useSelector((state) => state.users);
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Course, setCourse] = useState("");
  const [Batch, setBatch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function SubmitHandler() {
    // e.preventDefaut();
    if (Name && Age && Course && Batch) {
      dispatch(
        AddStudents({
          id: user[user.length - 1].id + 1,
          Name,
          Age,
          Course,
          Batch,
        })
      );
      setName("");
      setAge("");
      setCourse("");
      setBatch("");
      navigate("/student");
    }
  }

  return (
    <>
      <form id="addform" onSubmit={SubmitHandler}>
        <input
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          value={Name}
          placeholder={"Name"}
          required
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          type={"number"}
          value={Age}
          placeholder={"Age"}
          required
        />
        <input
          onChange={(e) => setCourse(e.target.value)}
          type={"text"}
          value={Course}
          placeholder={"Course"}
          required
        />
        <input
          onChange={(e) => setBatch(e.target.value)}
          type={"text"}
          value={Batch}
          placeholder={"Batch"}
          required
        />
        <input type={"submit"} />
      </form>
    </>
  );
}
export default AddStudent;
