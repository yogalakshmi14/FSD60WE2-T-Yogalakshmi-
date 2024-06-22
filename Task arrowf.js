// Arrow Functions

//a. Print odd numbers in an array

let arr=[0,1,2,3,4,5,6,7,8,9,10];

const oddnumber = (arr) => {
    let result =[];
    for(let i=0; i<arr.length; i++){
        if (arr[i] %2 !== 0) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(oddnumber(arr))

// b. Convert all the strings to title caps in a string array

let mymsg = "when i need it no one is there to help me";

const titlecase = (mymsg) => {

    let step1 = mymsg.split(' ');
    
    let step2 = step1.map(word => word.charAt(0).toUpperCase()+word.substr(1).toLowerCase());

    let result = step2.join(' ');
    console.log(result)
}
titlecase(mymsg)

// c.Sum of all numbers in an array

let arr =[1,2,3,4,5];

const sumofarr = (arr) => {
    
    let result =0;

    for (let i=0; i< arr.length; i++){
        result +=arr[i]; 
     }
     console.log(result)
}
sumofarr(arr)

// d.Return all the prime numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10];

const isprime = (num) => {
    if (num <= 1) return false; // number with 1 and less than 1, condition is given
    for (let i=2; i <= Math.sqrt(num); i++){ // number with 2 or more than two, can be checked with sqrt condition
        if (num % i === 0) return false;
    }
    return true;
}

const getprimenumber = (arr) => {
    let primes = [];

    for(let i=0; i<arr.length; i++){
        
        if (isprime(arr[i])){
            primes.push(arr[i])
        }
    }
    return primes;
}
console.log(getprimenumber(arr))

// e.Return all the palindromes in an array

let arr = ['level','hello','racecar','world','madam'];

const ispalindrome = (word) => {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}
 const getpalindrome = (arr) => {
    let palindromes=[];

    for(let i=0; i<arr.length; i++){

        if (ispalindrome(arr[i])) {
            palindromes.push(arr[i])
        }
    }
    return palindromes
 }
 console.log(getpalindrome(arr))

