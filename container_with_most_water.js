let arr = [ 4,5,8,9,2,1,7,8,5];
let left = 0;
let right = arr.length-1;
let maxArea = 0;

let findMaxArea = (height)=>{
    while(left < right){
        let h = Math.min(arr[left],arr[right]);
        let w = right - left; 
        let area = h*w;
        maxArea = Math.max(maxArea,area);

        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    
    return maxArea;
}
let hel = findMaxArea(arr);
console.log(hel);