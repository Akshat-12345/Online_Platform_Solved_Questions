function minToMax(tests) {
    const T = parseInt(tests[0]); 
    let idx = 1; 

    for (let t = 0; t < T; t++) {
        const N = parseInt(tests[idx++]); 
        const A = tests[idx++].trim().split(' ').map(Number); 

        
        let mini = Math.min(...A);

        
        let count = 0;
        for (let x of A) {
            if (x > mini) count++;
        }

        console.log(count);
    }
}