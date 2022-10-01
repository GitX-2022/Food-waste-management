import "./donor.css";
import "./app.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function donor(){
    return(<div>
        <div style={{backgroundColor:"black"}}>
      <div className="ti">
          <div className="topnav2">
            <h1
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              href="/Login"
            >
             FOODIT
            </h1>
            
          </div>
        </div>
    
       <div className="containers">
          <div className="topnav2">
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              href="/Login"
            >
             Login
            </a>
            
          </div>
        </div>
        <div className="containers1">
          <div className="topnav2">
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              href="/Login"
            >
              PostFood
            </a>
            </div>
        </div>
        <div className="containers2">
          <div className="topnav2">
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              href="/Login"
            >
             Emergency
            </a>
            </div>
        </div>
        
        <div className="containers4">
          <div className="topnav2">
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              href="/Login"
            >
              My Profile 
            </a>
            
          </div>
        </div>
        <div className="containers3">
          <div className="topnav2">
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              href="/Login"
            >
             Home
            </a>
            </div>
          </div>
        </div>
    </div>);
}
export default donor;