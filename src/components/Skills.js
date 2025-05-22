import React from 'react'
import reactLogo from '../assets/reactLogo.svg';
import mogodbLogo from '../assets/MongoDBLogo.svg';
import nodejsLogo from '../assets/NodejsLogo.svg';
import expressLogo from '../assets/ExpressLogo.svg';
import javaScriptLogo from '../assets/JavaScriptLogo.svg';
import cppLogo from '../assets/CppLogo.svg';
import flutterLogo from '../assets/FlutterLogo.svg';





export default function Skills() {
  let skills=[
    {
      skill:"React",
      description:"",
      img:reactLogo
    },
    {
      skill:"MongoDB",
      description:"",
      img:mogodbLogo
    },
    {
      skill:"Node.js",
      description:"",
      img:nodejsLogo
    },
    {
      skill:"Express.js",
      description:"",
      img:expressLogo
    },
    {
      skill:"JavaScript",
      description:"",
      img:javaScriptLogo
    },{
      skill:"CPP",
      description:"",
      img:cppLogo
    },
    {
      skill:"Flutter",
      description:"",
      img:flutterLogo
    }
  ];
  return (
    <div style={{paddingTop:'10vh',background:'linear-gradient(to bottom, #244659, #203a43, #0f2027)'}}>
      <div className="container text-center  " style={{color:"#e0e0e0"}}>
        <h3>Skills</h3>
        <div class="container text-center" >
            <div class="row">
              {skills.map((element)=>{
                return(
                  <div class="col-4 my-5">
                <div class="card" style={{width: "18rem",background:"none",border:"none"}} >
                  <img className='my-2' src={element.img} alt="" style={{width:"50%",margin:"auto",height:"10vh"}}/>
                <div class="card-body" style={{color:"#e0e0e0"}}>
                    <h5 class="card-title">{element.skill}</h5>
                    <p class="card-text">{element.description}</p>
                </div>
                </div>
                </div>
                )
              })
                
                }
            </div>
        </div>
        </div>
       
    </div>
  )
}
