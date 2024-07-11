import { Card, CardMedia } from "@mui/material";
import Slider from "react-slick";
import  "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import img from './pexels-pixabay-210019.jpg'

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Map from "../map/Map";
import { useState } from "react";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    background:'#fff',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),background:'#fff'
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:'#fff'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '50ch',
        '&:focus': {
          width: '40ch',
        },
      },
    },
  }));
  


const Carousel = () => {
    const settings = {
        //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      }; 

    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        // Здесь можно добавить логику для анимации, если необходимо
        console.log('Enter key pressed!');
      }
    };
    
    return(
        <div className="image-slider-container">
        
      
        <Slider {...settings}>
        {[1, 2, 3, 4].map((index) => (
          <div key={index}>
            {index === 4 ? (
              
             <Map/>
            ) : (
              <img 
              alt='car'
              width='100%'
              height='400'
              style={{ objectFit: 'cover' }}
              src={img}
            />
        
            )}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Введите марку или модель авто"
                inputProps={{ 'aria-label': 'search' }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress} // Добавляем обработчик нажатия клавиши
              />
            </Search>
          </div>
        ))}
      </Slider>
      </div>
    )
}

export default Carousel