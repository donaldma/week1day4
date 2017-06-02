var words = ["ground", "control", "to", "major", "tom"];
var wordLengths = [];

function mapfunc(arr, cb) {
  words.forEach(function(item, index, array) {
    actionWord (item);
  });
  console.log (wordLengths);
}

function actionWord(str) {
  wordLengths.push(str.length);
}

mapfunc(words, actionWord)