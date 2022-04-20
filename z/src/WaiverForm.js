import React, { useState } from "react";
import "./WaiverForm.css";
import { LoremIpsum } from "react-lorem-ipsum";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function WaiverForm() {
  const [data, setData] = useState({
    userSignature: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userSignature: data.userSignature,
    };
    axios
      .post("http://localhost:3001/api/waiver", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => toast.error(err.response.data));
    setTimeout(() => navigate("/"), 500);
    return toast("Signature Submitted Successfully!");
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <div className="waiver-wrapper">
      <div className="waiver-header">
        <h2>WAIVER OF LIABILITY, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT</h2>
        <h2>Company name</h2>
        <h2>Company Address</h2>
      </div>
      <div className="text-wrapper">
        <LoremIpsum p={20} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="signature">
          <input
            type="text"
            name="userSignature"
            className="signature-input"
            required
            value={data.userSignature}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
