import React, { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import axios, * as others from 'axios';



function WordApi(){
  const [word, setWord] = useState('');
  const [myArray, updateMyArray] = useState( [] );


     
     
      const fetchData = async () => {
       const newArray = [];
    //    updateMyArray((current) =>
    //    current.filter((myArray) => [])
    //  );
        updateMyArray(newArray);
        console.log(myArray+"updated");
        const headers = {
          'X-RapidAPI-Key': '0e4150e13amsh6211e0fb63b9ee6p19087fjsne2f9e5820b3d',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        };
        const url = 'https://wordsapiv1.p.rapidapi.com/words/'+word+'/typeOf';
        const response = await axios.get(url, { headers });
        let defArray = response.data.typeOf
        updateMyArray([...myArray, defArray]);
  
       console.log(defArray);
       console.log(myArray);
       
      };
  
     useEffect(() => console.log(myArray), [myArray])
   


  const handleSearch = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Card style={{ width: '25rem' }}>
    <Card.Body>
        <Card.Title>WordAPI</Card.Title>
        <Form className="word-form" onSubmit={handleSearch}>
            <Form.Group className="mb-3">
                <Form.Label>Word</Form.Label>
                <Form.Control type="text" placeholder="Enter word" onChange={(event) => setWord(event.target.value.trim())} />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Definition</Form.Label>
                <Form.Label>{myArray.join(', ')}</Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    </Card.Body>
   
 </Card>
  );
}

export default WordApi;
