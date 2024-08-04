
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


let firts = Math.floor(Math.random()* who.length);
let second = Math.floor(Math.random()* action.length);
let third =  Math.floor(Math.random()* what.length);
let quarter = Math.floor(Math.random()* when.length);


console.log(who[firts] + action[second] + what[third] + when[quarter]);