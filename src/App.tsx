import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Testimony} from "./layout/sections/testimony/Testimony";


function App() {
  return (
      <div className="App">
          <Header/>
          <Main />
          <Skills/>
          <Projects/>
          <Testimony/>
      </div>
  );
}

export default App;
