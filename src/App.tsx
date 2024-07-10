<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Container, FormControlLabel, Switch, createTheme } from '@mui/material';
import styled from '@emotion/styled';

import Carousel from './components/carousel/Carousel';
import MenuCustom from './components/menu/MenuCustom';
import car_animation1 from './components/img/car1.png'

import { useSpring, animated } from "@react-spring/web";

=======
import styled from "@emotion/styled";
import Carousel from "./components/carousel/Carousel";
import '../src/App.css'
>>>>>>> 74ba767ffdbbb3a18db5f44782d5e2465286202e

const Button = styled.button`
  background: red;
`;

function App() {
<<<<<<< HEAD
   const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  
   const springs = useSpring({
    from: { x: 0 },
     /* to: { x: 4000 }*/
        to: { x: checked ? 4000 : 0 }
  });


  return (
    <div className="image-slider-container">
   <MenuCustom/>
      <Carousel />
      


 
  
    <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <animated.img
        src={car_animation1}
        style={{
          width: 100,
        
          ...springs
        }}
      />

   
=======
  return (
    <div className="app">
      <Button>click me</Button>
      <Carousel/>
>>>>>>> 74ba767ffdbbb3a18db5f44782d5e2465286202e
    </div>
  );
}

export default App;
