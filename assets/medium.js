// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), 
// or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

let tone = prompt("What would you like to say?"); 

if (tone === tone.toUpperCase()) {
  console.log('user is shouting')
} else if (tone === tone.toLowerCase()) {
  console.log('user is whispering')
} else {
  console.log ('user is talking normally')
};