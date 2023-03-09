import React, { useState} from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import axios, * as others from 'axios';
import movieStyle from'./movieStyle.css'



function MovieApi(){
  const [searchstring, setSearchString] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [movieArray, setMovieArray] = useState([]);
 

 

     
     
      const fetchData = async () => {
       
        console.log("searchString "+searchstring);
        const headers = {
          'X-RapidAPI-Key': '0e4150e13amsh6211e0fb63b9ee6p19087fjsne2f9e5820b3d',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        };
        const url = 'https://movie-database-alternative.p.rapidapi.com/?s='+searchstring+'&r=json&page=1';
        const response = await axios.get(url, { headers });
       
        console.log(response.data);
        if(response.data.Response === 'True')
            setMovieArray(response.data.Search);
        else
            setErrorMessage(response.data.Error);
      
       
      };


   


  const handleSearch = (event) => {
    event.preventDefault();
    if(searchstring){
        setErrorMessage("");
        fetchData();
    }
    else{
        setErrorMessage("* Please enter movie");
        setMovieArray([]);
    }
   
  };

  return (
    <Card style={{ width: '25rem' }}>
    <Card.Body>
        <Card.Title>MovieAPI</Card.Title>
        <Form className="word-form" onSubmit={handleSearch}>
        <Form.Group className="mb-3">
                <Form.Label>Search</Form.Label>
                <Form.Control type="text"  placeholder="Enter movie name" onChange={(event) => setSearchString(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'red' }}>{errorMessage}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Button className={movieStyle.buttonStyle} variant="primary" type="submit">
                    Search
                </Button>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>MovieDetails</Form.Label>
            </Form.Group>
            
            <Form.Group>
          {movieArray.map(item => (
            <Form.Group>
             <section className={movieStyle.movieGrid}>
             <img src={item.Poster} alt="image" width = "100" height ="100"/>
             <p>{item.Title}{"  : "}{item.Year}</p>
             </section>
             </Form.Group>
          ))}
            </Form.Group>
        </Form>
    </Card.Body>
   
 </Card>
  );
}

export default MovieApi;
