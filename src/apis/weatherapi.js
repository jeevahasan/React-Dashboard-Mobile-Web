import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import axios, * as others from 'axios';



function WeatherApi(){
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataCountry, setWeatherDataCountry] = useState();
  const [weatherDataTemp, setWeatherDataTemp] = useState();
  const [weatherDataDesc, setWeatherDataDesc] = useState();
  const [weatherDataName, setWeatherDataName] = useState();


     
     
      const fetchData = async () => {
       
        console.log("latitude "+lat+" longitude"+lon);
        const headers = {
          'X-RapidAPI-Key': '0e4150e13amsh6211e0fb63b9ee6p19087fjsne2f9e5820b3d',
          'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        };
        const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current?lat='+lat+'&lon='+lon;
        const response = await axios.get(url, { headers });
        setWeatherData(response.data);
        console.log(response.data.data[0]);

        setWeatherDataName("Timezone: "+response.data.data[0].timezone);
        setWeatherDataCountry("City: "+response.data.data[0].city_name);
        setWeatherDataTemp("Tempertaure: "+response.data.data[0].app_temp+"Kelvin");
        setWeatherDataDesc("Description: "+response.data.data[0].weather.description);
      
       
      };
  
     useEffect(() => {
      
        console.log("weather...."+ weatherDataName);
        
     });
   


  const handleSearch = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Card style={{ width: '25rem' }}>
    <Card.Body>
        <Card.Title>WeatherAPI</Card.Title>
        <Form className="word-form" onSubmit={handleSearch}>
            <Form.Group className="mb-3">
                <Form.Label>Lat</Form.Label>
                <Form.Control type="number" min="-180" max="180" step="0.01" placeholder="Enter Latitude" onChange={(event) => setLat(event.target.value)} />
            </Form.Group>
                
            <Form.Group as={Row} className="mb-3">
                <Form.Label>Longitude</Form.Label>
                <Form.Control type="number"  min="-180" max="180" step="0.01" placeholder="Enter Longitude" onChange={(event) => setLon(event.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>WeatherDetails</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{weatherDataName}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{weatherDataCountry}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{weatherDataTemp}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                 <Form.Label>{weatherDataDesc}</Form.Label>
            </Form.Group> 
               
                
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    </Card.Body>
   
 </Card>
  );
}

export default WeatherApi;
