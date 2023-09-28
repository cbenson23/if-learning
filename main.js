/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


function isItLong(str) {
  let int =(str.length)
  if (int>20)
  return "That's a long string!"  ;

  else return }

  function isItMedium(str) {
    let num =(str.length)
    if (num>=10 && num<=20)
   
    return "That's a regular sized string!" ;
  
    else return }

    function isItShort(str){
      let num=(str.length)
      if (num<10)
      return "That's a small string!"  ;
    
      else return "That's not a small string!"
    }


    function howLongIsMyString(str){
      let num=(str.length)
      if (num>20){
      return "That's a long string!"}
    else if  ((num >= 10) && (20 >= num))
     {return "That's a regular sized string!"
      }
    else if (num<10){
    return "That's a small string!"
    }}


function instructorHeight(str) {
if (str==="Kyle"){return 70}
else if (str==="Jason"){
  return 73}
  else {return "I don't know that instructor!"}}

  
/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}