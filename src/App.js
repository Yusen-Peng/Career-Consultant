import React, { useState } from 'react'
import './App.css';
import Question from './Components/Question'



function App () {
  
  /*
   * 4 global variables
   */
    var CS = 0;
    var med = 0;
    var business = 0;
    var libralArts = 0;

  /*
   * keep track of 9 attributes
   */
  const [formData, setFormData] = useState({
    math: '',
    science: '',
    reading: '',
    affluence:'',
    household:'',
    general:'',
    close:'',
    far:'',
    relationship:'',
})

 /*
  * update states
  */
  function onChangeHandler(event) {
    setFormData(() => {
      return ({
        ...formData,
        [event.target.name]: event.target.value
      });
    });
  }

  function generateResult(){
    console.log(formData.math)
    console.log(formData.science)
    console.log(formData.reading)
    console.log(formData.affluence)
    console.log(formData.household)
    console.log(formData.general)
    console.log(formData.close)
    console.log(formData.far)
    console.log(formData.relationship)


    //question 1
    if(parseInt(formData.math) > 6){
      CS = CS + 1;
    }else if(parseInt(formData.math) > 4){
      business = business + 1;
      med = med + 1;
    }else{
      libralArts = libralArts + 1;
    }

    //question 2
    if(parseInt(formData.science) > 6){
      CS = CS + 1;
      med = med + 1;
    }else if(parseInt(formData.science) > 4){
      business = business + 1; 
    }else {
      libralArts = libralArts + 1;
    }

    //question 3
    if(parseInt(formData.reading) > 6){
      med = med + 1;
      libralArts = libralArts + 1;
    }else if(parseInt(formData.reading) > 4){
      business = business + 1;
    }else{
      CS = CS + 1;
    }

    //question 4
    if(parseInt(formData.affluence) > 6){
      libralArts = libralArts + 1;
    }else if (parseInt(formData.affluence) > 4){
      business = business + 1;
      med = med + 1;
    }else {
      CS = CS + 1;
    }

    //question 5
    if(parseInt(formData.household) > 3){
      med = med + 1;
      CS = CS + 1;
    }else {
      libralArts = libralArts + 1;
      business = business + 1;
    }

    //question 6
    if(parseInt(formData.general) > 5){
      business = business + 1;
      libralArts = libralArts + 1;
    }else {
      med = med + 1;
      CS = CS + 1;
    }
    
    //question 7
    if(parseInt(formData.close) > 6){
      business = business + 1;
      libralArts = libralArts + 1;
    }else {
      med = med + 1;
      CS = CS + 1;
     }
    
     //question 8
    if(parseInt(formData.far) > 4){
      business = business + 1;
      libralArts = libralArts + 1;
    }else {
      med = med + 1;
      CS = CS + 1;
    }
      
    //question 9
    if(formData.relationship === 'yes'){
      business = business + 1;
      libralArts = libralArts + 1;
    }else {
      med = med + 1;
      CS = CS + 1;
    }
    
    const map = new Map([
      ["computer science",CS],
      ["medicine", med],
      ["liberal arts",libralArts],
      ["business", business],
    ]);

    console.log(map);

    var maxFreq = 0;
    for(const [k, v] of map){
      maxFreq = Math.max(v,maxFreq);
    }
    
    var finalResult = '';
    for(const [k, v] of map){ 
      if(v === maxFreq){
        finalResult = k;
      }
    }
   
    alert('Your best career path is: ' + finalResult);
  }

  return (
    <div className="App">
      <p className='App-back'>
        <header className="App-header">
          <h1>
            Yusen's Career Consultant
          </h1>
        
          <h3>
          <img src='logo192.png' alt='Yusen'></img><br/>
          more information about the author:<br/>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/yusen-peng-864a75260/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yusen's LinkedIn account
          </a>
          </h3>
          <p className='App-statement'>
            Career path is a life-changing decision that everyone has to consider really carefully. However, many students (maybe including you)
            still don't know what career path they are likely to pick. Fortuately, Yusen is here to help you out! By answering questions in
            three dimensions, Yusen will help you decide your best career path! 
          </p>
        </header>
      
        <p className='App-Question'>
        <h2 className='App-Dimension'>The first Dimension: Academic Performance</h2>
        <Question  id='1' sentence='rate your math proficiency from 1 to 10'/>
        <input onChange={onChangeHandler} name='math'/>
        <Question id='2' sentence='rate your hard science proficiency from 1 to 10'/>
        <input onChange={onChangeHandler} name='science'/>
        <Question id='3' sentence='rate your reading proficiency from 1 to 10'/>
        <input onChange={onChangeHandler} name='reading'/>
        
        <h2 className='App-Dimension'>The second Dimension: family background</h2>
        <Question  id='4' sentence='rate your family affluence from 1 to 10'/>
        <input onChange={onChangeHandler} name='affluence'/>
        <Question id='5' sentence='list the number of persons in your household (from 1 to 10)'/>
        <input onChange={onChangeHandler} name='household'/>

        <h2 className='App-Dimension'>The third Dimension: extroversion</h2>
        <Question id='6' sentence='rate your general extroversion from 1 to 10 (1 means most introverted and 10 means most extroverted)'/>
        <input onChange={onChangeHandler} name='general'/>
        <Question id='7' sentence='rate your frequency in which you talk to your family and friends (from 1 to 10)'/>
        <input onChange={onChangeHandler} name='close'/>
        <Question id='8' sentence='rate your frequency in which you proactively talk to strangers (from 1 to 10)'/>
        <input onChange={onChangeHandler} name='far'/>
        <Question id='9' sentence='Do you want to get into a relationship in college ("yes" or "no")'/>
        <input onChange={onChangeHandler} name='relationship'/>
        </p>
        <p>
          <div className='App-Dimension'>
            <button onClick={generateResult} className='App-run'>Check out your best career path!</button>
          </div>
        </p>
      </p>
    </div>
  );
}

export default App;