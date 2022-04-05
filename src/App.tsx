import React from 'react';
import './App.module.css';
import classes from "./App.module.css";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MySkills} from "./mySkills/MySkills";
import {Projects, ProjectType} from "./projects/Projects";
import {Form} from "./form/Form";
import {Footer} from "./footer/Footer";

function App() {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores aut consectetur consequuntur doloribus eaque earum eum fugiat laborum molestiae,'
    const projects: ProjectType[] = [
        {desc: text, img: '', title: 'First Project'},
        {desc: text, img: '', title: 'Second Project'},
    ]

    const skills: ProjectType[] = [
        {desc: text, img: '', title: 'HTML'},
        {desc: text, img: '', title: 'CSS'},
        {desc: text, img: '', title: 'JavaScript'},
        {desc: text, img: '', title: 'TypeScript'},
        {desc: text, img: '', title: 'REACT'},
        {desc: text, img: '', title: 'REDUX'},
    ]
  return (
    <div className={classes.app}>
        <Header/>
        <Main/>
        <MySkills skills={skills}/>
        <Projects projects={projects}/>
        <Form/>
        <Footer/>
    </div>
  );
}

export default App;
