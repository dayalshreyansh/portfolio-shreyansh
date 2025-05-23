import React from 'react'
import resume from '../assets/resume.pdf'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-beige frosted-glass" style={{background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)'}}>
        <div className="container-fluid " >
            <a className="navbar-brand" href="#home">Shreyansh Dayal</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#skill">Skills</a></li>
                    <li><a className="dropdown-item" href="#projects">Projects</a></li>
                    <li><a className="dropdown-item" href="#achivements">Achivements</a></li>

                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href={resume} download>Download CV</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
