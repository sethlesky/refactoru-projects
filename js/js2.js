
var word = prompt("Enter a word dawg!");
var out = '';

out += "You entered: " + word;
out += "\nThere are " + word.length + " characters in the word.";
out += "\nThe third character is '" + word[2] + "'";
out += "\nLowercase: " + word.toLowerCase();
out += "\nUppercase: " + word.toUpperCase();
out += "\nI wanted to have a " + word + " since I was a little boy.";
out += "\nSubword: " + word.substring(1,4);

alert(out);

