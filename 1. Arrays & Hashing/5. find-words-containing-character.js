// 2942. Find Words Containing Character - Easy Level - Topics: Array, String

// Input: words = ["abc", "bcd", "aaaa", "cbc"], x = "a"
// Output: [0, 2]

var findWordsContaining = function (words, x) {
  let newArray = [];
  console.log(words, x);
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      newArray.push(i);
    }
  }

  if (newArray.length > 0) {
    console.log(newArray);
  } else {
    console.log([]);
  }
};
