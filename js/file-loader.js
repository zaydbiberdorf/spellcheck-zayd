// File Loader Functions

function loadDictionary() {
  fetch("data-files/dictionary.txt")
    .then((rawData) => rawData.text())
    .then((textData) => {
      dictionary = textData.split("\r\n");
      console.log("Dictionary:");
      console.log(dictionary);
    })
}

function loadAliceCh1() {
  fetch("data-files/AliceInWonderLandCh1.txt")
    .then((rawData) => rawData.text())
    .then((textData) => {
      aliceWordsCh1 = textData.match(/(?<=^|[^a-z])[a-z](?:[a-z'\d]*[a-z])?/ig);
      console.log("Alice Chapter 1:")
      console.log(aliceWordsCh1);
    })
}

function loadAliceText() {
  fetch("data-files/AliceInWonderLand.txt")
    .then((rawData) => rawData.text())
    .then((textData) => {
      aliceWordsFull = textData.match(/(?<=^|[^a-z])[a-z](?:[a-z'\d]*[a-z])?/ig);
      console.log("Alice Full:")
      console.log(aliceWordsFull);
    })
}