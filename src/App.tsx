import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Container, createTheme } from '@mui/material';
import styled from '@emotion/styled';

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
  
  return (
    <>
    <Button>click me</Button>
    </>
    
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
