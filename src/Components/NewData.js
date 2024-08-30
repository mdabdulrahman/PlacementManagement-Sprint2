import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewData() {
  const [companyName, setCompanyName] = useState();
  const [jobTitle, setjobTitle] = useState();
  const [placementDate, setplacementDate] = useState();
  const [studentId, setstudentId] = useState();

  let base_url = "http://localhost/api/placement";
  let navigate = useNavigate();

  let add = () => {
    let data = {
      companyName: companyName,
      jobTitle: jobTitle,
      placementDate: placementDate,
      studentId: studentId,
    };

    axios
      .post(base_url, data)
      .then((res) => {
        alert("Added Successfully !");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
        navigate("/");
      });
  };

  return (
    <div>
      <div className="form">
        <h3 style={{ textAlign: "center" }}> Add New Data</h3>
        <div className="form-row">
          <p>Company Name : </p>
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>
        </div>
        <div className="form-row">
          <p>Job Title : </p>
          <input
            value={jobTitle}
            onChange={(e) => setjobTitle(e.target.value)}
          ></input>
        </div>
        <div className="form-row">
          <p>Placement Date : </p>
          <input
            value={placementDate}
            type="date"
            onChange={(e) => setplacementDate(e.target.value)}
          ></input>
        </div>
        <div className="form-row">
          <p>Student Id : </p>
          <input
            value={studentId}
            onChange={(e) => setstudentId(e.target.value)}
          ></input>
        </div>
        <div className="ct">
          <button className="btn danger" onClick={() => navigate("/")}>
            Back
          </button>
          <button className="btn" onClick={() => add()}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewData;
