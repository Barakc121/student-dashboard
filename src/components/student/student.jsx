import React from "react";
import "./student.css";
import { students } from "../../data.js";
import StudentCard from "./StudentCard.jsx";

function Student() {
  console.log(students);
  return (
    <div className="student-container">
      {students.map((s)=><StudentCard {...s}/>)}
    </div>
  );
}

export default Student;
