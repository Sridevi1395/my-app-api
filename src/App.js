import React, {useState, useEffect} from 'react';
import './App.css';
import Questionaire from './Components/Questionaire';
//import useLocalStorage from "react-use-localstorage";

function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  localStorage.setItem('initialscore',JSON.stringify(score));
        //console.log(JSON.parse(localStorage.getItem('initialscore')));

//using react hooks
  useEffect(() =>{
    const API_URL = `https://opentdb.com/api.php?amount=10&category=18&type=multiple`;
    
    fetch(API_URL)

      .then(res => res.json())
      .then((response) => {
        console.log(response);

       // const quiz = localStorage.getItem('user');

        localStorage.setItem('user', JSON.stringify({response}));
        //console.log(JSON.parse(localStorage.getItem('user')));
        console.log('Check');
    
        const data = JSON.parse(localStorage.getItem('Current-Question'));
        if (data) {
          setQuestions(data);
        }
        
        const questions = response.results.map((question) => ({
          ...question,
          answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)   
        }))

        localStorage.setItem("Current-Question",JSON.stringify(questions));
        //localStorage.setItem('quiz',JSON.stringify(questions))     
      
        setQuestions(questions) 
        console.log(questions);
    
      });
    },[])


  const handleAnswer = (answer) => {
    if(!showAnswers){
      if(answer === questions[currentIndex].correct_answer){
        setScore(score+1);
      }
    }

    localStorage.setItem('index',JSON.stringify(currentIndex));
    //console.log(JSON.parse(localStorage.getItem('index')));

    localStorage.setItem('score',JSON.stringify(score));
    //console.log(score);

    setShowAnswers(true);
    
  }

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex+1);
    setShowAnswers(false);
  }


  return ( questions.length > 0 ? (

    <div className="container">
      {currentIndex >= questions.length ? (
      
      <h1>The Quiz Ended, Your Score is {score}</h1>): (<Questionaire  handleAnswer={handleAnswer}
        showAnswers={showAnswers}
       
        handleNextQuestion={handleNextQuestion}
        response ={questions[currentIndex]}/>)}

        
      
    </div>
     
  ) : <div className="container">Loading...</div>
    
  );
    

      }

export default App;
