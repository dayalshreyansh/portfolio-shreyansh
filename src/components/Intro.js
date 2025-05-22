import React from "react";
import myImage from '../assets/Me.png';

export default function Intro() {
  return (
    <div
      class="container-fluid text-center mt-5  d-flex flex-column justify-content-between"
      style={{ height: "95vh" ,color:"#e0e0e0",background:'linear-gradient(to bottom, #0f2027, #203a43, #244659)',marginBottom:'none'}}
    >
      <div className="container mt-5 " style={{ height: "10vh" }}></div>
      <div class="row align-items-center ">
        <div class="col text-start mx-5 px-5">
          <h6>WEB DEVELOPER AND APP DEVELOPER</h6>
          <hr />
          <h2>Hello, I'm</h2>
          <h2>Shreyansh Dayal</h2>
          <p>A full stack developer and a student from India.</p>
          <p>Currently moving towards a BTech in Computer Science. </p>
          <a href="#footer">
          <button type="button" class="btn btn-custom btn-primary mx-3 my-2 rounded-pill">
            Contact Me
          </button>
          </a>
        </div>
        <div class="col">
          <img src={myImage} alt=""  style={{height:"60vh"}}/>
        </div>
      </div>
      <div className="container">
        <a href="#skill">
          <button type="button" class="btn btn-custom btn-primary mx-3  rounded-pill mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
