function leaders(arr) {
    const result = [];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let j;
        for (j = i + 1; j < n; j++) {
            if (arr[i] < arr[j])
                break;
        }
        if (j === n)
            result.push(arr[i]);
    }
    return result;
}
const arr = [16, 17, 4, 3, 5, 2];
const result = leaders(arr);
console.log(result)



// iska complexity n**2 hai isliye gfg mai work nhi karega traverse karke karlena gfg mai

// class Solution {
//     // Function to find the leaders in the array.
//     leaders(a) {
        
//         const result = [];
//         let n = a.length;
//         let maxFromRight = a[n - 1];  
//         result.push(maxFromRight);

        
//         for (let i = n - 2; i >= 0; i--) {
//             if (a[i] >= maxFromRight) {
//                 maxFromRight = a[i];
//                 result.push(a[i]);
//             }
//         }

        
//         return result.reverse();
//     }
// }