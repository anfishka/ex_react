
import React, { useEffect } from 'react';
import './App.css';
import { Card, Container, FormControlLabel, Switch, createTheme } from '@mui/material';
import styled from '@emotion/styled';

import Carousel from './components/carousel/Carousel';
import MenuCustom from './components/menu/MenuCustom';
import car_animation1 from './components/img/car1.png'
import car_animation2 from './components/img/car3.png'
import { useSpring, animated } from "@react-spring/web";

const Button = styled.button`
  background: red;
`;
function App() {
  const [springs1, setSprings1] = useSpring(() => ({
    from: { transform: 'translateX(0px)' },
    to: { transform: 'translateX(0px)' },
    config: { mass: 1, tension: 180, friction: 70 },
  }));

  const [springs2, setSprings2] = useSpring(() => ({
    from: { transform: 'translateX(2000px)' },
    to: { transform: 'translateX(2000px)' },
    config: { mass: 1, tension: 180, friction: 70 },
  }));

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setSprings1({ to: { transform: 'translateX(2000px)' } });
        setSprings2({ to: { transform: 'translateX(0px)' } });
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setSprings1, setSprings2]);

  return (
    <div className="image-slider-container">
      <MenuCustom />

      <animated.img
        src={car_animation1}
        alt="Car Animation 1"
        style={{
          width: 100,
          ...springs1,
        }}
      />

      <Carousel />

      <animated.img
        src={car_animation2}
        alt="Car Animation 2"
        style={{
          width: 100,
          ...springs2,
        }}
      />
    </div>
  );
}

export default App;