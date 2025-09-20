import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

const InfoBox = ({info}) => {
     const INIT_URL="https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

     const HOT_URL="https://plus.unsplash.com/premium_photo-1688431299771-500da5863e91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const COLD_URL="https://plus.unsplash.com/premium_photo-1671127303935-6042d1d8fcd8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const RAINY_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";
    const CLOUDY_URL="https://media.istockphoto.com/id/1055643450/photo/snowboarding-in-kashmir.webp?a=1&b=1&s=612x612&w=0&k=20&c=5w54DsP3g2PIElywFd_AkxqPJ6plp3sXn0-EiGn3gQM=";

    const hot=<i class="fa-solid fa-hot-tub-person"></i>;
    const cold=<i class="fa-solid fa-snowflake"></i>;
    const rainy=<i class="fa-solid fa-cloud-showers-heavy"></i>;
    const cloudy=<i class="fa-solid fa-cloud"></i>;
  return (
    <div className='InfoBox'>
      
     <div className='cardContainer'>   
     <Card sx={{ maxWidth: 345,backgroundColor:'black',boxShadow:'5px 5px 15px yellow',textcolor:'white',borderRadius:'15px',borderColor:'yellow' }} >
      <CardMedia
        sx={{ height: 140 ,textcolor:'white' }}
        image={info.humidity>80?RAINY_URL :(info.temp>25?HOT_URL:(info.temp<20?CLOUDY_URL:CLOUDY_URL))}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  color='white'>
          {info.city}&nbsp; &nbsp; &nbsp;
          {info.temp>25?hot:(info.temp<20?cold:(info.humidity>80?rainy:cloudy))}
        </Typography>
        <Typography variant="body2" color='white'  component={"span"}>
            <div className='infoDetails'>
         <p>Temperature:{info.temp}&deg;C</p>
         <p>Humidity :{info.humidity}&deg;C</p>
         <p> Min Temp:{info.tempMin}&deg;C</p>
         <p> Max Temp :{info.tempMax}&deg;C</p>
         <p>The weather can be described as<i>${info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
         </div>
        </Typography>
      </CardContent>
     </Card>
     </div> 
    </div>
  );
}

export default InfoBox;
