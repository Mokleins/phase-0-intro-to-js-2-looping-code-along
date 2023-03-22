// Code your solutions in this file
function countDown(numbers){
   while(numbers >= 0){
    console.log(numbers--);
   } 
}

function writeCards(array, name){
    let i = 0;
    let newArray =[];

    while(i < array.length){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
    i++;
    }
    return newArray;
}