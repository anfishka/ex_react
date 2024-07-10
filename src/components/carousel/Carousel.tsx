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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    return(
        <div className="image-slider-container">
        
      
        <Slider {...settings}>
        {[1, 2, 3, 4].map((index) => (
          <Card key={index}>
            {index === 4 ? (
              
             <Map/>
            ) : (
              <CardMedia
              component='img'
              height='300'
              image={img}
              />
        
            )}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={` ${index === 1 ? "Введите марку или модель авто" : index === 2 ? "Введите номерной знак авто" : index === 3 ? "Введите VIN авто" : ""}`}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Card>
        ))}
      </Slider>
      </div>
    )
}

export default Carousel