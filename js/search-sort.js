// Search & Sort Functions Library
let input = document.getElementById('word').value;
// LINEAR SEARCH FUNCTION CRITERIA
// Search the anArray argument for the item argument using the linear search algorithm.
// If item found, return index where found, else return -1.
function linearSearch(anArray, item) {
    for(let i = 0; i < anArray.length; i++){
        if(anArray[i] == item){
            return item;
        }
    }
    return -1;
}

// BINARY SEARCH FUNCTION CRITERIA
// Search anArray for the item using the binary search algorithm.
// If item found, return index where found, else return -1.
function binarySearch(anArray, item) {
   let li = 0;
   let ui = anArray.length;
    while(li <= ui){
        let mi = Math.floor((li + ui) / 2);
        if(anArray[mi] == item){
            return anArray[mi];
        }else if(item < anArray[mi]){
            ui = mi - 1;
        }else{
            li = mi + 1;
        }
    }

    return -1;
}

