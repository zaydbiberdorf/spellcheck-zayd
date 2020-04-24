// Spell Check Starter by Mr. V

"use strict";

// Global Variables
let dictionary;
let aliceWordsCh1;
let aliceWordsFull;

// Load Data Files into Global Variables
loadDictionary();
loadAliceCh1();
loadAliceText();

// Event Listeners
document.getElementById("linear-word-btn").addEventListener("click", linearWord);
document.getElementById("binary-word-btn").addEventListener("click", binaryWord);
document.getElementById("ch1-linear-btn").addEventListener("click", ch1Linear);
document.getElementById("ch1-binary-btn").addEventListener("click", ch1Binary);
document.getElementById("full-linear-btn").addEventListener("click", fullLinear);
document.getElementById("full-binary-btn").addEventListener("click", fullBinary);

// Event Functions

// Use a linear search to see if the user's word is in the dictionary array
function linearWord() {
  // Get user word and convert to lowercase
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  // Search dictionary for userWord and output result
  let searchResult = linearSearch(dictionary, userWord);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " IS in the dictionary.";
  }
}

// Use a binary search to see if the user's word is in the dictionary array
function binaryWord() {
  // Get user word and convert to lowercase
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  // Search dictionary for userWord and output result
  let searchResult = binarySearch(dictionary, userWord);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Binary Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Binary Search: " + userWord + " IS in the dictionary.";
  }
  console.log(binarySearch(dictionary, userWord));
}

// CH1 LINEAR FUNCTION CRITERIA
// Take each word from the Global aliceWordsCh1 array and use a linear search to see if the word is in the Global dictionary array.
// Output to the console every word that is not found in the dictionary array.
// Output a total count of words not found in the dictionary in the paragraph with the id 'ch1-result'
function ch1Linear() { 
  let wordsNotInDic = 0;
  for(let i = 0; i < aliceWordsCh1.length; i++){
    let result = linearSearch(dictionary, aliceWordsCh1[i].toLowerCase());
   
    if(result == -1){
      wordsNotInDic++;
      console.log(aliceWordsCh1[i]);
      
    }
    document.getElementById("ch1-result").innerHTML = wordsNotInDic + "words not found in the dictionary";
  }
  
}

// CH1 BINARY FUNCTION CRITERIA
// Take each word from the Global aliceWordsCh1 array and use a binary search to see if the word is in the Global dictionary array.
// Output to the console every word that is not found in the dictionary array.
// Output a total count of words not found in the dictionary in the paragraph with the id 'ch1-result'
function ch1Binary() {
  let wordsNotInDic = 0;
  for(let i = 0; i < aliceWordsCh1.length; i++){
    let result = binarySearch(dictionary, aliceWordsCh1[i].toLowerCase());
   
    if(result == -1){
      wordsNotInDic++;
      console.log(aliceWordsCh1[i]);
      
    }
    document.getElementById("ch1-result").innerHTML = wordsNotInDic + "words not found in the dictionary";
  }
}

// FULL LINEAR FUNCTION CRITERIA
// Take each word from the Global aliceWordsFull array and use a linear search to see if the word is in the Global dictionary array.
// Output to the console every word that is not found in the dictionary array.
// Output a total count of words not found in the dictionary in the paragraph with the id 'full-result'
function fullLinear() {
  let wordsNotInDic = 0;
  for(let i = 0; i < aliceWordsFull.length; i++){
    let result = linearSearch(dictionary, aliceWordsFull[i].toLowerCase());
   
    if(result == -1){
      wordsNotInDic++;
      console.log(aliceWordsFull[i]);
      
    }
    document.getElementById("full-result").innerHTML = wordsNotInDic + "words not found in the dictionary";
  }
}

// FULL BINARY FUNCTION CRITERIA
// Take each word from the Global aliceWordsFull array and use a binary search to see if the word is in the Global dictionary array.
// Output to the console every word that is not found in the dictionary array.
// Output a total count of words not found in the dictionary in the paragraph with the id 'full-result'
function fullBinary() {
  let wordsNotInDic = 0;
  for(let i = 0; i < aliceWordsFull.length; i++){
    let result = binarySearch(dictionary, aliceWordsFull[i].toLowerCase());
   
    if(result == -1){
      wordsNotInDic++;
      console.log(aliceWordsFull[i]);
      
    }
    document.getElementById("full-result").innerHTML = wordsNotInDic + "words not found in the dictionary";
  }
}