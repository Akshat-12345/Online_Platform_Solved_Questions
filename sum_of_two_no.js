let arr = [ 5, 2,17,11,1 ];
let target = 13;
const map = new Map();

let sum = (arr,target)=>{
    for(let i =0 ; i< arr.length; i++){
        let complement = target - arr[i];

        if (map.has(complement)){
            return [complement,arr[i]];
        }

        map.set(arr[i],i);
    }
    
    return [];
}

console.log(sum(arr,13));