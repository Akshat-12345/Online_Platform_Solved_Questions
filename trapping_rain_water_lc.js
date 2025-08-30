let arr = [ 0,1,0,2,1,0,1,3,2,1,2,1];

let rain = (arr)=>{
    let left = 0;
    let right = arr.length - 1;
    let maxRight = 0;
    let maxLeft = 0 ;
    let totalWater = 0

    while(left<right){
        if (arr[left] < arr[right]){
            if(arr[left] >= maxLeft){
                maxLeft = arr[left];
            }else{
                totalWater = totalWater + maxLeft - arr[left];
            }
            left++;
        }else{
            if(arr[right]>= maxRight){
                maxRight = arr[right];
            }else{
                totalWater = totalWater + maxRight - arr[right];
            }
            right --;
        }

    }
    return totalWater;
}

console.log(rain(arr));