import Welcome from "./components/Welcome";
import './App.css';
import Header from "./components/Header";
import Plx from "react-plx";
import Login from "./login/login";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from "./components/Video";
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  const parallaxData = [
    {
      start: 0,
      end: 500,
      easing: 'ease-in',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];

  const parallaxData1 = [
    {
      start: 0,
      end: 500,
      easing: 'ease-in',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
  ];

  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Plx className='parallax-first' parallaxData={parallaxData}><Welcome /></Plx>
            <Plx className='parallax-second' parallaxData={parallaxData1}><Login /></Plx>
          </>
        } />
        <Route path="/Video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
