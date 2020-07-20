const { HashMap_SepChain } = require('./hash-sep-chain');

function mainTwo() {
     const lotrTwo = new HashMap_SepChain();
     lotrTwo.MAX_LOAD_RATIO = 0.5;
     lotrTwo.SIZE_RATIO = 3;
 
     lotrTwo.set('Hobbit', 'Bilbo');
     lotrTwo.set('Hobbit', 'Frodo');
     lotrTwo.set('Wizard', 'Gandalf');
     lotrTwo.set('Human', 'Aragorn');
     lotrTwo.set('Elf', 'Legolas');
     lotrTwo.set('Maiar', 'The Necromancer');
     lotrTwo.set('Maiar', 'Sauron');
     lotrTwo.set('RingBearer', 'Gollum');
     lotrTwo.set('LadyOfLight', 'Galadriel');
     lotrTwo.set('HalfElven', 'Arwen');
     lotrTwo.set('Ent', 'Treebeard');

     // const data = [
     //      { 'Hobbit': 'Bilbo'}, 
     //      { 'Hobbit' : 'Frodo'},
     //      { 'Wizard': 'Gandalf'}, 
     //      { 'Human': 'Aragorn'}, 
     //      { 'Elf': 'Legolas'}, 
     //      { 'Maiar': 'The Necromancer'},
     //      { 'Maiar': 'Sauron'}, 
     //      { 'RingBearer': 'Gollum'}, 
     //      { 'LadyOfLight': 'Galadriel'}, 
     //      { 'HalfElven': 'Arwen'},
     //      { 'Ent': 'Treebeard'}
     // ];
     // data.forEach(obj => {
     //      const key = Object.keys(obj)[0];
     //      lotrTwo.set(key, obj[key])
     // });


 
     //Print your hash map and notice the length and items that are hashed 
     //in your hash map. Have you hashed all the items you were asked to?
     console.log(lotrTwo);
     //When the key/value pairs are objects, the length is 9, but it is 11 when they are just pairs.
     //The previous missing items are now in the length.
 
     //Retrieve the value that is hashed in the key Maiar and Hobbit.
     console.log('Maiar:', lotrTwo.get('Maiar'));
     console.log('Hobbit:', lotrTwo.get('Hobbit')); 
     //What are the values of Maiar and Hobbit that you have? 
     //The Necromancer and Bilbo.
 
     //Is there a discrepancy? Explain your answer.
     //We only show one of the two values for each key but the first of the two
     //instead of the second.
 
     //What is the capacity of your hash table after you have hashed all 
     //the above items? Explain your answer.
 
     console.log(lotrTwo._capacity);
     //Should be 24. Console.log returns 8.
     //Initial capacity is 8, and once 50% of that was passed, we multiplied 
     //it by our size ratio of 3.
 }
 
 mainTwo();
