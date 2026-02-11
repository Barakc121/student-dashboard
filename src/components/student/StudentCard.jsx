import React from "react";

function StudentCard({ id, name, age, grade, isOnline, subjects }) {
  return (
    <div className="studentCard">
      <div className="part1">
        <div className="name">{name}</div>
        <div className="isOnline">isOnline{isOnline}</div>
      </div>
      <div className="part2">
        <div className="age">age:{age}</div>
        <div className="grade">grade:{grade}</div>
      </div>
      <h3>subjects:</h3>
      <div className="subjects">{subjects.map((s)=><div className="subjectStyle">{s}</div>)}</div>
    </div>
  );
}

export default StudentCard;
