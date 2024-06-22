// Named function
//1.  Do the below programs in anonymous function 

// a. Print odd numbers in an array

let arr=[0,1,2,3,4,5,6,7,8,9,10];

function oddnumber(arr){
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

function titlecase(mymsg){

    let step1 = mymsg.split(' ');
    
    let step2 = step1.map(word => word.charAt(0).toUpperCase()+word.substr(1).toLowerCase());

    let result = step2.join(' ');
    console.log(result)
}
titlecase(mymsg)

// c.Sum of all numbers in an array

let arr =[1,2,3,4,5];

function sumofarr(arr){
    
    let result =0;

    for (let i=0; i< arr.length; i++){
        result +=arr[i]; 
     }
     console.log(result)
}
sumofarr(arr)

// d.Return all the prime numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10];

function isprime(num){
    if (num <= 1) return false; // number with 1 and less than 1, condition is given
    for (let i=2; i<=Math.sqrt(num); i++){ // number with 2 or more than two, can be checked with sqrt condition
        if (num % i === 0) return false;
    }
    return true;
}

function getprimenumber(arr){
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

function ispalindrome(word){
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}
 function getpalindrome(arr){
    let palindromes=[];

    for(let i=0; i<arr.length; i++){

        if (ispalindrome(arr[i])) {
            palindromes.push(arr[i])
        }
    }
    return palindromes
 }
 console.log(getpalindrome(arr))

// f.Return median of two sorted arrays of the same size.

let arr1=[1,3,4,5]
let arr2=[2,7,4,6]

function findmediansortedarray(arr1, arr2){
    let merged = arr1.concat(arr2); //adding two array
    let sortarr= merged.sort((a,b) => a-b); //sorting in ascending order
    let mid = sortarr.length/2; //finding the mid term
    
    // if the length is 6,6%2==0, condition satifies means mid number is 3 and 4. mean of 3(mid-1),4(mid) is (3+4)/2 
    if (sortarr.length % 2== 0){
        return (sortarr[mid-1]+sortarr[mid])/2;
    } 
    else{
        return (sortarr[Math.floor(mid)]) // 6%2==0, it is not satisfied, take the middle term and printit in output
    }
}

console.log(findmediansortedarray(arr1, arr2))

// g.Remove duplicates from an array

let arr=[1,2,3,4,4,2,3,1];

arr.sort((a,b) => a-b);

let uniquearr =[];

for(let i=0; i<arr.length; i++){

    if (arr[i] !== arr[i+1]){ // 1!==2, push 1 in the uniquearr
        uniquearr.push(arr[i]);
    }
}
console.log(uniquearr)

// h.Rotate an array by k times

let arr = [1,2,3,4,5];
let k = 2;

function rotatearray(arr, k) {
    let n = arr.length;

    k = k % n; //ensures that k is within the bounds of the array length. n=5,k=2 2= 2 % 5

    let part1 = arr.splice(n - k,k); // Take the last k elements
    let part2 = arr; // The rest of the elements

    return part1.concat(part2); // Join both parts
}
console.log(rotatearray(arr,k)); 



