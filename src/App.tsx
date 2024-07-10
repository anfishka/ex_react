import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Container, FormControlLabel, Switch, createTheme } from '@mui/material';
import styled from '@emotion/styled';

import Carousel from './components/carousel/Carousel';
import MenuCustom from './components/menu/MenuCustom';
import car_animation1 from './components/img/car1.png'

import { useSpring, animated } from "@react-spring/web";


const Button = styled.button`
background:red;`


function fetchRegistrationPlate()
{
  let api_key = '6adb8dac3bcd1e82b8f138233342b2b1'
//    let url = `https://baza-gai.com.ua/nomer/${registration_plate}`;
let url = `https://baza-gai.com.ua/nomer/AE4000IT`;

    fetch(url, {
        headers: {
            "Accept": "application/json", "X-Api-Key": api_key 
        
        }
    })
        .then(r => r.json())
        .then((data) => {
            console.log(data)
             if (data.error) {
         //   displayError(data.error);
         console.log(data.error)
        } else {
console.log(data)
         //    displayCarInfo(data)
        }
    })
    .catch((error) => {
               console.error("Error fetching data: ", error);
       // displayError("Ошибка при получении данных.");
            });
}
let api_key = '6adb8dac3bcd1e82b8f138233342b2b1'
let url = `https://baza-gai.com.ua/make/lamborghini/huracan`;

function App() {
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

   
    </div>
    
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */



//function fetchRegistrationPlate(registration_plate)




/*
   <>
 <Container >
       <Card children={'dddddd'}/>
       
 </Container>

   </>*/

//    let url = `https://baza-gai.com.ua/nomer/${registration_plate}`;
/*
    fetch(url, {
        headers: {
            "Accept": "application/json", "X-Api-Key": api_key 
        
        }
    })
        .then(r => r.json())
        .then((data) => {
            console.log(data)
             if (data.error) {
         //   displayError(data.error);
         console.log(data.error)
        } else {
console.log(data)
         //    displayCarInfo(data)
        }
    })
    .catch((error) => {
               console.error("Error fetching data: ", error);
       // displayError("Ошибка при получении данных.");
            })

            */
          )
        
}

export default App;
