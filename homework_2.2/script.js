'use strict'

function fibo () {}

const resultF = (() => {
    {
        let a  = 0;
        let b = 1;
        let counter = 0;

        return () => {
            if (counter === 0) {
                counter++;
                return 1;
            }
            if (counter === 2) {
                counter++;
                return 2;
            }
            let result = a + b;
            a = b;
            b = result;
            return result; 
        }
    }
})();

console.log(resultF());
console.log(resultF());
console.log(resultF());
console.log(resultF());
console.log(resultF());