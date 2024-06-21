// Immediately Invoking function Expression (IIFE)

// a. Print odd numbers in an array

(function(arr){
    
    let result =[];
    
    for(let i=0; i<arr.length; i++){
        
        if (arr[i] %2 !== 0) {
            result.push(arr[i])
        }
    }
    console.log(result)
}) ([0,1,2,3,4,5,6,7,8,9,10])

// b. Convert all the strings to title caps in a string array

(function(mymsg){

    let step1 = mymsg.split(' ');
    
    let step2 = step1.map(word => word.charAt(0).toUpperCase()+word.substr(1).toLowerCase());

    let result = step2.join(' ');

    console.log(result)

})("when i need it no one is there to help me")

// c.Sum of all numbers in an array

(function(arr){
    
    let result =0;

    for (let i=0; i< arr.length; i++){
        result +=arr[i]; 
     }
     console.log(result)

})([1,2,3,4,5])

// d.Return all the prime numbers in an array

(function(arr){
    
    let isprime = function(num){

        if (num <= 1) return false; // number with 1 and less than 1, condition is given
        
        for (let i=2; i<=Math.sqrt(num); i++){ // number with 2 or more than two, can be checked with sqrt condition
            if (num % i === 0) return false;
        }
        return true;
    };
    
    let primes = [];

    for(let i=0; i<arr.length; i++){
        
        if (isprime(arr[i])){
            primes.push(arr[i])
        }
    }
    console.log(primes)

})([1,2,3,4,5,6,7,8,9,10]);


// e.Return all the palindromes in an array

(function(arr) {
    let ispalindrome = function(word) {
        let reversed = word.split('').reverse().join('');
        return word === reversed;
    }
        let palindromes=[];
    
        for(let i=0; i<arr.length; i++){
    
            if (ispalindrome(arr[i])) {
                palindromes.push(arr[i])
            }
        }
        console.log(palindromes)
    })(['level','hello','racecar','world','madam'])

// f.Return median of two sorted arrays of the same size.

(function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = merged.length / 2;

    if (merged.length % 2 == 0) {
        console.log((merged[mid - 1] + merged[mid]) / 2); // Output: 4
    } else {
        console.log(merged[Math.floor(mid)]);
    }
})([1, 3, 4, 5], [2, 7, 4, 6]);

// g.Remove duplicates from an array

(function(arr){
    arr.sort((a,b) => a-b);
    let uniquearr =[];
    
    for(let i=0; i<arr.length; i++){
    
        if (arr[i] !== arr[i+1]){ // 1!==2, push 1 in the uniquearr
            uniquearr.push(arr[i]);
        }
    }
    console.log(uniquearr)
})([1,2,3,4,4,2,3,1])


// h.Rotate an array by k times

(function(arr, k) {
    let n = arr.length;

    k = k % n; //ensures that k is within the bounds of the array length. n=5,k=2 2= 2 % 5

    let part1 = arr.splice(n - k,k); // Take the last k elements
    let part2 = arr; // The rest of the elements

    console.log(part1.concat(part2))  // Join both parts

})([1,2,3,4,5],2)

