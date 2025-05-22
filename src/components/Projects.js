import React from 'react'
import imgMusicPlayer from '../assets/MusicPlayer.png';
import imgStorlyLine from '../assets/Storyline.png';
import imgRockPaper from '../assets/StonePaper.png';
import imgTicTacToe from '../assets/TicTacToe.jpg';


export default function Projects() {
    let projects=[
        {
            title:"StoryLine",
            description:"A new App that keeps you us to date with the major events in the world.",
            url:"https://github.com/dayalshreyansh/Storyline-New-app",
            img:imgStorlyLine
        },
        {
            title:"Rock-Paper",
            description:"A simple rock paper scissros game using JavaScrtipt.Allows user to play against computer.",
            url:"https://github.com/dayalshreyansh/rock-paper-Scissor",
            img:imgRockPaper
        },
        {
            title:"Basic Music Player",
            description:"A simple music Player using JavaScrtipt.Provide fuctionalities like delete from playlist etc.",
            url:"https://github.com/dayalshreyansh/musicplayer-basic",
            img:imgMusicPlayer
        },
        {
            title:"Tic Tac Toe",
            description:"Tic-Tac-Toe game coded in cpp uses the minimax algo to find the best next move",
            url:"https://github.com/dayalshreyansh/Tic-Tac-Toe",
            img:imgTicTacToe
        }
    ];
  return (
    <div>
      <div className="container text-center my-5" style={{minHeight:"100vh",color:"#e0e0e0", margin:"auto"}}><h3>Projets</h3>
        <div class="row my-5">
            {projects.map((element)=>{
                return (
                    <div class="col my-2" >
                    <div class="card" style={{width: "18rem", maxHeight: "400px", overflow: "hidden",backgroundColor:"#343a40"}}>
                        <img src={element.img} alt="IMG" style={{ width: "100%",height:"200px",margin:"auto" }}/>
                        <div class="card-body" style={{color:"#e0e0e0"}}>
                            <h5 class="card-title">{element.title}</h5>
                            <p class="card-text">{element.description}</p>
                            <a href={element.url} target='_blank' class="btn btn-primary">Visit Project</a>
                        </div>
                    </div>
                    </div>
                )
            })}
            
            
            
        </div>
        
        
        </div>
    </div>
  )
}
