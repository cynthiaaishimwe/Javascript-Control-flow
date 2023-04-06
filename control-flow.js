// Write a function that accepts an array of strings and console.logs each element using a for loop.
 let Array = [20,30,40,50,60];

for(let i =0 ; i<Array.length;i++){
   console.log(Array[i]);
}
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.


  function multiplyArray(multiply){
    
   multiply.forEach(multiply =>{
       multiplied = multiply *2;
    
       console.log(multiplied)
    });
  }
  let multiply = [1, 11, 7, 3, 8, 2, 3,];
  multiplyArray(multiply);
  







// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
  // let array2=[1,5,3,8,4]

function ArrayNumbers(array2){

  for(let i =0 ; i<array2.length;i++){
   if(i<4){
      array2 [i]*=8
  }else if(i>=array2.length-2){
    array2[i]+=5
  }

  }
console.log(array2)
  }
  let array2=[1,5,3,8,4,7,9,1,13]
  ArrayNumbers(array2)

  


// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
//   let arrNum = [1,2,3,4,5,6,7,8,9];
function num(arrNum){
   let i= 0;

  while(i<arrNum.length){
   console.log(arrNum[i]);
   if (i ===4){
     break;
   }
   i++
 }
}
let arrNum = [1,2,3,4,5,6,7,8,9];
num(arrNum)









// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
 let fruits= ['apple','plum','banana','strawberries','kiwi']
   

      for(let i =0; i<fruits.length;i++) {

        if(i ===2){
            continue;
        }
        console.log("continue",fruits[i]);
      }