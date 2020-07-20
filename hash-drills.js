const { HashMap } = require('./hash-map');
const { HashMap_SepChain } = require('./hash-sep-chain')

function main() {
     const lotr = new HashMap();
     lotr.MAX_LOAD_RATIO = 0.5;
     lotr.SIZE_RATIO = 3;

     lotr.set('Hobbit', 'Bilbo');
     lotr.set('Hobbit', 'Frodo');
     lotr.set('Wizard', 'Gandalf');
     lotr.set('Human', 'Aragorn');
     lotr.set('Elf', 'Legolas');
     lotr.set('Maiar', 'The Necromancer');
     lotr.set('Maiar', 'Sauron');
     lotr.set('RingBearer', 'Gollum');
     lotr.set('LadyOfLight', 'Galadriel');
     lotr.set('HalfElven', 'Arwen');
     lotr.set('Ent', 'Treebeard');

     //Print your hash map and notice the length and items that are hashed 
     //in your hash map. Have you hashed all the items you were asked to?
     console.log(lotr);
     //Length = 9
     //Some items are missing due to duplicate keys.

     //Retrieve the value that is hashed in the key "Maiar" and Hobbit.
     console.log('Maiar:', lotr.get('Maiar'));
     console.log('Hobbit:', lotr.get('Hobbit'));

     //What are the values of Maiar and Hobbit that you have? 
     //Sauron and Frodo.

     //Is there a discrepancy? Explain your answer.
     //We only show one of the two values for each key because 
     //we don't have anything to handle collisions in place

     //What is the capacity of your hash table after you have hashed all 
     //the above items? Explain your answer.

     console.log(lotr._capacity);
     //Should be 24. Console.log returns 8.
     //Initial capacity is 8, and once 50% of that was passed, we multiplied 
     //it by our size ratio of 3.
}

main();

//2. WhatDoesThisDo
const WhatDoesThisDo = function () {
     let str1 = 'Hello World.';
     let str2 = 'Hello World.';
     let map1 = new HashMap();
     map1.set(str1, 10);
     map1.set(str2, 20);
     let map2 = new HashMap();
     let str3 = str1;
     let str4 = str2;
     map2.set(str3, 20);
     map2.set(str4, 10);

     console.log(map1.get(str1)); //20
     console.log(map2.get(str3)); //10 
     console.log(map1.get(str2)); //20
     console.log(map2.get(str2)); //10
}

WhatDoesThisDo();

// This function creates a collision. Any duplicates will overwrite the previous values.


//1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 
//into a hash map of length 11 using open addressing and a hash function k mod m, where 
//k is the key and m is the length.

const threeOne = new HashMap();
threeOne.set(10);
threeOne.set(22);
threeOne.set(31);
threeOne.set(4);
threeOne.set(15);
threeOne.set(28);
threeOne.set(17);
threeOne.set(88);
threeOne.set(59);

//2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 
//into the hash map with collisions resolved by separate chaining. Let the hash table have 
//a length m = 9, and let the hash function be k mod m.

const threeTwo = new HashMap_SepChain();
threeTwo.set(5);
threeTwo.set(28);
threeTwo.set(19);
threeTwo.set(15);
threeTwo.set(20);
threeTwo.set(33);
threeTwo.set(12);
threeTwo.set(17);
threeTwo.set(10);

//4. Remove Duplicates
//Implement a function to delete all duplicated characters in a string and keep 
//only the first occurrence of each character. For example, if the input is string 
//“google”, the result after deletion is “gole”. Test your program with a sentence 
//as well such as "google all that you think can think of".
function removeDupe(string) {
     const hashDupe = new Map();
     let newString = '';

     string.split('').forEach(letter => {
          if (!hashDupe.has(letter)) {
               hashDupe.set(letter, '');
               newString += letter;
          }
     });

     console.log(newString)
}

removeDupe('google'); //gole
removeDupe('google all that you think can think of'); //gole athyuinkcf

//5. Any permutation a palindrome
//Write an algorithm to check whether any anagram of some string is a palindrome. 
//Given some string, "acecarr", the algorithm should return true, because the 
//letters in "acecarr" can be rearranged to the anagram "racecar", which itself 
//is a palindrome. In contrast, given the word "north", the algorithm should return 
//false, because there's no anagram for "north" that would be a palindrome.

function palindrome(string) {

}


console.log(palindrome('acecarr'))
console.log(palindrome('north'))