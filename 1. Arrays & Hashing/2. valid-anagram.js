// 242. Valid Anagram - Easy Level - Topics: String, Sorting

var isAnagram = function (s, t) {
  console.log(s.split("").sort().join(""));
  console.log(t.split("").sort().join(""));

  let string1 = s.split("").sort().join("");
  let string2 = t.split("").sort().join("");

  if (string1 == string2) {
    return true;
  } else {
    return false;
  }
};
