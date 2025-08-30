let lcmAndGcd = (a, b) => {
        // code here
        function hcf(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
          }
           return x;
        }

        let gcdVal = hcf(a, b);
        let lcmVal = (a * b) / gcdVal;

        return [lcmVal, gcdVal];
        
    }


    console.log(lcmAndGcd(50,75))

