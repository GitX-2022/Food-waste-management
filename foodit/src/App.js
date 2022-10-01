import pic from "./homepge.png";
import pic2 from "./homepge2.jpg";
import pic3 from "./footerfinal.jpg";
import './App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
   const navigate = useNavigate(); 
   const routeChange = () =>{ 
     navigate("/src/donor.js");
   };
  return (
    <div>
   
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
              href="/donor.js"
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
        <img style={{paddingTop:"120px",width:"1200px",paddingLeft:"70px"}} src={pic}/>
        <br /><br /><br /><br /><hr/>
        <h1 style={{
          fontFamily: "Rubik",padding:"10px",
                margin: "10px",
                fontSize: "80px",
                opacity: "15%",
              }}>DONATION</h1>
  <img style={{paddingTop:"20px",width:"1200px",paddingLeft:"70px"}} src={pic2}/> 
  {/* <p style={{
    fontFamily: "Rubik",padding:"10px",backgroundColor:"#326078",
                margin: "100px",
                fontSize: "36px",
                // opacity: "15%",
              }}><p style={{opacity: "15%"}}>If We Advance in the Work Of Humanity, the helpless people will taste life.</p>
               <img style={{paddingTop:"20px",width:"200px",paddingLeft:"380px"}} src={pic2}/> </p> */}
               <button
                     className="button1"
                      style={{mariginTop:"100px", marginLeft: "70px" }}
                      type="submit"
                     onClick={routeChange}
                    >
                     Make
                    </button>
                    <button
                     className="button2"
                      style={{mariginTop:"100px", marginLeft: "70px" }}
                      type="submit"
                      //onClick={}
                    >
                      View
                    </button>
                    <div class="footer">
                    <img style={{width:"100%"}} src={pic3}/>
</div>
    </div>
    
  );
}

export default App;
