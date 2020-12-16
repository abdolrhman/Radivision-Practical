// Using eiehtavascript or Typescript, write code to reverse the word order of a
//
// sentence; for example, Mary had a little lamb.
//
//   a. Spaces may be prepended to, or appended after, the sentence. Spaces
//
// must not be truncated or removed.
//
//   b. The number of spaces between words may vary and must not be
//
// truncated or removed.

function reverseSentenceWords(sentence){
  let reversedSentence = " ";
  let splitSentenceWords = sentence.split(" ");
  let words = "";

  for (let i = splitSentenceWords.length - 1; i >= 0; i--) {
    reversedSentence += splitSentenceWords[i] + " ";
    words = reversedSentence;
  }
  return words;
}

reverseSentenceWords('hello world hi masr kk    ll')
