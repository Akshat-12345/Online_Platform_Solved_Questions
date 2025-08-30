let str = "welcome to india";
let arr = [];
newWord = ' '
let count = "";

for(let i = 0; i<= str.length-1; i++){  
    if (str[i] !== " "){
      count = count + str[i];
    }else{
      arr.push(count);
      count = "";
    }
}

if (count.length > 0) {
       arr.push(count);
}

console.log(arr);

for(let i = arr.length-1; i>=0; i--){
     newWord = newWord + arr[i] + " ";
}
console.log(newWord)

// container with most water   lc
//tapping rain water  lc     two pointer
// effective approach cc