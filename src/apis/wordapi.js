import React, { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import axios, * as others from 'axios';



function WordApi(){
  const [word, setWord] = useState('');
  const [definition ,setDefinition] = useState('');
  const [errorMessage, setErrorMessage] = useState();

     
     
      const fetchData = async () => {
        const headers = {
          'X-RapidAPI-Key': '0e4150e13amsh6211e0fb63b9ee6p19087fjsne2f9e5820b3d',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        };
        const url = 'https://wordsapiv1.p.rapidapi.com/words/'+word+'/typeOf';
        const response = await axios.get(url, { headers });
        let defArray = response.data.typeOf;
        if(defArray.length == 0){
          setDefinition("No definition found");
        }
        else{
          let defSet="";
          {defArray.map(name => ( 
            defSet = " "+defSet+name+","
            
          ))}  
          setDefinition(defSet.substring(0,defSet.length-1));
      }
        
      
       
       
      };
  
   //  useEffect(() => console.log(myArray), [myArray])
   


  const handleSearch = (event) => {
    event.preventDefault();
    if(word){
      setErrorMessage("");
    fetchData();
    }else{
      setErrorMessage("* Enter word for definition");
      setDefinition("");
    }
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
                <Form.Label style={{ color: 'red' }}>{errorMessage}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Definition</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label >{definition}</Form.Label>
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
