// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

console.log(processFirstItem(['foo', 'bar'], (str) =>str + str ));


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * //counter 1-> declares the fucntion counterMaker and count is defined inside the function. and then the return statement is the fucntion
 * counter that returns the stated variable +1. Then the entire countermaker fucntion is saved to a variable called counter1. so you can then use counter1 as data.
 * 
 * //counter 2--> count is declared outside of the fucntion making it global. The function can pull the variable inside and use it. then the fucntion coutner2 will 
 * return count +1.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * I think counter 1 uses a function bc there is a function within a function 
 * I think counter 1 bc count is defined within the function 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * I think count varibale is able to be changed in the second one where as count in the first variable is never changed unless it is changed within that function. 
 * the best time to use one would be if you want to keep increasing the number when you invoke the function- the second one you can use the variable count in other functions
 * and the return count will alwauys be the same no matter how many times you run it. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
console.log(counter1());
console.log(counter1());

// counter2 code
let count = 0;

  function counter2() {
    return count++;
  }
  console.log(counter2());
  console.log(counter2());
  console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. 
This should be a whole number between 0 and 2. */

function inning(){
  
return Math.floor(Math.random()* Math.floor(3));
    /*Code Here*/

}

console.log(inning());
console.log(inning());
console.log(inning());

/*function inning2(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(inning2(0, 3));
console.log(inning2(0, 3));
console.log(inning2(0, 37));
console.log(inning2(0, 10));
console.log(inning2(0, 100));*/

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a 
number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

/*function finalScore(callback, numOfInnings){

const score={};
score.home=callback*numOfInnings;
score.away=callback*numOfInnings;
return score;
} 


  /*Code Here*/


/*
console.log(finalScore(inning(), 5)); 
*/
/*loop through callback the number of innings and then add those 
  numbers together for each value in the key */

/*function finalScore(callback, numOfInnings){

  const score={
    'home':'home',
    'away':'away'
  }

   for (let i = 0; i <= numOfInnings; i++){

   };
 }*/

 /*function finalScore(callback, numOfInnings){

  function allInnings(){
    let count=0;
    for (let i = 0; i <= numOfInnings; i++){
      count= callback() + count;
    }
    return count 

  };

  return {
    home:allInnings(),
    away:allInnings()
  };
  
  } 

  console.log(finalScore(inning, 9));*/
  


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

/*function scoreboard(callback, numOfInnings) {

  const score={};
  function allInnings(){
    let homeScore=0;
    let awayScore=0;
    for (let i = 0; i <= numOfInnings; i++){
      homeScore= callback() + homeScore;
      awayScore=callback() + awayScore;
      const myKey = i + 'th inning';
      score[myKey] = homeScore + "-" + awayScore;
    };
      
  }
    allInnings();
    return score
 
};

  console.log(scoreboard(inning,9));*/

  function scoreboard(callback, numOfInnings) { 

    const score={}
    function allInnings(){
      let homeScore=0;
      let awayScore=0;
      
      for (let i = 0; i <= numOfInnings; i++){
        let myKey="";
        if (i==1){
          myKey = i + 'st inning'; 
        }
        else if (i==2){
          myKey = i + 'nd inning';
        }
        else if (i==3){
          myKey = i + 'rd inning';
          
        }
        else {
         myKey= i + 'th inning';
         
        }
        homeScore= callback() + homeScore;
        awayScore=callback() + awayScore;
        score[myKey] = homeScore + "-" + awayScore;
 
      };
   
    }
    allInnings();
    return score
 
  };

  console.log(scoreboard(inning,9));
  