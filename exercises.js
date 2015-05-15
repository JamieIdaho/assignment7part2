// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){

    if (num1 > num2) {
        return num1 + " is larger";
    }
    else if (num2 > num1) {
        return num2 + " is larger";
    }
    else {return "get yo head straight"}
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){

    if (num1 > num2 && num1 > num3) {
        return num1 + " is largest";
    }
    else if (num2 > num1 && num2 > num3) {
        return num2 + " is largest";
    }
    else if (num3 > num1 && num3 > num2) {
        return num3  + " is largest";
    }
    else {"try again!"}
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    return ("aeiou".indexOf(char)) >= 0;
    }


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
var newArray = [];

function rovarspraket(phrase){
    var x = phrase.split('');
    console.log(x);

    x.forEach(function(letter) {
        if ("aeiou ".indexOf(letter) < 0) {
            newArray.push(letter + 'o' + letter);
        }
        else if ("aeiou ".indexOf(letter) >= 0) {
            newArray.push(letter);
        }
    })
    console.log(newArray.join(''));
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
//
//

function sum(myArray){
    var answer = myArray.reduce(function(a,b) {
        return a + b;
    })
return answer;
}

function multiply(myArray2){
    var answer = myArray2.reduce(function(a,b) {
        return a * b;
    })
 return answer;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(y){
    return y.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var longest = words.sort(function(a,b) {
        return b.length - a.length;
    }) [0]
   return longest;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------


function filterLongWords(words, i){
    var compareArray = [];
    var compare = words.forEach(function(word) {
        if (word.length > i) {
            compareArray.push(word);}
    })
    return compareArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var frequencyList = new Object();
    for (var i=0; i < string.length; i++) {
            var character = string.charAt(i);
          if (frequencyList[character]) {
            frequencyList[character]++;}

         else {frequencyList[character] = 1}
         }
    return frequencyList;
};
